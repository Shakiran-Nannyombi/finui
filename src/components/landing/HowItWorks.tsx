import React from 'react';

interface HowItWorksProps {
    onGetStarted: () => void;
}

export function HowItWorks({ onGetStarted }: HowItWorksProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0f172a] rounded-[3rem] py-24 w-full relative overflow-hidden shadow-2xl shadow-slate-900/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 md:text-left text-center">
                        <p className="text-slate-400 font-bold tracking-[0.2em] text-sm uppercase mb-4">How Finui Works</p>
                        <h2 className="text-4xl md:text-5xl font-black text-white max-w-2xl leading-tight">
                            Turn your daily hustle into <span className="text-emerald-400 font-serif italic font-normal">verifiable</span> financial power
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Phone Mockups */}
                        <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center">
                            {/* Back phone */}
                            <div className="absolute left-0 md:left-10 top-12 w-64 h-[450px] md:h-[500px] bg-slate-800 rounded-[2.5rem] border-[8px] border-slate-700 shadow-2xl transform -rotate-6 opacity-60">
                                <div className="p-6 space-y-4 mt-8">
                                    <div className="w-1/2 h-4 bg-slate-600 rounded-full"></div>
                                    <div className="w-full h-32 bg-slate-700 rounded-xl"></div>
                                    <div className="w-3/4 h-4 bg-slate-600 rounded-full"></div>
                                </div>
                            </div>

                            {/* Front phone */}
                            <div className="absolute right-0 md:right-10 z-10 w-72 h-[500px] md:h-[550px] bg-white rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl transform rotate-3 overflow-hidden flex flex-col">
                                {/* Notch */}
                                <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
                                    <div className="w-32 h-6 bg-slate-800 rounded-b-3xl"></div>
                                </div>
                                {/* Screen Content */}
                                <div className="flex-1 p-6 pt-12 bg-gray-50 flex flex-col gap-4">
                                    <div className="text-center space-y-2 mt-4">
                                        <h4 className="font-bold text-gray-900 text-lg">Trust Score</h4>
                                        <div className="text-5xl font-black text-emerald-600">85<span className="text-xl text-gray-400">/100</span></div>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-3 mt-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs font-bold text-gray-500">Regularity</span>
                                            <span className="text-xs font-bold text-emerald-600">90%</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="w-[90%] h-full bg-emerald-500"></div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs font-bold text-gray-500">Consistency</span>
                                            <span className="text-xs font-bold text-emerald-600">82%</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="w-[82%] h-full bg-emerald-500"></div>
                                        </div>
                                    </div>
                                    <div className="mt-auto bg-emerald-100 p-4 rounded-2xl border border-emerald-200">
                                        <p className="text-sm font-bold text-emerald-800 text-center">Tier 2 Unlocked!</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative glowing blobs */}
                            <div className="absolute bottom-10 left-10 w-48 h-48 bg-emerald-500 rounded-full mix-blend-screen filter blur-[4rem] opacity-40"></div>
                            <div className="absolute top-20 right-10 w-48 h-48 bg-teal-400 rounded-full mix-blend-screen filter blur-[4rem] opacity-20"></div>
                        </div>

                        {/* Right: Timeline */}
                        <div className="space-y-12 relative md:pl-10">
                            {/* Connecting line */}
                            <div className="absolute left-[23px] md:left-[63px] top-8 bottom-8 w-px bg-slate-700"></div>

                            {/* Step 1 */}
                            <div className="relative flex gap-6 md:gap-8 items-start">
                                <div className="w-12 h-12 rounded-full border border-slate-600 bg-slate-800 flex items-center justify-center text-slate-400 font-bold text-lg z-10 shrink-0">1</div>
                                <div className="pt-2">
                                    <h3 className="text-xl font-bold text-slate-200 mb-2">Connect your mobile money</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">Securely link your MTN or Airtel money account to start tracking your daily transactions.</p>
                                </div>
                            </div>

                            {/* Step 2 (Active) */}
                            <div className="relative flex gap-6 md:gap-8 items-start">
                                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-lg z-10 shrink-0 shadow-[0_0_30px_rgba(16,185,129,0.5)]">2</div>
                                <div className="pt-2">
                                    <h3 className="text-xl font-bold text-emerald-400 mb-2">Build your Trust Score</h3>
                                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">We analyze your income regularity and savings habits to generate a verifiable financial identity.</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative flex gap-6 md:gap-8 items-start">
                                <div className="w-12 h-12 rounded-full border border-slate-600 bg-slate-800 flex items-center justify-center text-slate-400 font-bold text-lg z-10 shrink-0">3</div>
                                <div className="pt-2">
                                    <h3 className="text-xl font-bold text-slate-200 mb-2">Unlock credit & loans</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">Access business loans and higher credit tiers based on your proven financial history.</p>
                                </div>
                            </div>

                            <div className="pt-8 pl-18 md:pl-20">
                                <button
                                    onClick={onGetStarted}
                                    className="bg-emerald-400 hover:bg-emerald-300 text-slate-900 px-8 py-4 rounded-xl font-black text-sm tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(52,211,153,0.4)] hover:shadow-[0_0_30px_rgba(52,211,153,0.6)] hover:-translate-y-1"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
