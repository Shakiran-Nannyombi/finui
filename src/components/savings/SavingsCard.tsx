import { PiggyBank } from 'lucide-react';
import { User } from '../../types';

interface SavingsCardProps {
    user: User;
}

export function SavingsCard({ user }: SavingsCardProps) {
    return (
        <div className="bg-gradient-to-br from-emerald-500 to-teal-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-teal-900 opacity-20 rounded-full blur-xl"></div>

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                            <PiggyBank size={28} className="text-white" />
                        </div>
                        <h3 className="text-lg font-medium text-emerald-50">Total Savings</h3>
                    </div>
                </div>
                <p className="text-5xl font-black mb-6 tracking-tight">UGX {user.savingsBalance.toLocaleString()}</p>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-md border border-white/10">
                    <p className="text-sm text-emerald-50 leading-relaxed">
                        Saving consistently increases your Trust Score and unlocks higher credit tiers. You are currently on Tier {user.creditTier}.
                    </p>
                </div>
            </div>
        </div>
    );
}
