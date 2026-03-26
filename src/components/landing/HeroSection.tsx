import { ArrowRight, ShieldCheck, TrendingUp, PiggyBank, Zap, Lock } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
    onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 pt-8">
            <div className="max-w-7xl mx-auto relative bg-emerald-900 rounded-[3rem] overflow-hidden shadow-2xl shadow-emerald-950/40 min-h-[560px]">

                {/* Animated gradient blobs — restoring original green feel */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
                    <div className="absolute top-0 -right-24 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
                    <div className="absolute -bottom-24 left-20 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '4s' }} />
                </div>

                {/* Main layout: left illustrations | center text | right illustrations */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center px-6 md:px-10 py-20">

                    {/* LEFT illustrations */}
                    <div className="hidden lg:flex flex-col gap-5 items-end">

                        {/* Savings card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 w-64 shadow-xl"
                            style={{ animation: 'heroFloat 3.5s ease-in-out 0.3s infinite' }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-9 h-9 bg-blue-400/20 rounded-xl flex items-center justify-center">
                                    <PiggyBank size={18} className="text-blue-200" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-emerald-200/70 font-bold uppercase tracking-wider">Auto-saved today</p>
                                    <p className="text-base font-black text-white">+ UGX 12,000</p>
                                </div>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-blue-300 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '68%' }}
                                    transition={{ delay: 1.2, duration: 1 }}
                                />
                            </div>
                            <p className="text-[10px] text-emerald-200/50 mt-1.5">68% of monthly goal</p>
                        </motion.div>

                        {/* Credit tier card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7, duration: 0.7 }}
                            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 w-56 shadow-xl"
                            style={{ animation: 'heroFloat 4.5s ease-in-out 1s infinite' }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-purple-400/20 rounded-xl flex items-center justify-center">
                                    <Lock size={16} className="text-purple-200" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-emerald-200/70 font-bold uppercase tracking-wider">Credit Unlocked</p>
                                    <p className="text-sm font-black text-white">Tier 2 — UGX 200K</p>
                                </div>
                            </div>
                            <div className="mt-3 flex gap-1.5">
                                {[1, 2, 3].map(t => (
                                    <div key={t} className={`flex-1 h-2 rounded-full ${t <= 2 ? 'bg-emerald-400' : 'bg-white/20'}`} />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* CENTER text */}
                    <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                        <div className="space-y-3 mb-7">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                                className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight"
                            >
                                No payslip?{' '}
                                <span className="relative inline-block">
                                    <span className="relative z-10">No problem.</span>
                                    <span className="absolute bottom-1 left-0 w-full h-3 bg-white/10 rounded-sm -z-0" />
                                </span>
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
                                className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight"
                            >
                                <span className="text-emerald-300">
                                    Your hustle is your credit.
                                </span>
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-emerald-100/80 text-lg leading-relaxed max-w-lg mb-9"
                        >
                            Banks ignore informal workers. We don't.{' '}
                            <span className="text-white font-semibold">Finui turns your mobile money history into a Trust Score</span>{' '}
                            that unlocks real credit — no formal employment needed.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45, duration: 0.5 }}
                            className="flex flex-wrap gap-4 items-center justify-center mb-8"
                        >
                            <button
                                onClick={onGetStarted}
                                className="group bg-white text-emerald-900 px-8 py-4 rounded-full text-base font-black transition-all shadow-xl hover:bg-emerald-50 hover:scale-105 flex items-center gap-2"
                            >
                                Get Started Free
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={onGetStarted}
                                className="text-emerald-100/70 hover:text-white text-base font-bold transition-colors underline underline-offset-4 decoration-emerald-400/40 hover:decoration-white"
                            >
                                See how it works
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-3"
                        >
                            <div className="flex -space-x-2">
                                {['bg-emerald-400', 'bg-teal-400', 'bg-cyan-400', 'bg-blue-400'].map((c, i) => (
                                    <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-emerald-900 flex items-center justify-center text-[10px] font-black text-white`}>
                                        {['A', 'K', 'M', 'J'][i]}
                                    </div>
                                ))}
                            </div>
                            <p className="text-emerald-100/60 text-sm">
                                <span className="text-white font-bold">2,400+</span> entrepreneurs building credit
                            </p>
                        </motion.div>
                    </div>

                    {/* RIGHT illustrations */}
                    <div className="hidden lg:flex flex-col gap-5 items-start">

                        {/* Trust score ring card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 w-64 shadow-xl"
                            style={{ animation: 'heroFloat 4s ease-in-out infinite' }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-[10px] text-emerald-200/70 font-bold uppercase tracking-widest">Trust Score</p>
                                    <p className="text-emerald-200/50 text-[10px]">Updated just now</p>
                                </div>
                                <div className="w-8 h-8 bg-emerald-400/20 rounded-xl flex items-center justify-center">
                                    <ShieldCheck size={16} className="text-emerald-300" />
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="relative w-16 h-16 shrink-0">
                                    <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                                        <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                                        <motion.circle
                                            cx="40" cy="40" r="32" fill="none"
                                            stroke="#6ee7b7" strokeWidth="8"
                                            strokeLinecap="round"
                                            strokeDasharray="201"
                                            initial={{ strokeDashoffset: 201 }}
                                            animate={{ strokeDashoffset: 201 * (1 - 0.82) }}
                                            transition={{ delay: 0.9, duration: 1.4, ease: 'easeOut' }}
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                                        <span className="text-xl font-black text-white">82</span>
                                        <span className="text-[8px] text-emerald-200/60">/100</span>
                                    </div>
                                </div>
                                <div className="flex-1 space-y-2">
                                    {[{ l: 'Regularity', v: 88 }, { l: 'Consistency', v: 79 }, { l: 'Stability', v: 81 }].map((b, i) => (
                                        <div key={b.l}>
                                            <div className="flex justify-between text-[9px] mb-0.5">
                                                <span className="text-emerald-200/60">{b.l}</span>
                                                <span className="text-white font-bold">{b.v}%</span>
                                            </div>
                                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-emerald-400 rounded-full"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${b.v}%` }}
                                                    transition={{ delay: 1.1 + i * 0.15, duration: 1 }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* AI nudge card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.75, duration: 0.7 }}
                            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 w-56 shadow-xl"
                            style={{ animation: 'heroFloat 3.8s ease-in-out 0.8s infinite' }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-9 h-9 bg-yellow-400/20 rounded-xl flex items-center justify-center">
                                    <Zap size={16} className="text-yellow-300" />
                                </div>
                                <p className="text-[10px] text-emerald-200/70 font-bold uppercase tracking-wider">AI Nudge</p>
                            </div>
                            <p className="text-white text-xs leading-relaxed">Good day! Save <span className="text-emerald-300 font-bold">UGX 8,000</span> now to boost your score by +5 pts 🎯</p>
                            <div className="mt-3 flex items-center gap-2">
                                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div className="h-full bg-yellow-400 rounded-full" initial={{ width: 0 }} animate={{ width: '72%' }} transition={{ delay: 1.4, duration: 1 }} />
                                </div>
                                <span className="text-[9px] text-emerald-200/50 font-bold">+5 pts</span>
                            </div>
                        </motion.div>

                        {/* Score jumped pill */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.95, duration: 0.6 }}
                            className="bg-emerald-500/20 border border-emerald-400/30 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg"
                            style={{ animation: 'heroFloat 5s ease-in-out 1.5s infinite' }}
                        >
                            <div className="w-8 h-8 bg-emerald-400/30 rounded-xl flex items-center justify-center">
                                <TrendingUp size={16} className="text-emerald-300" />
                            </div>
                            <div>
                                <p className="text-[10px] text-emerald-200/60 font-bold uppercase tracking-wider">Score jumped</p>
                                <p className="text-sm font-black text-emerald-300">↑ +7 points</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes heroFloat {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>
        </div>
    );
}
