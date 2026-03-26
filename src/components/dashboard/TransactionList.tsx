import { TrendingUp, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Transaction } from '../../types';

interface TransactionListProps {
    transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
    return (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
                <button className="text-sm text-emerald-600 font-semibold hover:text-emerald-700">View All</button>
            </div>
            <div className="space-y-4 flex-1 overflow-y-auto pr-2">
                {transactions.slice(0, 6).map(tx => (
                    <div
                        key={tx.id}
                        className="group p-4 rounded-2xl flex items-center justify-between border border-gray-50 hover:border-emerald-100 hover:bg-emerald-50/30 transition-all"
                    >
                        <div className="flex items-center gap-4">
                            <div className={cn(
                                "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                                tx.type === 'credit'
                                    ? "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200"
                                    : "bg-red-100 text-red-600 group-hover:bg-red-200"
                            )}>
                                {tx.type === 'credit'
                                    ? <TrendingUp size={20} />
                                    : <ArrowRight size={20} className="rotate-45" />}
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">{tx.category}</p>
                                <p className="text-sm text-gray-500">
                                    {new Date(tx.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                </p>
                            </div>
                        </div>
                        <span className={cn(
                            "font-bold whitespace-nowrap",
                            tx.type === 'credit' ? "text-emerald-600" : "text-gray-900"
                        )}>
                            {tx.type === 'credit' ? '+' : '-'} UGX {tx.amount}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
