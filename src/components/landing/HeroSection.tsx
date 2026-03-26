import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
    onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16 w-full relative">
            {/* Background Blobs for Hero */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px]"></div>
            </div>

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
        </div>
    );
}
