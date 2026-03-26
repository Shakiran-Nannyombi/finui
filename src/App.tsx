import { useEffect } from 'react'
import { Navbar } from './components/layout/Navbar'
import { MobileNav } from './components/layout/MobileNav'
import { Footer } from './components/layout/Footer'
import { useAppState } from './hooks/useAppState'
import { useUserData } from './hooks/useUserData'
import { LandingPage } from './pages/LandingPage'
import { AuthPage } from './pages/AuthPage'
import { Dashboard } from './pages/Dashboard'
import { SavingsFlow } from './pages/SavingsFlow'
import { ProfileSettings } from './pages/ProfileSettings'
import { AboutPage } from './pages/AboutPage'

export default function App() {
  const { activeTab, setActiveTab, user, setUser, score, setScore,
    transactions, setTransactions, handleLogin, handleLogout } = useAppState()

  const { fetchData } = useUserData(setUser, setScore, setTransactions)

  useEffect(() => {
    if (user) {
      fetchData(user.id)
    }
  }, [user?.id])

  return (
    <div className="min-h-screen bg-gray-50/50 font-sans text-gray-900 flex flex-col">
      <Navbar activeTab={activeTab} user={user} onTabChange={setActiveTab} onLogout={handleLogout} />
      <main className="flex-1 pb-20 md:pb-8">
        {activeTab === 'landing' && <LandingPage onGetStarted={() => setActiveTab(user ? 'home' : 'auth')} />}
        {activeTab === 'about' && <AboutPage setActiveTab={setActiveTab} />}
        {activeTab === 'auth' && !user && <AuthPage onLogin={handleLogin} onBack={() => setActiveTab('landing')} />}
        {user && (
          <>
            {activeTab === 'home' && <Dashboard user={user} score={score} transactions={transactions} />}
            {activeTab === 'savings' && <SavingsFlow user={user} onTransferSuccess={() => fetchData(user.id)} />}
            {activeTab === 'profile' && <ProfileSettings user={user} onUpdate={setUser} onLogout={handleLogout} />}
          </>
        )}
      </main>
      <Footer />
      <MobileNav activeTab={activeTab} user={user} onTabChange={setActiveTab} onLogout={handleLogout} />
    </div>
  )
}
