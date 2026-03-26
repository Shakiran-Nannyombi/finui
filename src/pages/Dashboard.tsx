import { User, TrustScore, Transaction } from '../types'
import { DashboardHeader } from '../components/dashboard/DashboardHeader'
import { TrustScoreCard } from '../components/dashboard/TrustScoreCard'
import { TransactionList } from '../components/dashboard/TransactionList'

interface DashboardProps {
    user: User
    score: TrustScore | null
    transactions: Transaction[]
}

export function Dashboard({ user, score, transactions }: DashboardProps) {
    if (!user || !score) {
        return (
            <div className="p-12 flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
            </div>
        )
    }

    return (
        <div className="relative min-h-screen">
            {/* Background Blobs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 relative z-10">
                <DashboardHeader user={user} transactions={transactions} score={score} />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <TrustScoreCard score={score} creditTier={user.creditTier} />
                    <TransactionList transactions={transactions} />
                </div>
            </div>
        </div>
    )
}
