import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts'
import { ShieldCheck, TrendingUp } from 'lucide-react'
import { TrustScore } from '../../types'

interface TrustScoreCardProps {
    score: TrustScore
    creditTier: number
}

export function TrustScoreCard({ score, creditTier }: TrustScoreCardProps) {
    const scoreData = [
        { name: 'Score', value: score.overall },
        { name: 'Remaining', value: 100 - score.overall }
    ]
    const COLORS = ['#10b981', '#e5e7eb']

    return (
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <ShieldCheck className="text-emerald-500" size={24} />
                        Trust Score Engine
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">Your financial reliability metric</p>
                </div>
                <span className="text-sm font-bold bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full">
                    Tier {creditTier} Unlocked
                </span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="relative w-48 h-48 shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={scoreData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                startAngle={90}
                                endAngle={-270}
                                dataKey="value"
                                stroke="none"
                            >
                                {scoreData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <RechartsTooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-5xl font-black text-gray-800">{score.overall}</span>
                        <span className="text-sm text-gray-500 font-medium mt-1">/ 100</span>
                    </div>
                </div>

                <div className="flex-1 w-full space-y-6">
                    <div>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600 font-medium">Income Regularity</span>
                            <span className="font-bold text-gray-900">{score.breakdown.regularity}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div
                                className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000"
                                style={{ width: `${score.breakdown.regularity}%` }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600 font-medium">Consistency</span>
                            <span className="font-bold text-gray-900">{score.breakdown.consistency}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div
                                className="bg-purple-500 h-2.5 rounded-full transition-all duration-1000"
                                style={{ width: `${score.breakdown.consistency}%` }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600 font-medium">Savings Stability</span>
                            <span className="font-bold text-gray-900">{score.breakdown.stability}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div
                                className="bg-emerald-500 h-2.5 rounded-full transition-all duration-1000"
                                style={{ width: `${score.breakdown.stability}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50/80 border border-blue-100 rounded-2xl flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-full shrink-0">
                    <TrendingUp className="text-blue-600" size={20} />
                </div>
                <div>
                    <h4 className="font-semibold text-blue-900 mb-1">AI Recommendation</h4>
                    <p className="text-sm text-blue-800 leading-relaxed">{score.recommendation}</p>
                </div>
            </div>
        </div>
    )
}
