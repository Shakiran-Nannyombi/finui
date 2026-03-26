import { TrendingUp } from 'lucide-react';

interface SmartSuggestionProps {
    recommendation: { suggestedAmount: number; message: string };
    onApply: (amount: number) => void;
}

export function SmartSuggestion({ recommendation, onApply }: SmartSuggestionProps) {
    return (
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 shadow-sm">
            <div className="flex items-start gap-5">
                <div className="bg-blue-600 p-4 rounded-2xl text-white shrink-0 shadow-md shadow-blue-200">
                    <TrendingUp size={28} />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-blue-900 mb-2">Smart Suggestion</h4>
                    <p className="text-blue-800 mb-6 leading-relaxed">{recommendation.message}</p>
                    <button
                        onClick={() => onApply(recommendation.suggestedAmount)}
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-sm"
                    >
                        Save UGX {recommendation.suggestedAmount} Now
                    </button>
                </div>
            </div>
        </div>
    );
}
