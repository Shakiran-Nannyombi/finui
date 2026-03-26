import { motion } from 'motion/react';
import { ShieldCheck, PiggyBank, TrendingUp, Shield } from 'lucide-react';

export function FeaturesGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">

            {/* Trust Score Engine */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl overflow-hidden shadow-lg shadow-emerald-200 relative group"
            >
                <div className="p-8 pb-0">
                    <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-white/20 before:absolute before:-inset-2 before:rounded-full before:border before:border-white/10 bg-white/10 items-center justify-center">
                        <ShieldCheck className="size-12 text-white" strokeWidth={1.5} />
                        <div className="absolute -right-2 -top-2 bg-white shadow-lg rounded-full px-3 py-1 text-sm font-bold text-emerald-600 border border-emerald-100 animate-pulse">
                            750
                        </div>
                    </div>
                    <div className="relative z-10 mt-8 space-y-2 text-center pb-8">
                        <h3 className="text-2xl font-bold text-white">Trust Score Engine</h3>
                        <p className="text-emerald-100/80 leading-relaxed">We analyze your income regularity and savings stability to generate a reliable credit score.</p>
                    </div>
                </div>
            </motion.div>

            {/* Micro-Savings */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl overflow-hidden shadow-lg shadow-blue-200 relative group"
            >
                <div className="p-8 pb-0">
                    <div className="relative flex h-32 w-full items-center justify-center">
                        <svg className="absolute inset-0 h-full w-full text-white/20" viewBox="0 0 254 104" fill="none">
                            <path d="M0 80 Q 40 20 80 60 T 160 40 T 254 20" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                            <path d="M0 80 Q 40 20 80 60 T 160 40 T 254 20 L 254 104 L 0 104 Z" fill="currentColor" opacity="0.3" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-3 flex items-center gap-3 border border-blue-50 transform transition-transform group-hover:scale-110">
                                <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                                    <PiggyBank size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold">Auto-Saved</p>
                                    <p className="text-sm font-black text-gray-900">+ UGX 5,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 mt-8 space-y-2 text-center pb-8">
                        <h3 className="text-2xl font-bold text-white">Micro-Savings</h3>
                        <p className="text-blue-100/80 leading-relaxed">Smart AI nudges help you save small amounts when you earn, building your wealth effortlessly.</p>
                    </div>
                </div>
            </motion.div>

            {/* Credit Unlocks */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-6 bg-gradient-to-br from-purple-600 to-violet-700 rounded-3xl overflow-hidden shadow-lg shadow-purple-200 relative group"
            >
                <div className="grid md:grid-cols-2 h-full">
                    <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                        <div className="relative flex aspect-square size-16 rounded-full border border-white/20 before:absolute before:-inset-2 before:rounded-full before:border before:border-white/10 bg-white/10 items-center justify-center">
                            <TrendingUp className="size-8 text-white" strokeWidth={1.5} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-white">Credit Unlocks</h3>
                            <p className="text-purple-100/80 leading-relaxed text-lg">Level up your credit tiers by maintaining a good Trust Score and consistent savings habits.</p>
                        </div>
                    </div>

                    <div className="relative bg-white/10 border-t md:border-t-0 md:border-l border-white/10 p-8 md:p-12 flex flex-col justify-center space-y-6 overflow-hidden">
                        {/* Decorative background grid */}
                        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                        <div className="relative z-10 flex w-[85%] items-center justify-end gap-3 self-start transform transition-transform group-hover:translate-x-2">
                            <span className="block h-fit rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold shadow-sm text-white">Tier 1: UGX 50,000</span>
                            <div className="size-10 rounded-full bg-white/20 border-4 border-white/30 shadow-sm flex items-center justify-center text-white shrink-0">
                                <Shield size={16} />
                            </div>
                        </div>

                        <div className="relative z-10 flex w-[85%] items-center gap-3 self-center transform transition-transform group-hover:-translate-x-2">
                            <div className="size-12 rounded-full bg-emerald-400 border-4 border-white/30 shadow-md flex items-center justify-center text-white shrink-0">
                                <ShieldCheck size={20} />
                            </div>
                            <span className="block h-fit rounded-xl border border-emerald-300/40 bg-emerald-400/30 px-4 py-2 text-base font-bold shadow-md text-white">Tier 2: UGX 200,000</span>
                        </div>

                        <div className="relative z-10 flex w-[85%] items-center justify-end gap-3 self-end transform transition-transform group-hover:translate-x-2">
                            <span className="block h-fit rounded-xl border border-yellow-300/40 bg-yellow-400/20 px-4 py-2 text-lg font-black shadow-lg text-yellow-200">Tier 3: UGX 1,000,000</span>
                            <div className="size-14 rounded-full bg-yellow-400/30 border-4 border-white/30 shadow-lg flex items-center justify-center text-yellow-200 shrink-0">
                                <TrendingUp size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    );
}
