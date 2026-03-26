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
                className="md:col-span-3 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative group"
            >
                <div className="p-8 pb-0">
                    <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-emerald-100 before:absolute before:-inset-2 before:rounded-full before:border before:border-emerald-50 bg-emerald-50/50 items-center justify-center">
                        <ShieldCheck className="size-12 text-emerald-500" strokeWidth={1.5} />
                        <div className="absolute -right-2 -top-2 bg-white shadow-lg rounded-full px-3 py-1 text-sm font-bold text-emerald-600 border border-emerald-100 animate-pulse">
                            750
                        </div>
                    </div>
                    <div className="relative z-10 mt-8 space-y-2 text-center pb-8">
                        <h3 className="text-2xl font-bold text-gray-900 transition group-hover:text-emerald-600">Trust Score Engine</h3>
                        <p className="text-gray-600 leading-relaxed">We analyze your income regularity and savings stability to generate a reliable credit score.</p>
                    </div>
                </div>
            </motion.div>

            {/* Micro-Savings */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-3 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative group"
            >
                <div className="p-8 pb-0">
                    <div className="relative flex h-32 w-full items-center justify-center">
                        <svg className="absolute inset-0 h-full w-full text-blue-100" viewBox="0 0 254 104" fill="none">
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
                        <h3 className="text-2xl font-bold text-gray-900 transition group-hover:text-blue-600">Micro-Savings</h3>
                        <p className="text-gray-600 leading-relaxed">Smart AI nudges help you save small amounts when you earn, building your wealth effortlessly.</p>
                    </div>
                </div>
            </motion.div>

            {/* Credit Unlocks */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-6 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative group"
            >
                <div className="grid md:grid-cols-2 h-full">
                    <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                        <div className="relative flex aspect-square size-16 rounded-full border border-purple-100 before:absolute before:-inset-2 before:rounded-full before:border before:border-purple-50 bg-purple-50/50 items-center justify-center">
                            <TrendingUp className="size-8 text-purple-500" strokeWidth={1.5} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-gray-900 transition group-hover:text-purple-600">Credit Unlocks</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">Level up your credit tiers by maintaining a good Trust Score and consistent savings habits.</p>
                        </div>
                    </div>

                    <div className="relative bg-slate-50 border-t md:border-t-0 md:border-l border-gray-100 p-8 md:p-12 flex flex-col justify-center space-y-6 overflow-hidden">
                        {/* Decorative background grid */}
                        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.5 }}></div>

                        <div className="relative z-10 flex w-[85%] items-center justify-end gap-3 self-start transform transition-transform group-hover:translate-x-2">
                            <span className="block h-fit rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-bold shadow-sm text-gray-600">Tier 1: UGX 50,000</span>
                            <div className="size-10 rounded-full bg-gray-200 border-4 border-white shadow-sm flex items-center justify-center text-gray-500 shrink-0">
                                <Shield size={16} />
                            </div>
                        </div>

                        <div className="relative z-10 flex w-[85%] items-center gap-3 self-center transform transition-transform group-hover:-translate-x-2">
                            <div className="size-12 rounded-full bg-emerald-100 border-4 border-white shadow-md flex items-center justify-center text-emerald-600 shrink-0">
                                <ShieldCheck size={20} />
                            </div>
                            <span className="block h-fit rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-base font-bold shadow-md text-emerald-700">Tier 2: UGX 200,000</span>
                        </div>

                        <div className="relative z-10 flex w-[85%] items-center justify-end gap-3 self-end transform transition-transform group-hover:translate-x-2">
                            <span className="block h-fit rounded-xl border border-purple-200 bg-purple-50 px-4 py-2 text-lg font-black shadow-lg text-purple-700">Tier 3: UGX 1,000,000</span>
                            <div className="size-14 rounded-full bg-purple-100 border-4 border-white shadow-lg flex items-center justify-center text-purple-600 shrink-0">
                                <TrendingUp size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    );
}
