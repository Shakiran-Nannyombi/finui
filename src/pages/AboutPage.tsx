import { motion } from 'motion/react';
import { ShieldCheck, TrendingUp, PiggyBank, Wallet } from 'lucide-react';
import { TabName } from '../types';

export function AboutPage({ setActiveTab }: { setActiveTab: (tab: TabName) => void }) {
    return (
        <div className="flex flex-col gap-24 pb-24 relative">
            {/* Background Blobs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"></div>
            </div>

            {/* Hero Section */}
            <div className="relative bg-slate-900 pt-32 pb-24 overflow-hidden z-10">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-emerald-400 font-black tracking-[0.3em] uppercase text-sm mb-6"
                    >
                        Our Mission
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-8"
                    >
                        Financial inclusion for the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">unbanked hustle.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Finui bridges the gap between informal work and formal finance using alternative data and AI-driven trust metrics.
                    </motion.p>
                </div>

                {/* Creative Bottom Edge */}
                <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden pointer-events-none">
                    <svg className="absolute bottom-0 w-full h-32 text-white" viewBox="0 0 1440 100" fill="currentColor" preserveAspectRatio="none">
                        <path d="M0,100 C480,0 960,0 1440,100 L1440,100 L0,100 Z" />
                    </svg>
                </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Why Finui */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6"
                    >
                        <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                            <ShieldCheck size={32} />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900">Why Finui?</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Millions of informal workers lack access to traditional banking because they don't have formal pay slips. We use alternative data—like mobile money transaction patterns—to build a verifiable "Trust Score."
                        </p>
                    </motion.div>

                    {/* Our Vision */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-emerald-600 p-10 rounded-[3rem] shadow-xl shadow-emerald-200/50 text-white flex flex-col gap-6"
                    >
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white">
                            <TrendingUp size={32} />
                        </div>
                        <h2 className="text-3xl font-black">Our Vision</h2>
                        <p className="text-emerald-50 text-lg leading-relaxed">
                            We envision a world where every hard-working individual, regardless of their employment status, has the tools to grow their wealth, access credit, and secure their financial future.
                        </p>
                    </motion.div>
                </div>

                {/* How it Works Grid */}
                <div className="mt-24 space-y-12">
                    <div className="text-center">
                        <h2 className="text-4xl font-black text-slate-900">How to use Finui</h2>
                        <p className="text-slate-500 mt-4">Four simple steps to financial freedom.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Track", desc: "Connect your mobile money and track daily income.", icon: Wallet },
                            { step: "02", title: "Monitor", desc: "Watch your Trust Score grow with every transaction.", icon: ShieldCheck },
                            { step: "03", title: "Save", desc: "Follow AI nudges to save small amounts effortlessly.", icon: PiggyBank },
                            { step: "04", title: "Unlock", desc: "Access micro-loans and higher credit tiers.", icon: TrendingUp },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-lg transition-all group"
                            >
                                <div className="text-4xl font-black text-slate-200 mb-6 group-hover:text-emerald-200 transition-colors">{item.step}</div>
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 mb-4">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section for About Page */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 bg-emerald-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full -ml-20 -mb-20 blur-3xl"></div>
                    </div>

                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight">Ready to build your <br />financial future?</h2>
                        <p className="text-emerald-100/70 text-lg max-w-2xl mx-auto">Join thousands of entrepreneurs who are unlocking credit and growing their businesses with Finui.</p>
                        <button
                            onClick={() => setActiveTab('auth')}
                            className="bg-white text-emerald-900 px-10 py-4 rounded-2xl font-black text-lg hover:bg-emerald-50 transition-all shadow-xl shadow-emerald-950/20"
                        >
                            Get Started Now
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
