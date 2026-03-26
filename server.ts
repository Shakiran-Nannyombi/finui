import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';

const app = express();
app.use(express.json());

// --- Mock Database & Data Generator ---
interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: 'credit' | 'debit';
  category: string;
  date: string;
}

interface User {
  id: string;
  name: string;
  balance: number;
  savingsBalance: number;
  creditTier: number;
}

const users: Record<string, User> = {
  'user-1': { id: 'user-1', name: 'Amina', balance: 1500, savingsBalance: 300, creditTier: 1 }
};

const generateSampleTransactions = (userId: string): Transaction[] => {
  const txs: Transaction[] = [];
  const now = new Date();
  for (let i = 0; i < 30; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Income (e.g., daily wages, sales)
    if (Math.random() > 0.3) {
      txs.push({
        id: `tx-in-${i}`,
        userId,
        amount: Math.floor(Math.random() * 500) + 100,
        type: 'credit',
        category: 'Income',
        date: date.toISOString()
      });
    }
    
    // Expenses
    if (Math.random() > 0.2) {
      txs.push({
        id: `tx-out-${i}`,
        userId,
        amount: Math.floor(Math.random() * 300) + 50,
        type: 'debit',
        category: 'Food/Supplies',
        date: date.toISOString()
      });
    }
  }
  return txs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

const transactions: Record<string, Transaction[]> = {
  'user-1': generateSampleTransactions('user-1')
};

// --- Trust Score Engine ---
const calculateTrustScore = (userId: string) => {
  const userTxs = transactions[userId] || [];
  
  // 1. Regularity (frequency of income)
  const incomeTxs = userTxs.filter(t => t.type === 'credit');
  const regularityScore = Math.min(100, (incomeTxs.length / 30) * 100 * 1.5); // Expecting ~20 income days
  
  // 2. Consistency (variance in income)
  const incomeAmounts = incomeTxs.map(t => t.amount);
  const avgIncome = incomeAmounts.reduce((a, b) => a + b, 0) / (incomeAmounts.length || 1);
  const variance = incomeAmounts.reduce((a, b) => a + Math.pow(b - avgIncome, 2), 0) / (incomeAmounts.length || 1);
  const stdDev = Math.sqrt(variance);
  const consistencyScore = Math.max(0, 100 - (stdDev / (avgIncome || 1)) * 50);
  
  // 3. Income Stability (total income vs expenses)
  const totalIncome = incomeAmounts.reduce((a, b) => a + b, 0);
  const totalExpenses = userTxs.filter(t => t.type === 'debit').reduce((a, b) => a + b.amount, 0);
  const savingsRate = totalIncome > 0 ? (totalIncome - totalExpenses) / totalIncome : 0;
  const stabilityScore = Math.min(100, Math.max(0, savingsRate * 200 + 50));
  
  const overallScore = Math.round((regularityScore * 0.4) + (consistencyScore * 0.3) + (stabilityScore * 0.3));
  
  return {
    overall: overallScore || 0,
    breakdown: {
      regularity: Math.round(regularityScore) || 0,
      consistency: Math.round(consistencyScore) || 0,
      stability: Math.round(stabilityScore) || 0
    },
    recommendation: overallScore > 70 ? "Eligible for Tier 2 Micro-Credit" : "Keep saving consistently to unlock credit."
  };
};

// --- API Endpoints ---
app.get('/api/user/:id', (req, res) => {
  const user = users[req.params.id];
  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
  }
  res.json(user);
});

app.get('/api/transactions/:userId', (req, res) => {
  res.json(transactions[req.params.userId] || []);
});

app.get('/api/trust-score/:userId', (req, res) => {
  res.json(calculateTrustScore(req.params.userId));
});

app.post('/api/savings/transfer', (req, res) => {
  const { userId, amount } = req.body;
  const user = users[userId];
  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
  }
  
  if (user.balance < amount) {
    res.status(400).json({ error: 'Insufficient balance' });
    return;
  }
  
  user.balance -= amount;
  user.savingsBalance += amount;
  
  transactions[userId].unshift({
    id: `tx-save-${Date.now()}`,
    userId,
    amount,
    type: 'debit',
    category: 'Savings Transfer',
    date: new Date().toISOString()
  });
  
  res.json({ success: true, user });
});

app.get('/api/savings/recommendation/:userId', (req, res) => {
  const userTxs = transactions[req.params.userId] || [];
  const recentIncome = userTxs.filter(t => t.type === 'credit' && new Date(t.date).getTime() > Date.now() - 3 * 24 * 60 * 60 * 1000);
  
  if (recentIncome.length > 0) {
    const totalRecentIncome = recentIncome.reduce((a, b) => a + b.amount, 0);
    const suggestedAmount = Math.round(totalRecentIncome * 0.1); // Suggest saving 10% of recent income
    res.json({
      suggestedAmount,
      message: `You had a good income recently! Consider saving ${suggestedAmount} to build your Trust Score.`
    });
  } else {
    res.json({ suggestedAmount: 0, message: "Waiting for next income to suggest savings." });
  }
});

// --- Vite Middleware ---
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  const PORT = 3000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
