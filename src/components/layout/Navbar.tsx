import { Home, PiggyBank, User as UserIcon, LayoutDashboard, Info } from 'lucide-react'
import { Logo } from '../ui/Logo'
import { cn } from '../../lib/utils'
import type { TabName, User } from '../../types'

interface NavbarProps {
    activeTab: TabName
    user: User | null
    onTabChange: (tab: TabName) => void
}

export function Navbar({ activeTab, user, onTabChange }: NavbarProps) {
    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    {/* Logo / Brand */}
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => onTabChange('landing')}>
                        <Logo />
                        <span className="text-2xl font-black tracking-tight text-gray-900">Finui</span>
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center space-x-2">
                        <button
                            onClick={() => onTabChange('landing')}
                            className={cn(
                                "px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2",
                                activeTab === 'landing' ? "bg-emerald-50 text-emerald-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            )}
                        >
                            <Home size={18} />
                            Home
                        </button>
                        <button
                            onClick={() => onTabChange('about')}
                            className={cn(
                                "px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2",
                                activeTab === 'about' ? "bg-emerald-50 text-emerald-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            )}
                        >
                            <Info size={18} />
                            About
                        </button>

                        {user ? (
                            <>
                                <button
                                    onClick={() => onTabChange('home')}
                                    className={cn(
                                        "px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2",
                                        activeTab === 'home' ? "bg-emerald-50 text-emerald-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    )}
                                >
                                    <LayoutDashboard size={18} />
                                    Dashboard
                                </button>
                                <button
                                    onClick={() => onTabChange('savings')}
                                    className={cn(
                                        "px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2",
                                        activeTab === 'savings' ? "bg-emerald-50 text-emerald-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    )}
                                >
                                    <PiggyBank size={18} />
                                    Savings
                                </button>
                                <button
                                    onClick={() => onTabChange('profile')}
                                    className={cn(
                                        "px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2",
                                        activeTab === 'profile' ? "bg-emerald-50 text-emerald-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    )}
                                >
                                    <UserIcon size={18} />
                                    Profile
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={() => onTabChange('auth')}
                                className={cn(
                                    "px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ml-2",
                                    activeTab === 'auth' ? "bg-emerald-700 text-white" : "bg-emerald-600 text-white hover:bg-emerald-700"
                                )}
                            >
                                <UserIcon size={18} />
                                Log In
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center">
                        <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
