import { Home, PiggyBank, User as UserIcon, LayoutDashboard, Info } from 'lucide-react'
import { cn } from '../../lib/utils'
import type { TabName, User } from '../../types'

interface MobileNavProps {
    activeTab: TabName
    user: User | null
    onTabChange: (tab: TabName) => void
}

export function MobileNav({ activeTab, user, onTabChange }: MobileNavProps) {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center z-50 pb-safe">
            <button
                onClick={() => onTabChange('landing')}
                className={cn(
                    "flex flex-col items-center gap-1 p-2 transition-colors",
                    activeTab === 'landing' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
                )}
            >
                <Home size={24} className={activeTab === 'landing' ? "fill-emerald-100" : ""} />
                <span className="text-[10px] font-bold">Home</span>
            </button>

            <button
                onClick={() => onTabChange('about')}
                className={cn(
                    "flex flex-col items-center gap-1 p-2 transition-colors",
                    activeTab === 'about' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
                )}
            >
                <Info size={24} className={activeTab === 'about' ? "fill-emerald-100" : ""} />
                <span className="text-[10px] font-bold">About</span>
            </button>

            {user ? (
                <>
                    <button
                        onClick={() => onTabChange('home')}
                        className={cn(
                            "flex flex-col items-center gap-1 p-2 transition-colors",
                            activeTab === 'home' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
                        )}
                    >
                        <LayoutDashboard size={24} className={activeTab === 'home' ? "fill-emerald-100" : ""} />
                        <span className="text-[10px] font-bold">Dashboard</span>
                    </button>

                    <button
                        onClick={() => onTabChange('savings')}
                        className={cn(
                            "flex flex-col items-center gap-1 p-2 transition-colors",
                            activeTab === 'savings' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
                        )}
                    >
                        <PiggyBank size={24} className={activeTab === 'savings' ? "fill-emerald-100" : ""} />
                        <span className="text-[10px] font-bold">Savings</span>
                    </button>

                    <button
                        onClick={() => onTabChange('profile')}
                        className={cn(
                            "flex flex-col items-center gap-1 p-2 transition-colors",
                            activeTab === 'profile' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
                        )}
                    >
                        <UserIcon size={24} className={activeTab === 'profile' ? "fill-emerald-100" : ""} />
                        <span className="text-[10px] font-bold">Profile</span>
                    </button>
                </>
            ) : (
                <button
                    onClick={() => onTabChange('auth')}
                    className={cn(
                        "flex flex-col items-center gap-1 p-2 transition-colors",
                        activeTab === 'auth' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
                    )}
                >
                    <UserIcon size={24} className={activeTab === 'auth' ? "fill-emerald-100" : ""} />
                    <span className="text-[10px] font-bold">Login</span>
                </button>
            )}
        </div>
    )
}
