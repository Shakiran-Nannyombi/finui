import { useState } from 'react';
import { AlertCircle, Wallet, ArrowRight } from 'lucide-react';
import { User } from '../../types';

interface TransferFormProps {
    user: User;
    onTransferSuccess: () => void;
    amount?: string;
    onAmountChange?: (v: string) => void;
}

export function TransferForm({ user, onTransferSuccess, amount: externalAmount, onAmountChange }: TransferFormProps) {
    const [localAmount, setLocalAmount] = useState('');
    const amount = externalAmount !== undefined ? externalAmount : localAmount;
    const setAmount = (v: string) => {
        if (onAmountChange) onAmountChange(v);
        else setLocalAmount(v);
    };
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleTransfer = async () => {
        if (!user || !amount || isNaN(Number(amount)) || Number(amount) <= 0) {
            setError('Please enter a valid amount');
            return;
        }
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/savings/transfer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: user.id, amount: Number(amount) })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Transfer failed');
            setAmount('');
            onTransferSuccess();
            alert('Transfer successful!');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-fit">
            <div className="flex items-center gap-3 mb-8">
                <div className="bg-gray-100 p-3 rounded-xl text-gray-700">
                    <Wallet size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Quick Transfer</h3>
            </div>

            {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl text-sm flex items-center gap-3 border border-red-100">
                    <AlertCircle size={20} className="shrink-0" />
                    <span className="font-medium">{error}</span>
                </div>
            )}

            <div className="space-y-8">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Amount to Save (UGX)</label>
                    <div className="relative">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg">UGX</span>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full pl-16 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-lg font-semibold text-gray-900 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                            placeholder="0.00"
                        />
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <p className="text-sm text-gray-500 font-medium">
                            Available balance: <span className="text-gray-900">UGX {user.balance.toLocaleString()}</span>
                        </p>
                        <button
                            onClick={() => setAmount(user.balance.toString())}
                            className="text-sm text-emerald-600 font-bold hover:text-emerald-700"
                        >
                            Max
                        </button>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">Quick Amounts</label>
                    <div className="grid grid-cols-3 gap-3">
                        {[100, 500, 1000].map(val => (
                            <button
                                key={val}
                                onClick={() => setAmount(val.toString())}
                                className="py-3 border-2 border-gray-100 rounded-xl text-base font-bold text-gray-600 hover:bg-emerald-50 hover:border-emerald-500 hover:text-emerald-600 transition-all"
                            >
                                +{val}
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    onClick={handleTransfer}
                    disabled={loading || !amount}
                    className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-3 shadow-lg shadow-emerald-200 hover:shadow-emerald-300"
                >
                    {loading ? (
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    ) : (
                        <>Confirm Transfer <ArrowRight size={20} /></>
                    )}
                </button>
            </div>
        </div>
    );
}
