import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, ShieldCheck, TrendingUp, CheckCircle2, PiggyBank, AlertCircle } from 'lucide-react';
import { Logo } from '../components/ui/Logo';
import { User } from '../types';

export function AuthPage({ onLogin, onBack }: { onLogin: (user: User) => void, onBack: () => void }) {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [businessType, setBusinessType] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup';
            const body = isLogin
                ? { email, password }
                : { name, email, phone, businessType, password };

            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const data = await res.json();
            if (data.success) {
                onLogin(data.user);
            } else {
                setError(data.error || 'Authentication failed');
            }
        } catch (err) {
            setError('Network error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col lg:flex-row overflow-hidden">

            {/* Left Column: Form */}
            <div className="w-full lg:w-1/2 h-full overflow-y-auto flex flex-col bg-white">
                {/* Header with back button + logo */}
                <div className="flex items-center justify-between px-8 pt-6 pb-4 shrink-0">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-bold text-gray-600 hover:text-emerald-600 hover:border-emerald-200 transition-all"
                    >
                        <ArrowLeft size={16} /> Back
                    </button>
                    <div className="flex items-center gap-2">
                        <Logo className="w-7 h-7" />
                        <span className="text-xl font-black tracking-tight text-gray-900">Finui</span>
                    </div>
                </div>

                {/* Form content */}
                <div className="flex-1 flex items-center justify-center px-8 lg:px-16 py-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-md w-full"
                    >
                        <div className="mb-10">
                            <h2 className="text-4xl font-black text-gray-900 tracking-tight">
                                {isLogin ? 'Welcome Back' : 'Join the Future'}
                            </h2>
                            <p className="text-gray-500 mt-3 text-lg">
                                {isLogin ? 'Log in to access your financial dashboard' : 'Start building your trust score today'}
                            </p>
                        </div>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-red-50 text-red-600 p-4 rounded-2xl mb-6 text-sm font-medium flex items-center gap-3 border border-red-100"
                            >
                                <AlertCircle size={20} /> {error}
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <AnimatePresence mode="wait">
                                {!isLogin && (
                                    <motion.div
                                        key="signup-fields"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="space-y-5 overflow-hidden"
                                    >
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1.5">Full Name</label>
                                            <input type="text" required value={name} onChange={e => setName(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all" placeholder="Amina N." />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number</label>
                                                <input type="tel" required value={phone} onChange={e => setPhone(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all" placeholder="+256..." />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-1.5">Business Type</label>
                                                <input type="text" required value={businessType} onChange={e => setBusinessType(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all" placeholder="Market Vendor" />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address</label>
                                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all" placeholder="demo@finui.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1.5">Password</label>
                                <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all" placeholder="••••••••" />
                            </div>

                            <button type="submit" disabled={loading} className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all disabled:opacity-50 mt-4 shadow-lg shadow-emerald-100">
                                {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
                            </button>
                        </form>

                        <div className="mt-8 text-center">
                            <button onClick={() => setIsLogin(!isLogin)} className="text-emerald-600 font-bold hover:underline text-base">
                                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
                            </button>
                        </div>

                        {isLogin && (
                            <div className="mt-12 pt-8 border-t border-gray-100">
                                <p className="text-xs text-gray-400 font-black tracking-widest uppercase mb-4 text-center">Quick Access Demo</p>
                                <div className="grid grid-cols-1 gap-2">
                                    <button onClick={() => { setEmail('amina@demo.com'); setPassword('demo123'); }} className="text-xs bg-gray-50 p-3 rounded-xl border border-gray-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all text-left flex items-center justify-between group">
                                        <div>
                                            <span className="font-bold text-gray-900 block group-hover:text-emerald-700">Amina (Market Vendor)</span>
                                            <span className="text-gray-500">amina@demo.com</span>
                                        </div>
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-emerald-500" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Right Column: Creative Content */}
            <div className="hidden lg:block lg:w-1/2 h-full relative bg-emerald-900 overflow-hidden">
                <AnimatePresence mode="wait">
                    {isLogin ? (
                        <motion.div
                            key="login-img"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0 flex flex-col items-center justify-center p-20 text-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-900/40 z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000"
                                alt="Market Vendor"
                                className="absolute inset-0 w-full h-full object-cover opacity-40"
                                referrerPolicy="no-referrer"
                            />
                            <div className="relative z-20 space-y-6">
                                <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto border border-white/20 shadow-2xl">
                                    <ShieldCheck size={48} className="text-emerald-400" />
                                </div>
                                <h3 className="text-4xl font-black text-white leading-tight">Your trust is your <br />most valuable asset.</h3>
                                <p className="text-emerald-100/70 text-lg max-w-sm mx-auto">We help you turn your daily transactions into a verifiable financial identity.</p>
                            </div>

                            {/* Floating UI Mockup on Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: 0.5, type: 'spring' }}
                                className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl z-30"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="size-12 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                                        <ShieldCheck className="text-white" size={24} />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white font-black text-lg">Trust Verified</p>
                                        <p className="text-emerald-200 text-xs font-bold uppercase tracking-wider">Secure Access</p>
                                    </div>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '85%' }}
                                        transition={{ delay: 1, duration: 1.5 }}
                                        className="h-full bg-emerald-400"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="signup-img"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0 flex flex-col items-center justify-center p-20 text-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-900/40 z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000"
                                alt="Growth"
                                className="absolute inset-0 w-full h-full object-cover opacity-40"
                                referrerPolicy="no-referrer"
                            />
                            <div className="relative z-20 space-y-6">
                                <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto border border-white/20 shadow-2xl">
                                    <TrendingUp size={48} className="text-emerald-400" />
                                </div>
                                <h3 className="text-4xl font-black text-white leading-tight">Grow your business <br />without boundaries.</h3>
                                <p className="text-emerald-100/70 text-lg max-w-sm mx-auto">Unlock micro-loans and credit tiers as you build your savings and trust score.</p>
                            </div>

                            {/* Floating UI Mockup on Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: 0.5, type: 'spring' }}
                                className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl z-30"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="size-12 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                                        <TrendingUp className="text-white" size={24} />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white font-black text-lg">Future Growth</p>
                                        <p className="text-blue-200 text-xs font-bold uppercase tracking-wider">Start Your Journey</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-end h-8">
                                    {[1, 2, 3, 4, 5, 6].map(i => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 10 }}
                                            animate={{ height: [10, 30, 15, 25, 20, 35][i - 1] }}
                                            transition={{ delay: 1 + (i * 0.1), duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                                            className="w-full bg-blue-400/50 rounded-t-lg"
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Floating stat pills — top of right column */}
                <div className="absolute top-6 left-6 right-6 z-30 flex justify-between items-start pointer-events-none">
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                            <CheckCircle2 size={16} className="text-white" />
                        </div>
                        <div className="text-left">
                            <p className="text-[10px] text-emerald-200 font-bold uppercase tracking-widest">Verified</p>
                            <p className="text-sm text-white font-bold">Trust Score: 850</p>
                        </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <PiggyBank size={16} className="text-white" />
                        </div>
                        <div className="text-left">
                            <p className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">Savings</p>
                            <p className="text-sm text-white font-bold">UGX 1.2M</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
