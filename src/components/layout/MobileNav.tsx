import { Home, PiggyBank, User as UserIcon, LayoutDashboard, Info, LogOut } from 'lucide-react'
import { cn } from '../../lib/utils'
import type { TabName, User } from '../../types'

interface MobileNavProps {
    activeTab: TabName
    user: User | null
    onTabChange: (tab: TabName) => void
    onLogout?: () => void
}

export function MobileNav({ activeTab, user, onTabChange, onLogout }: MobileNavProps) {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 flex justify-between items-center z-50 pb-safe">
            <button
                onClick={() => onTabChange('landing')}
                className={cn(
                    "flex flex-col items-center gap-1 p-2 transition-colors",
                    activeTab === 'landing' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
                )}
            >
                <Home size={22} className={activeTab === 'landing' ? "fill-emerald-100" : ""} />
                <span className="text-[10px] font-bold">Home</span>
            </button>

            <button
                onClick={() => onTabChange('about')}
                className={cn(
                    "flex flex-col items-center gap-1 p-2 transition-colors",
                    activeTab === 'about' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
                )}
            >
                <Info size={22} className={activeTab === 'about' ? "fill-emerald-100" : ""} />
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
                        <LayoutDashboard size={22} className={activeTab === 'home' ? "fill-emerald-100" : ""} />
                        <span className="text-[10px] font-bold">Dashboard</span>
                    </button>

                    <button
                        onClick={() => onTabChange('savings')}
                        className={cn(
                            "flex flex-col items-center gap-1 p-2 transition-colors",
                            activeTab === 'savings' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
                        )}
                    >
                        <PiggyBank size={22} className={activeTab === 'savings' ? "fill-emerald-100" : ""} />
                        <span className="text-[10px] font-bold">Savings</span>
                    </button>

                    <button
                        onClick={() => onTabChange('profile')}
                        className={cn(
                            "flex flex-col items-center gap-1 p-2 transition-colors",
                            activeTab === 'profile' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
                        )}
                    >
                        <UserIcon size={22} className={activeTab === 'profile' ? "fill-emerald-100" : ""} />
                        <span className="text-[10px] font-bold">Profile</span>
                    </button>

                    {onLogout && (
                        <button
                            onClick={onLogout}
                            className="flex flex-col items-center gap-1 p-2 transition-colors text-red-400 hover:text-red-600"
                        >
                            <LogOut size={22} />
                            <span className="text-[10px] font-bold">Logout</span>
                        </button>
                    )}
                </>
            ) : (
                <button
                    onClick={() => onTabChange('auth')}
                    className={cn(
                        "flex flex-col items-center gap-1 p-2 transition-colors",
                        activeTab === 'auth' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
                    )}
                >
                    <UserIcon size={22} className={activeTab === 'auth' ? "fill-emerald-100" : ""} />
                    <span className="text-[10px] font-bold">Login</span>
                </button>
            )}
        </div>
    )
}
