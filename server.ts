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
  email: string;
  balance: number;
  savingsBalance: number;
  creditTier: number;
  phone: string;
  businessType: string;
}

const users: Record<string, User> = {
  'user-1': { id: 'user-1', name: 'Amina N.', email: 'amina@demo.com', balance: 150000, savingsBalance: 450000, creditTier: 2, phone: '+256 772 123 456', businessType: 'Market Vendor' },
  'user-2': { id: 'user-2', name: 'Kato E.', email: 'kato@demo.com', balance: 50000, savingsBalance: 12000, creditTier: 1, phone: '+256 752 987 654', businessType: 'Boda Boda Rider' },
  'user-3': { id: 'user-3', name: 'Sarah M.', email: 'sarah@demo.com', balance: 850000, savingsBalance: 2100000, creditTier: 4, phone: '+256 782 456 789', businessType: 'Tailoring Shop' }
};

const generateSampleTransactions = (userId: string, baseIncome: number, baseExpense: number): Transaction[] => {
  const txs: Transaction[] = [];
  const now = new Date();
  for (let i = 0; i < 60; i++) { // 60 days of data
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Income (e.g., daily wages, sales)
    if (Math.random() > 0.2) { // 80% chance of income on a given day
      txs.push({
        id: `tx-in-${userId}-${i}`,
        userId,
        amount: Math.floor(Math.random() * baseIncome) + (baseIncome * 0.5),
        type: 'credit',
        category: 'Daily Sales',
        date: date.toISOString()
      });
    }
    
    // Expenses
    if (Math.random() > 0.3) { // 70% chance of expense
      txs.push({
        id: `tx-out-${userId}-${i}-1`,
        userId,
        amount: Math.floor(Math.random() * baseExpense) + (baseExpense * 0.2),
        type: 'debit',
        category: 'Inventory/Supplies',
        date: new Date(date.getTime() + 1000 * 60 * 60 * 2).toISOString() // 2 hours later
      });
    }

    // Personal Expenses
    if (Math.random() > 0.5) {
      txs.push({
        id: `tx-out-${userId}-${i}-2`,
        userId,
        amount: Math.floor(Math.random() * 15000) + 5000,
        type: 'debit',
        category: 'Food & Transport',
        date: new Date(date.getTime() + 1000 * 60 * 60 * 8).toISOString() // 8 hours later
      });
    }
  }
  return txs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

const transactions: Record<string, Transaction[]> = {
  'user-1': generateSampleTransactions('user-1', 40000, 20000), // Amina: Market Vendor
  'user-2': generateSampleTransactions('user-2', 25000, 10000), // Kato: Boda Boda
  'user-3': generateSampleTransactions('user-3', 120000, 60000) // Sarah: Tailor
};

// --- Trust Score Engine ---
const calculateTrustScore = (userId: string) => {
  const userTxs = transactions[userId] || [];
  
  // 1. Regularity (frequency of income)
  const incomeTxs = userTxs.filter(t => t.type === 'credit');
  const regularityScore = Math.min(100, (incomeTxs.length / 60) * 100 * 1.2); // Expecting ~50 income days in 60 days
  
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
  
  let recommendation = "Keep saving consistently to unlock credit.";
  if (overallScore > 85) recommendation = "Excellent! You are eligible for Tier 3 Micro-Credit (Up to UGX 500,000).";
  else if (overallScore > 70) recommendation = "Great job! You are eligible for Tier 2 Micro-Credit (Up to UGX 200,000).";
  else if (overallScore > 50) recommendation = "You're on track. Eligible for Tier 1 Micro-Credit (Up to UGX 50,000).";

  return {
    overall: overallScore || 0,
    breakdown: {
      regularity: Math.round(regularityScore) || 0,
      consistency: Math.round(consistencyScore) || 0,
      stability: Math.round(stabilityScore) || 0
    },
    recommendation
  };
};

// --- API Endpoints ---

// Auth Endpoints
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  // Demo login: accept any password, match email to demo users or default to user-1
  const user = Object.values(users).find(u => u.email.toLowerCase() === email.toLowerCase());
  
  if (user) {
    res.json({ success: true, user });
  } else if (email === 'demo@finui.com') {
    res.json({ success: true, user: users['user-1'] });
  } else {
    res.status(401).json({ error: 'Invalid credentials. Try amina@demo.com, kato@demo.com, or sarah@demo.com' });
  }
});

app.post('/api/auth/signup', (req, res) => {
  const { name, email, phone, businessType } = req.body;
  const newId = `user-${Date.now()}`;
  const newUser: User = {
    id: newId,
    name,
    email,
    phone,
    businessType,
    balance: 0,
    savingsBalance: 0,
    creditTier: 1
  };
  users[newId] = newUser;
  transactions[newId] = [];
  res.json({ success: true, user: newUser });
});

app.put('/api/user/:id', (req, res) => {
  const user = users[req.params.id];
  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
  }
  const { name, phone, businessType } = req.body;
  if (name) user.name = name;
  if (phone) user.phone = phone;
  if (businessType) user.businessType = businessType;
  
  res.json({ success: true, user });
});

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
    const suggestedAmount = Math.round((totalRecentIncome * 0.1) / 1000) * 1000; // Suggest saving 10% of recent income, rounded to nearest 1000 UGX
    res.json({
      suggestedAmount,
      message: `You had a good income recently! Consider saving UGX ${suggestedAmount.toLocaleString()} to build your Trust Score.`
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
