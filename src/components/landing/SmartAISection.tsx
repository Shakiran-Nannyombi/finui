import { motion } from 'motion/react';
import { PiggyBank, TrendingUp, ShieldCheck } from 'lucide-react';

export function SmartAISection() {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto bg-[#080c14] rounded-[3rem] py-24 w-full relative overflow-hidden shadow-2xl shadow-slate-900/40">

                {/* Background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full mix-blend-screen filter blur-[100px]"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px]"></div>
                </div>

                <div className="px-8 md:px-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left: Floating Chat UI */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="relative h-[500px] w-full flex items-center justify-center order-2 lg:order-1"
                        >
                            {/* Main Chat Card */}
                            <div className="absolute z-20 w-80 bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-700 shadow-2xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                                <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
                                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                                        <PiggyBank size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Finui AI</h4>
                                        <p className="text-emerald-400 text-xs">Online</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-slate-700/50 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-200">
                                        Great day today! You earned UGX 45,000 more than your Tuesday average. 📈
                                    </div>
                                    <div className="bg-slate-700/50 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-200">
                                        Should we save UGX 10,000 towards your "New Sewing Machine" goal?
                                    </div>
                                    <div className="flex justify-end">
                                        <div className="bg-emerald-600 rounded-2xl rounded-tr-sm p-4 text-sm text-white shadow-lg shadow-emerald-900/50">
                                            Yes, save it! 🎯
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Goal Progress Card */}
                            <div className="absolute z-30 -right-4 top-20 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 transform rotate-6 animate-bounce" style={{ animationDuration: '3s' }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <TrendingUp size={16} className="text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold">Goal Progress</p>
                                        <p className="text-sm font-black text-gray-900">65% Reached</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Trust Score Card */}
                            <div className="absolute z-10 -left-8 bottom-20 bg-slate-800 rounded-2xl p-4 shadow-2xl border border-slate-700 transform -rotate-12">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                        <ShieldCheck size={16} className="text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold">Trust Score</p>
                                        <p className="text-sm font-black text-emerald-400">+5 Points</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                            className="space-y-8 order-1 lg:order-2"
                        >
                            <p className="text-emerald-400 font-bold tracking-[0.2em] text-sm uppercase">Smart Savings</p>
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                An AI that understands your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">hustle.</span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Informal income is unpredictable. Our AI analyzes your daily cash flow and suggests comfortable micro-savings only on your good days.
                            </p>
                            <ul className="space-y-6 mt-8">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-1">
                                        <TrendingUp size={20} className="text-emerald-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Income Detection</h4>
                                        <p className="text-slate-400 text-sm mt-1">Automatically identifies high-earning days vs slow days.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-1">
                                        <PiggyBank size={20} className="text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Painless Saving</h4>
                                        <p className="text-slate-400 text-sm mt-1">Suggests saving amounts that won't hurt your daily operations.</p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
}
