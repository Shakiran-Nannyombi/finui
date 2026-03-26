import { useState } from 'react'
import type { User, TrustScore, Transaction, TabName } from '../types'

export function useAppState() {
    const [activeTab, setActiveTab] = useState<TabName>('landing')
    const [user, setUser] = useState<User | null>(null)
    const [score, setScore] = useState<TrustScore | null>(null)
    const [transactions, setTransactions] = useState<Transaction[]>([])

    const handleLogin = (loggedInUser: User) => {
        setUser(loggedInUser)
        setActiveTab('home')
    }

    const handleLogout = () => {
        setUser(null)
        setScore(null)
        setTransactions([])
        setActiveTab('landing')
    }

    return {
        activeTab, setActiveTab, user, setUser, score, setScore,
        transactions, setTransactions, handleLogin, handleLogout
    }
}
