import { useState, useEffect } from 'react';
import { User } from '../types';
import { SavingsCard } from '../components/savings/SavingsCard';
import { SmartSuggestion } from '../components/savings/SmartSuggestion';
import { TransferForm } from '../components/savings/TransferForm';

interface SavingsFlowProps {
    user: User;
    onTransferSuccess: () => void;
}

export function SavingsFlow({ user, onTransferSuccess }: SavingsFlowProps) {
    const [recommendation, setRecommendation] = useState<{ suggestedAmount: number; message: string } | null>(null);
    const [amount, setAmount] = useState('');

    useEffect(() => {
        fetch(`/api/savings/recommendation/${user.id}`)
            .then(res => res.json())
            .then(data => setRecommendation(data))
            .catch(() => { });
    }, [user.id]);

    if (!user) return null;

    return (
        <div className="relative min-h-screen">
            {/* Background Blobs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 relative z-10">
                <div>
                    <h2 className="text-4xl font-black text-gray-900 tracking-tight">Savings & Investments</h2>
                    <p className="text-gray-500 mt-2 text-lg">Grow your wealth and unlock better credit tiers.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-8">
                        <SavingsCard user={user} />
                        {recommendation && recommendation.suggestedAmount > 0 && (
                            <SmartSuggestion
                                recommendation={recommendation}
                                onApply={(amt) => setAmount(amt.toString())}
                            />
                        )}
                    </div>
                    <div>
                        <TransferForm
                            user={user}
                            onTransferSuccess={onTransferSuccess}
                            amount={amount}
                            onAmountChange={setAmount}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
