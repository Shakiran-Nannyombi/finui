export type TabName = 'landing' | 'home' | 'savings' | 'about' | 'profile' | 'auth'

export interface User {
    id: string
    name: string
    email: string
    balance: number
    savingsBalance: number
    creditTier: number
    phone?: string
    businessType?: string
}

export interface Transaction {
    id: string
    userId: string
    amount: number
    type: 'credit' | 'debit'
    category: string
    date: string
}

export interface TrustScore {
    overall: number
    breakdown: {
        regularity: number
        consistency: number
        stability: number
    }
    recommendation: string
}
