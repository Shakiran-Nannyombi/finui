import React, { useState, useEffect } from 'react';
import { Home, PiggyBank, User as UserIcon, TrendingUp, ArrowRight, ShieldCheck, AlertCircle, LayoutDashboard, Wallet, Info } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Logo = ({ className }: { className?: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="#10B981"/>
    <path d="M2 23L16 30L30 23V9L16 16L2 9V23Z" fill="#059669"/>
    <path d="M16 16L30 9V23L16 30V16Z" fill="#047857"/>
  </svg>
);

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 mt-auto py-8 pb-24 md:pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <Logo className="w-6 h-6" />
        <span className="text-lg font-black tracking-tight text-gray-900">Finui</span>
      </div>
      <p className="text-sm text-gray-500">© {new Date().getFullYear()} Finui Financial. All rights reserved.</p>
    </div>
  </footer>
);

// --- Types ---
interface User {
  id: string;
  name: string;
  balance: number;
  savingsBalance: number;
  creditTier: number;
}

interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: 'credit' | 'debit';
  category: string;
  date: string;
}

interface TrustScore {
  overall: number;
  breakdown: {
    regularity: number;
    consistency: number;
    stability: number;
  };
  recommendation: string;
}

// --- Components ---

function LandingPage({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Section */}
      <div className="relative bg-emerald-900 rounded-[3rem] overflow-hidden text-white p-10 md:p-20 flex flex-col items-center text-center shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute top-0 -right-24 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-24 left-20 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            Financial Power for the <span className="text-emerald-300">Informal Economy</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-10 font-medium">
            Build your Trust Score, automate micro-savings, and unlock credit tiers without a traditional bank history.
          </p>
          <button 
            onClick={onGetStarted}
            className="bg-white text-emerald-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-50 hover:scale-105 transition-all shadow-xl flex items-center gap-2 mx-auto"
          >
            Enter Dashboard <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-emerald-200 transition-colors">
          <div className="bg-emerald-100 w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
            <ShieldCheck size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Trust Score Engine</h3>
          <p className="text-gray-600 leading-relaxed">We analyze your income regularity and savings stability to generate a reliable credit score.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-emerald-200 transition-colors">
          <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
            <PiggyBank size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Micro-Savings</h3>
          <p className="text-gray-600 leading-relaxed">Smart AI nudges help you save small amounts when you earn, building your wealth effortlessly.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-emerald-200 transition-colors">
          <div className="bg-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
            <TrendingUp size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Credit Unlocks</h3>
          <p className="text-gray-600 leading-relaxed">Level up your credit tiers by maintaining a good Trust Score and consistent savings habits.</p>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">About Finui</h1>
        <p className="text-xl text-gray-500 font-medium">Empowering informal workers through accessible financial tools.</p>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Millions of informal workers lack access to traditional banking and credit facilities because they don't have formal pay slips or predictable monthly salaries. Finui bridges this gap by using alternative data—like mobile money transaction patterns—to build a verifiable "Trust Score."
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-t border-gray-100 pt-8">How to Use Finui</h2>
        
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="shrink-0 w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-xl">1</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Track Your Transactions</h3>
              <p className="text-gray-600 leading-relaxed">Connect your mobile money account. Finui automatically categorizes your daily income and expenses to understand your cash flow.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="shrink-0 w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-xl">2</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Monitor Your Trust Score</h3>
              <p className="text-gray-600 leading-relaxed">Check the Dashboard to see your Trust Score. It improves based on three factors: Income Regularity, Consistency, and Savings Stability.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="shrink-0 w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-xl">3</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Follow Smart Savings Nudges</h3>
              <p className="text-gray-600 leading-relaxed">Visit the Savings tab. Our AI detects when you've had a good income day and suggests a small, manageable amount to save.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="shrink-0 w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-xl">4</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Unlock Credit Tiers</h3>
              <p className="text-gray-600 leading-relaxed">As your Trust Score grows and your savings balance increases, you will automatically unlock higher credit tiers, giving you access to micro-loans when you need them.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dashboard({ user, score, transactions }: { user: User | null, score: TrustScore | null, transactions: Transaction[] }) {
  if (!user || !score) return <div className="p-12 flex justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div></div>;

  const scoreData = [
    { name: 'Score', value: score.overall },
    { name: 'Remaining', value: 100 - score.overall }
  ];
  const COLORS = ['#10b981', '#e5e7eb'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-emerald-600 text-white p-8 rounded-3xl shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="text-emerald-100 text-lg mb-1">Welcome back,</p>
          <h1 className="text-4xl font-bold">{user.name}</h1>
        </div>
        <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm min-w-[280px] border border-white/10">
          <p className="text-emerald-100 text-sm mb-2 font-medium">Total Available Balance</p>
          <h2 className="text-4xl font-bold">UGX {user.balance.toLocaleString()}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trust Score Card (Spans 2 columns on desktop) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <ShieldCheck className="text-emerald-500" size={24} />
                Trust Score Engine
              </h3>
              <p className="text-gray-500 text-sm mt-1">Your financial reliability metric</p>
            </div>
            <span className="text-sm font-bold bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full">
              Tier {user.creditTier} Unlocked
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-48 h-48 shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={scoreData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                    stroke="none"
                  >
                    {scoreData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-5xl font-black text-gray-800">{score.overall}</span>
                <span className="text-sm text-gray-500 font-medium mt-1">/ 100</span>
              </div>
            </div>
            
            <div className="flex-1 w-full space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 font-medium">Income Regularity</span>
                  <span className="font-bold text-gray-900">{score.breakdown.regularity}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${score.breakdown.regularity}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 font-medium">Consistency</span>
                  <span className="font-bold text-gray-900">{score.breakdown.consistency}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div className="bg-purple-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${score.breakdown.consistency}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 font-medium">Savings Stability</span>
                  <span className="font-bold text-gray-900">{score.breakdown.stability}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div className="bg-emerald-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${score.breakdown.stability}%` }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50/80 border border-blue-100 rounded-2xl flex items-start gap-4">
            <div className="bg-blue-100 p-2 rounded-full shrink-0">
              <TrendingUp className="text-blue-600" size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">AI Recommendation</h4>
              <p className="text-sm text-blue-800 leading-relaxed">{score.recommendation}</p>
            </div>
          </div>
        </div>

        {/* Recent Transactions (Spans 1 column) */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
            <button className="text-sm text-emerald-600 font-semibold hover:text-emerald-700">View All</button>
          </div>
          <div className="space-y-4 flex-1 overflow-y-auto pr-2">
            {transactions.slice(0, 6).map(tx => (
              <div key={tx.id} className="group p-4 rounded-2xl flex items-center justify-between border border-gray-50 hover:border-emerald-100 hover:bg-emerald-50/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                    tx.type === 'credit' ? "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200" : "bg-red-100 text-red-600 group-hover:bg-red-200"
                  )}>
                    {tx.type === 'credit' ? <TrendingUp size={20} /> : <ArrowRight size={20} className="rotate-45" />}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{tx.category}</p>
                    <p className="text-sm text-gray-500">{new Date(tx.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                </div>
                <span className={cn(
                  "font-bold whitespace-nowrap",
                  tx.type === 'credit' ? "text-emerald-600" : "text-gray-900"
                )}>
                  {tx.type === 'credit' ? '+' : '-'} UGX {tx.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SavingsFlow({ user, onTransferSuccess }: { user: User | null, onTransferSuccess: () => void }) {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{suggestedAmount: number, message: string} | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      fetch(`/api/savings/recommendation/${user.id}`)
        .then(res => res.json())
        .then(data => setRecommendation(data))
        .catch(console.error);
    }
  }, [user]);

  const handleTransfer = async () => {
    if (!user || !amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setError('Please enter a valid amount');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/savings/transfer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, amount: Number(amount) })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Transfer failed');
      
      setAmount('');
      onTransferSuccess();
      alert('Transfer successful!');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Savings & Investments</h2>
        <p className="text-gray-500 mt-2">Grow your wealth and unlock better credit tiers.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          {/* Total Savings Card */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-teal-900 opacity-20 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                    <PiggyBank size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-emerald-50">Total Savings</h3>
                </div>
              </div>
              <p className="text-5xl font-black mb-6 tracking-tight">UGX {user.savingsBalance.toLocaleString()}</p>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-md border border-white/10">
                <p className="text-sm text-emerald-50 leading-relaxed">
                  Saving consistently increases your Trust Score and unlocks higher credit tiers. You are currently on Tier {user.creditTier}.
                </p>
              </div>
            </div>
          </div>

          {/* Smart Suggestion */}
          {recommendation && recommendation.suggestedAmount > 0 && (
            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="bg-blue-600 p-4 rounded-2xl text-white shrink-0 shadow-md shadow-blue-200">
                  <TrendingUp size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Smart Suggestion</h4>
                  <p className="text-blue-800 mb-6 leading-relaxed">{recommendation.message}</p>
                  <button 
                    onClick={() => setAmount(recommendation.suggestedAmount.toString())}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    Save UGX {recommendation.suggestedAmount} Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Transfer Form */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-fit">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gray-100 p-3 rounded-xl text-gray-700">
              <Wallet size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Quick Transfer</h3>
          </div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl text-sm flex items-center gap-3 border border-red-100">
              <AlertCircle size={20} className="shrink-0" />
              <span className="font-medium">{error}</span>
            </div>
          )}
          
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Amount to Save (UGX)</label>
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg">UGX</span>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-16 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-lg font-semibold text-gray-900 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                  placeholder="0.00"
                />
              </div>
              <div className="flex justify-between items-center mt-3">
                <p className="text-sm text-gray-500 font-medium">Available balance: <span className="text-gray-900">UGX {user.balance.toLocaleString()}</span></p>
                <button onClick={() => setAmount(user.balance.toString())} className="text-sm text-emerald-600 font-bold hover:text-emerald-700">Max</button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">Quick Amounts</label>
              <div className="grid grid-cols-3 gap-3">
                {[100, 500, 1000].map(val => (
                  <button 
                    key={val}
                    onClick={() => setAmount(val.toString())}
                    className="py-3 border-2 border-gray-100 rounded-xl text-base font-bold text-gray-600 hover:bg-emerald-50 hover:border-emerald-500 hover:text-emerald-600 transition-all"
                  >
                    +{val}
                  </button>
                ))}
              </div>
            </div>
            
            <button 
              onClick={handleTransfer}
              disabled={loading || !amount}
              className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-3 shadow-lg shadow-emerald-200 hover:shadow-emerald-300"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              ) : (
                <>Confirm Transfer <ArrowRight size={20} /></>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'landing' | 'home' | 'savings' | 'about' | 'profile'>('landing');
  const [user, setUser] = useState<User | null>(null);
  const [score, setScore] = useState<TrustScore | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchData = async () => {
    try {
      const [userRes, scoreRes, txRes] = await Promise.all([
        fetch('/api/user/user-1'),
        fetch('/api/trust-score/user-1'),
        fetch('/api/transactions/user-1')
      ]);
      
      setUser(await userRes.json());
      setScore(await scoreRes.json());
      setTransactions(await txRes.json());
    } catch (err) {
      console.error("Failed to fetch data", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50/50 font-sans text-gray-900 flex flex-col">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('landing')}>
              <Logo />
              <span className="text-2xl font-black tracking-tight text-gray-900">Finui</span>
            </div>
            
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-2">
              <button 
                onClick={() => setActiveTab('landing')} 
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2", 
                  activeTab === 'landing' ? "bg-emerald-50 text-emerald-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Home size={18} />
                Home
              </button>
              <button 
                onClick={() => setActiveTab('about')} 
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2", 
                  activeTab === 'about' ? "bg-emerald-50 text-emerald-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Info size={18} />
                About
              </button>
              <button 
                onClick={() => setActiveTab('home')} 
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2", 
                  activeTab === 'home' ? "bg-emerald-50 text-emerald-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <LayoutDashboard size={18} />
                Dashboard
              </button>
              <button 
                onClick={() => setActiveTab('savings')} 
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2", 
                  activeTab === 'savings' ? "bg-emerald-50 text-emerald-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <PiggyBank size={18} />
                Savings
              </button>
              <button 
                onClick={() => setActiveTab('profile')} 
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2", 
                  activeTab === 'profile' ? "bg-emerald-50 text-emerald-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <UserIcon size={18} />
                Profile
              </button>
            </div>

            {/* Mobile Menu Button (simplified) */}
            <div className="flex md:hidden items-center">
              <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                <span className="sr-only">Open menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 pb-20 md:pb-8">
        {activeTab === 'landing' && <LandingPage onGetStarted={() => setActiveTab('home')} />}
        {activeTab === 'home' && <Dashboard user={user} score={score} transactions={transactions} />}
        {activeTab === 'savings' && <SavingsFlow user={user} onTransferSuccess={fetchData} />}
        {activeTab === 'about' && <AboutPage />}
        {activeTab === 'profile' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center text-gray-500">
            <div className="bg-white p-8 rounded-full shadow-sm border border-gray-100 mb-6">
              <UserIcon size={64} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Settings</h2>
            <p className="text-gray-500">Account management features coming soon.</p>
          </div>
        )}
      </main>

      <Footer />

      {/* Mobile Bottom Navigation (Only visible on small screens) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center z-50 pb-safe">
        <button 
          onClick={() => setActiveTab('landing')}
          className={cn(
            "flex flex-col items-center gap-1 p-2 transition-colors",
            activeTab === 'landing' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
          )}
        >
          <Home size={24} className={activeTab === 'landing' ? "fill-emerald-100" : ""} />
          <span className="text-[10px] font-bold">Home</span>
        </button>

        <button 
          onClick={() => setActiveTab('about')}
          className={cn(
            "flex flex-col items-center gap-1 p-2 transition-colors",
            activeTab === 'about' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
          )}
        >
          <Info size={24} className={activeTab === 'about' ? "fill-emerald-100" : ""} />
          <span className="text-[10px] font-bold">About</span>
        </button>

        <button 
          onClick={() => setActiveTab('home')}
          className={cn(
            "flex flex-col items-center gap-1 p-2 transition-colors",
            activeTab === 'home' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
          )}
        >
          <LayoutDashboard size={24} className={activeTab === 'home' ? "fill-emerald-100" : ""} />
          <span className="text-[10px] font-bold">Dashboard</span>
        </button>
        
        <button 
          onClick={() => setActiveTab('savings')}
          className={cn(
            "flex flex-col items-center gap-1 p-2 transition-colors",
            activeTab === 'savings' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
          )}
        >
          <PiggyBank size={24} className={activeTab === 'savings' ? "fill-emerald-100" : ""} />
          <span className="text-[10px] font-bold">Savings</span>
        </button>
        
        <button 
          onClick={() => setActiveTab('profile')}
          className={cn(
            "flex flex-col items-center gap-1 p-2 transition-colors",
            activeTab === 'profile' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
          )}
        >
          <UserIcon size={24} className={activeTab === 'profile' ? "fill-emerald-100" : ""} />
          <span className="text-[10px] font-bold">Profile</span>
        </button>
      </div>
    </div>
  );
}

