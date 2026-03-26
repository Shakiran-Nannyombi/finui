import { useState, useEffect } from 'react'
import { Home, PiggyBank, User as UserIcon, LayoutDashboard, Info } from 'lucide-react'
import { Logo } from '../ui/Logo'
import { cn } from '../../lib/utils'
import type { TabName, User } from '../../types'

interface NavbarProps {
    activeTab: TabName
    user: User | null
    onTabChange: (tab: TabName) => void
    onLogout?: () => void
}

export function Navbar({ activeTab, user, onTabChange, onLogout }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav className={cn(
            'sticky top-0 z-50 transition-all duration-300',
            scrolled
                ? 'bg-slate-900/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
                : 'bg-slate-900 border-b border-white/5'
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-18 py-3">
                    {/* Logo / Brand */}
                    <div
                        className="flex items-center gap-3 cursor-pointer group"
                        onClick={() => onTabChange('landing')}
                    >
                        <Logo className="w-8 h-8 transition-transform group-hover:scale-110" />
                        <span className="text-2xl font-black tracking-tight text-white">Finui</span>
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center space-x-1">
                        <button
                            onClick={() => onTabChange('landing')}
                            className={cn(
                                'px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2',
                                activeTab === 'landing'
                                    ? 'bg-white/10 text-white'
                                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                            )}
                        >
                            <Home size={16} />
                            Home
                        </button>
                        <button
                            onClick={() => onTabChange('about')}
                            className={cn(
                                'px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2',
                                activeTab === 'about'
                                    ? 'bg-white/10 text-white'
                                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                            )}
                        >
                            <Info size={16} />
                            About
                        </button>

                        {user ? (
                            <>
                                <button
                                    onClick={() => onTabChange('home')}
                                    className={cn(
                                        'px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2',
                                        activeTab === 'home'
                                            ? 'bg-white/10 text-white'
                                            : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                    )}
                                >
                                    <LayoutDashboard size={16} />
                                    Dashboard
                                </button>
                                <button
                                    onClick={() => onTabChange('savings')}
                                    className={cn(
                                        'px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2',
                                        activeTab === 'savings'
                                            ? 'bg-white/10 text-white'
                                            : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                    )}
                                >
                                    <PiggyBank size={16} />
                                    Savings
                                </button>
                                <button
                                    onClick={() => onTabChange('profile')}
                                    className={cn(
                                        'px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2',
                                        activeTab === 'profile'
                                            ? 'bg-white/10 text-white'
                                            : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                    )}
                                >
                                    <UserIcon size={16} />
                                    Profile
                                </button>
                                {onLogout && (
                                    <button
                                        onClick={onLogout}
                                        className="ml-2 px-5 py-2.5 rounded-full text-sm font-black bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-all border border-red-500/20"
                                    >
                                        Log Out
                                    </button>
                                )}
                            </>
                        ) : (
                            <button
                                onClick={() => onTabChange('auth')}
                                className="ml-2 px-6 py-2.5 rounded-full text-sm font-black bg-emerald-500 hover:bg-emerald-400 text-slate-900 transition-all shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5"
                            >
                                Log In
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Button - removed, MobileNav handles mobile navigation */}
                </div>
            </div>
        </nav>
    )
}
