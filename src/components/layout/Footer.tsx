import { Logo } from '../ui/Logo';

export const Footer = () => (
    <footer className="relative bg-white border-t border-gray-100 mt-auto pt-20 pb-24 md:pb-12 overflow-hidden">
        {/* Creative Top Edge for Footer */}
        <div className="absolute top-0 left-0 w-full h-12 overflow-hidden pointer-events-none">
            <svg className="absolute top-0 w-full h-12 text-gray-50" viewBox="0 0 1440 100" fill="currentColor" preserveAspectRatio="none">
                <path d="M0,0 C480,100 960,100 1440,0 L1440,0 L0,0 Z" />
            </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="flex items-center gap-3">
                        <Logo className="w-8 h-8" />
                        <span className="text-2xl font-black tracking-tight text-gray-900">Finui</span>
                    </div>
                    <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">
                        Empowering the unbanked hustle with AI-driven trust and financial inclusion.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-4">
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">LinkedIn</a>
                        <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">Contact</a>
                    </div>
                    <p className="text-sm text-gray-400 font-medium">© {new Date().getFullYear()} Finui Financial. Built with Google AI Studio.</p>
                </div>
            </div>
        </div>
    </footer>
);
