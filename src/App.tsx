import React, { useState, useEffect } from 'react';
import { Home, PiggyBank, User as UserIcon, TrendingUp, ArrowRight, ShieldCheck, AlertCircle, LayoutDashboard, Wallet, Info, Download, Shield, Users, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Logo = ({ className }: { className?: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="#10B981"/>
    <path d="M2 23L16 30L30 23V9L16 16L2 9V23Z" fill="#059669"/>
    <path d="M16 16L30 9V23L16 30V16Z" fill="#047857"/>
  </svg>
);

const Footer = () => (
  <footer className="relative bg-white border-t border-gray-100 mt-auto pt-20 pb-24 md:pb-12 overflow-hidden">
    {/* Creative Top Edge for Footer */}
    <div className="absolute top-0 left-0 w-full h-12 overflow-hidden pointer-events-none">
      <svg className="absolute top-0 w-full h-12 text-gray-50" viewBox="0 0 1440 100" fill="currentColor" preserveAspectRatio="none">
        <path d="M0,0 C480,100 960,100 1440,0 L1440,0 L0,0 Z" />
      </svg>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8" />
            <span className="text-2xl font-black tracking-tight text-gray-900">Finui</span>
          </div>
          <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">
            Empowering the unbanked hustle with AI-driven trust and financial inclusion.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">Contact</a>
          </div>
          <p className="text-sm text-gray-400 font-medium">© {new Date().getFullYear()} Finui Financial. Built with Google AI Studio.</p>
        </div>
      </div>
    </div>
  </footer>
);

// --- Types ---
interface User {
  id: string;
  name: string;
  email: string;
  balance: number;
  savingsBalance: number;
  creditTier: number;
  phone?: string;
  businessType?: string;
}

interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: 'credit' | 'debit';
  category: string;
  date: string;
}

interface TrustScore {
  overall: number;
  breakdown: {
    regularity: number;
    consistency: number;
    stability: number;
  };
  recommendation: string;
}

// --- Components ---

function LandingPage({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div className="flex flex-col gap-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16 w-full relative">
        {/* Background Blobs for Hero */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px]"></div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-emerald-900 rounded-[3rem] overflow-hidden text-white p-10 md:p-20 flex flex-col items-center text-center shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute top-0 -right-24 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -bottom-24 left-20 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '4s' }}></div>
          </div>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
              Financial Power for the <span className="text-emerald-300">Informal Economy</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-10 font-medium">
              Build your Trust Score, automate micro-savings, and unlock credit tiers without a traditional bank history.
            </p>
            <button 
              onClick={onGetStarted}
              className="bg-white text-emerald-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-50 hover:scale-105 transition-all shadow-xl flex items-center gap-2 mx-auto"
            >
              Enter Dashboard <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Features - Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          
          {/* Trust Score Engine */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative group"
          >
            <div className="p-8 pb-0">
              <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-emerald-100 before:absolute before:-inset-2 before:rounded-full before:border before:border-emerald-50 bg-emerald-50/50 items-center justify-center">
                <ShieldCheck className="size-12 text-emerald-500" strokeWidth={1.5} />
                <div className="absolute -right-2 -top-2 bg-white shadow-lg rounded-full px-3 py-1 text-sm font-bold text-emerald-600 border border-emerald-100 animate-pulse">
                  750
                </div>
              </div>
              <div className="relative z-10 mt-8 space-y-2 text-center pb-8">
                <h3 className="text-2xl font-bold text-gray-900 transition group-hover:text-emerald-600">Trust Score Engine</h3>
                <p className="text-gray-600 leading-relaxed">We analyze your income regularity and savings stability to generate a reliable credit score.</p>
              </div>
            </div>
          </motion.div>

          {/* Micro-Savings */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative group"
          >
            <div className="p-8 pb-0">
              <div className="relative flex h-32 w-full items-center justify-center">
                <svg className="absolute inset-0 h-full w-full text-blue-100" viewBox="0 0 254 104" fill="none">
                  <path d="M0 80 Q 40 20 80 60 T 160 40 T 254 20" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  <path d="M0 80 Q 40 20 80 60 T 160 40 T 254 20 L 254 104 L 0 104 Z" fill="currentColor" opacity="0.3" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-3 flex items-center gap-3 border border-blue-50 transform transition-transform group-hover:scale-110">
                    <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                      <PiggyBank size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold">Auto-Saved</p>
                      <p className="text-sm font-black text-gray-900">+ UGX 5,000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-10 mt-8 space-y-2 text-center pb-8">
                <h3 className="text-2xl font-bold text-gray-900 transition group-hover:text-blue-600">Micro-Savings</h3>
                <p className="text-gray-600 leading-relaxed">Smart AI nudges help you save small amounts when you earn, building your wealth effortlessly.</p>
              </div>
            </div>
          </motion.div>

          {/* Credit Unlocks */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-6 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative group"
          >
            <div className="grid md:grid-cols-2 h-full">
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <div className="relative flex aspect-square size-16 rounded-full border border-purple-100 before:absolute before:-inset-2 before:rounded-full before:border before:border-purple-50 bg-purple-50/50 items-center justify-center">
                  <TrendingUp className="size-8 text-purple-500" strokeWidth={1.5} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900 transition group-hover:text-purple-600">Credit Unlocks</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">Level up your credit tiers by maintaining a good Trust Score and consistent savings habits.</p>
                </div>
              </div>
              
              <div className="relative bg-slate-50 border-t md:border-t-0 md:border-l border-gray-100 p-8 md:p-12 flex flex-col justify-center space-y-6 overflow-hidden">
                {/* Decorative background grid */}
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.5 }}></div>
                
                <div className="relative z-10 flex w-[85%] items-center justify-end gap-3 self-start transform transition-transform group-hover:translate-x-2">
                  <span className="block h-fit rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-bold shadow-sm text-gray-600">Tier 1: UGX 50,000</span>
                  <div className="size-10 rounded-full bg-gray-200 border-4 border-white shadow-sm flex items-center justify-center text-gray-500 shrink-0">
                    <Shield size={16} />
                  </div>
                </div>
                
                <div className="relative z-10 flex w-[85%] items-center gap-3 self-center transform transition-transform group-hover:-translate-x-2">
                  <div className="size-12 rounded-full bg-emerald-100 border-4 border-white shadow-md flex items-center justify-center text-emerald-600 shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="block h-fit rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-base font-bold shadow-md text-emerald-700">Tier 2: UGX 200,000</span>
                </div>
                
                <div className="relative z-10 flex w-[85%] items-center justify-end gap-3 self-end transform transition-transform group-hover:translate-x-2">
                  <span className="block h-fit rounded-xl border border-purple-200 bg-purple-50 px-4 py-2 text-lg font-black shadow-lg text-purple-700">Tier 3: UGX 1,000,000</span>
                  <div className="size-14 rounded-full bg-purple-100 border-4 border-white shadow-lg flex items-center justify-center text-purple-600 shrink-0">
                    <TrendingUp size={24} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* How it Works Section */}
      <div className="relative">
        {/* Creative Top Edge */}
        <div className="absolute top-0 left-0 w-full h-24 -translate-y-full overflow-hidden pointer-events-none">
          <svg className="absolute bottom-0 w-full h-24 text-[#0f172a]" viewBox="0 0 1440 100" fill="currentColor" preserveAspectRatio="none">
            <path d="M0,100 C480,0 960,0 1440,100 L1440,100 L0,100 Z" />
          </svg>
        </div>

        <div className="bg-[#0f172a] py-24 w-full relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 md:text-left text-center">
            <p className="text-slate-400 font-bold tracking-[0.2em] text-sm uppercase mb-4">How Finui Works</p>
            <h2 className="text-4xl md:text-5xl font-black text-white max-w-2xl leading-tight">
              Turn your daily hustle into <span className="text-emerald-400 font-serif italic font-normal">verifiable</span> financial power
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Phone Mockups */}
            <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center">
              {/* Back phone */}
              <div className="absolute left-0 md:left-10 top-12 w-64 h-[450px] md:h-[500px] bg-slate-800 rounded-[2.5rem] border-[8px] border-slate-700 shadow-2xl transform -rotate-6 opacity-60">
                 <div className="p-6 space-y-4 mt-8">
                   <div className="w-1/2 h-4 bg-slate-600 rounded-full"></div>
                   <div className="w-full h-32 bg-slate-700 rounded-xl"></div>
                   <div className="w-3/4 h-4 bg-slate-600 rounded-full"></div>
                 </div>
              </div>
              
              {/* Front phone */}
              <div className="absolute right-0 md:right-10 z-10 w-72 h-[500px] md:h-[550px] bg-white rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl transform rotate-3 overflow-hidden flex flex-col">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
                  <div className="w-32 h-6 bg-slate-800 rounded-b-3xl"></div>
                </div>
                {/* Screen Content */}
                <div className="flex-1 p-6 pt-12 bg-gray-50 flex flex-col gap-4">
                  <div className="text-center space-y-2 mt-4">
                    <h4 className="font-bold text-gray-900 text-lg">Trust Score</h4>
                    <div className="text-5xl font-black text-emerald-600">85<span className="text-xl text-gray-400">/100</span></div>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-3 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-gray-500">Regularity</span>
                      <span className="text-xs font-bold text-emerald-600">90%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-[90%] h-full bg-emerald-500"></div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-gray-500">Consistency</span>
                      <span className="text-xs font-bold text-emerald-600">82%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-[82%] h-full bg-emerald-500"></div>
                    </div>
                  </div>
                  <div className="mt-auto bg-emerald-100 p-4 rounded-2xl border border-emerald-200">
                    <p className="text-sm font-bold text-emerald-800 text-center">Tier 2 Unlocked!</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative glowing blobs */}
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-emerald-500 rounded-full mix-blend-screen filter blur-[4rem] opacity-40"></div>
              <div className="absolute top-20 right-10 w-48 h-48 bg-teal-400 rounded-full mix-blend-screen filter blur-[4rem] opacity-20"></div>
            </div>

            {/* Right: Timeline */}
            <div className="space-y-12 relative md:pl-10">
              {/* Connecting line */}
              <div className="absolute left-[23px] md:left-[63px] top-8 bottom-8 w-px bg-slate-700"></div>
              
              {/* Step 1 */}
              <div className="relative flex gap-6 md:gap-8 items-start">
                <div className="w-12 h-12 rounded-full border border-slate-600 bg-slate-800 flex items-center justify-center text-slate-400 font-bold text-lg z-10 shrink-0">1</div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-slate-200 mb-2">Connect your mobile money</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">Securely link your MTN or Airtel money account to start tracking your daily transactions.</p>
                </div>
              </div>
              
              {/* Step 2 (Active) */}
              <div className="relative flex gap-6 md:gap-8 items-start">
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-lg z-10 shrink-0 shadow-[0_0_30px_rgba(16,185,129,0.5)]">2</div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-emerald-400 mb-2">Build your Trust Score</h3>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">We analyze your income regularity and savings habits to generate a verifiable financial identity.</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative flex gap-6 md:gap-8 items-start">
                <div className="w-12 h-12 rounded-full border border-slate-600 bg-slate-800 flex items-center justify-center text-slate-400 font-bold text-lg z-10 shrink-0">3</div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-slate-200 mb-2">Unlock credit & loans</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">Access business loans and higher credit tiers based on your proven financial history.</p>
                </div>
              </div>
              
              <div className="pt-8 pl-18 md:pl-20">
                <button onClick={onGetStarted} className="bg-emerald-400 hover:bg-emerald-300 text-slate-900 px-8 py-4 rounded-xl font-black text-sm tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(52,211,153,0.4)] hover:shadow-[0_0_30px_rgba(52,211,153,0.6)] hover:-translate-y-1">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>

      {/* Smart AI Section */}
      <div className="relative">
        {/* Creative Top Edge - Slanted */}
        <div className="absolute top-0 left-0 w-full h-32 -translate-y-full overflow-hidden pointer-events-none">
          <svg className="absolute bottom-0 w-full h-32 text-[#080c14]" viewBox="0 0 1440 100" fill="currentColor" preserveAspectRatio="none">
            <path d="M0,100 L1440,0 L1440,100 Z" />
          </svg>
        </div>

        <div className="bg-[#080c14] py-24 w-full relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full mix-blend-screen filter blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Floating Chat UI */}
            <div className="relative h-[500px] w-full flex items-center justify-center order-2 lg:order-1">
              {/* Main Chat Card */}
              <div className="absolute z-20 w-80 bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-700 shadow-2xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                    <PiggyBank size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Finui AI</h4>
                    <p className="text-emerald-400 text-xs">Online</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-slate-700/50 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-200">
                    Great day today! You earned UGX 45,000 more than your Tuesday average. 📈
                  </div>
                  <div className="bg-slate-700/50 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-200">
                    Should we save UGX 10,000 towards your "New Sewing Machine" goal?
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-emerald-600 rounded-2xl rounded-tr-sm p-4 text-sm text-white shadow-lg shadow-emerald-900/50">
                      Yes, save it! 🎯
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Element 1 */}
              <div className="absolute z-30 -right-4 top-20 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 transform rotate-6 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold">Goal Progress</p>
                    <p className="text-sm font-black text-gray-900">65% Reached</p>
                  </div>
                </div>
              </div>

              {/* Floating Element 2 */}
              <div className="absolute z-10 -left-8 bottom-20 bg-slate-800 rounded-2xl p-4 shadow-2xl border border-slate-700 transform -rotate-12">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <ShieldCheck size={16} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold">Trust Score</p>
                    <p className="text-sm font-black text-emerald-400">+5 Points</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <p className="text-emerald-400 font-bold tracking-[0.2em] text-sm uppercase">Smart Savings</p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                An AI that understands your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">hustle.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Informal income is unpredictable. Our AI analyzes your daily cash flow and suggests comfortable micro-savings only on your good days.
              </p>
              
              <ul className="space-y-6 mt-8">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-1">
                    <TrendingUp size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Income Detection</h4>
                    <p className="text-slate-400 text-sm mt-1">Automatically identifies high-earning days vs slow days.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-1">
                    <PiggyBank size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Painless Saving</h4>
                    <p className="text-slate-400 text-sm mt-1">Suggests saving amounts that won't hurt your daily operations.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* CTA Section for About Page */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-emerald-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full -ml-20 -mb-20 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Ready to build your <br />financial future?</h2>
            <p className="text-emerald-100/70 text-lg max-w-2xl mx-auto">Join thousands of entrepreneurs who are unlocking credit and growing their businesses with Finui.</p>
            <button 
              onClick={() => window.location.hash = '#auth'}
              className="bg-white text-emerald-900 px-10 py-4 rounded-2xl font-black text-lg hover:bg-emerald-50 transition-all shadow-xl shadow-emerald-950/20"
            >
              Get Started Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function AuthPage({ onLogin, onBack }: { onLogin: (user: User) => void, onBack: () => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup';
      const body = isLogin 
        ? { email, password } 
        : { name, email, phone, businessType, password };
        
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      
      const data = await res.json();
      if (data.success) {
        onLogin(data.user);
      } else {
        setError(data.error || 'Authentication failed');
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] bg-white flex flex-col lg:flex-row overflow-hidden">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full text-sm font-bold text-gray-600 hover:text-emerald-600 hover:border-emerald-200 transition-all shadow-sm"
      >
        <ArrowLeft size={18} /> Back to Home
      </button>

      {/* Left Column: Form */}
      <div className="w-full lg:w-1/2 h-full overflow-y-auto flex items-center justify-center p-8 lg:p-16 bg-white">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-md w-full"
        >
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <Logo className="w-8 h-8" />
              <span className="text-2xl font-black tracking-tight text-gray-900">Finui</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">
              {isLogin ? 'Welcome Back' : 'Join the Future'}
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              {isLogin ? 'Log in to access your financial dashboard' : 'Start building your trust score today'}
            </p>
          </div>
          
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 text-red-600 p-4 rounded-2xl mb-6 text-sm font-medium flex items-center gap-3 border border-red-100"
            >
              <AlertCircle size={20} /> {error}
            </motion.div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div 
                  key="signup-fields"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-5 overflow-hidden"
                >
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Full Name</label>
                    <input type="text" required value={name} onChange={e => setName(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all" placeholder="Amina N." />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number</label>
                      <input type="tel" required value={phone} onChange={e => setPhone(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all" placeholder="+256..." />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Business Type</label>
                      <input type="text" required value={businessType} onChange={e => setBusinessType(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all" placeholder="Market Vendor" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all" placeholder="demo@finui.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Password</label>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all" placeholder="••••••••" />
            </div>
            
            <button type="submit" disabled={loading} className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all disabled:opacity-50 mt-4 shadow-lg shadow-emerald-100">
              {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <button onClick={() => setIsLogin(!isLogin)} className="text-emerald-600 font-bold hover:underline text-base">
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
            </button>
          </div>
          
          {isLogin && (
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-xs text-gray-400 font-black tracking-widest uppercase mb-4 text-center">Quick Access Demo</p>
              <div className="grid grid-cols-1 gap-2">
                <button onClick={() => { setEmail('amina@demo.com'); setPassword('demo123'); }} className="text-xs bg-gray-50 p-3 rounded-xl border border-gray-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all text-left flex items-center justify-between group">
                  <div>
                    <span className="font-bold text-gray-900 block group-hover:text-emerald-700">Amina (Market Vendor)</span>
                    <span className="text-gray-500">amina@demo.com</span>
                  </div>
                  <ArrowRight size={14} className="text-gray-300 group-hover:text-emerald-500" />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Right Column: Creative Content */}
      <div className="hidden lg:block lg:w-1/2 h-full relative bg-emerald-900 overflow-hidden">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div 
              key="login-img"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-20 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-900/40 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000" 
                alt="Market Vendor" 
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-20 space-y-6">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto border border-white/20 shadow-2xl">
                  <ShieldCheck size={48} className="text-emerald-400" />
                </div>
                <h3 className="text-4xl font-black text-white leading-tight">Your trust is your <br />most valuable asset.</h3>
                <p className="text-emerald-100/70 text-lg max-w-sm mx-auto">We help you turn your daily transactions into a verifiable financial identity.</p>
              </div>

              {/* Floating UI Mockup on Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl z-30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-12 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <ShieldCheck className="text-white" size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-black text-lg">Trust Verified</p>
                    <p className="text-emerald-200 text-xs font-bold uppercase tracking-wider">Secure Access</p>
                  </div>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="h-full bg-emerald-400"
                  />
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div 
              key="signup-img"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-20 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-900/40 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" 
                alt="Growth" 
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-20 space-y-6">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto border border-white/20 shadow-2xl">
                  <TrendingUp size={48} className="text-emerald-400" />
                </div>
                <h3 className="text-4xl font-black text-white leading-tight">Grow your business <br />without boundaries.</h3>
                <p className="text-emerald-100/70 text-lg max-w-sm mx-auto">Unlock micro-loans and credit tiers as you build your savings and trust score.</p>
              </div>

              {/* Floating UI Mockup on Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl z-30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-12 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-black text-lg">Future Growth</p>
                    <p className="text-blue-200 text-xs font-bold uppercase tracking-wider">Start Your Journey</p>
                  </div>
                </div>
                <div className="flex gap-2 items-end h-8">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <motion.div 
                      key={i}
                      initial={{ height: 10 }}
                      animate={{ height: [10, 30, 15, 25, 20, 35][i-1] }}
                      transition={{ delay: 1 + (i * 0.1), duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                      className="w-full bg-blue-400/50 rounded-t-lg"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Floating UI Elements for extra creativity */}
        <div className="absolute bottom-12 left-12 right-12 z-30 flex justify-between items-end">
          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <CheckCircle2 size={16} className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-emerald-200 font-bold uppercase tracking-widest">Verified</p>
              <p className="text-sm text-white font-bold">Trust Score: 850</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <PiggyBank size={16} className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">Savings</p>
              <p className="text-sm text-white font-bold">UGX 1.2M</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

function ProfileSettings({ user, onUpdate, onLogout }: { user: User, onUpdate: (u: User) => void, onLogout: () => void }) {
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone || '');
  const [businessType, setBusinessType] = useState(user.businessType || '');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      const res = await fetch(`/api/user/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, businessType })
      });
      const data = await res.json();
      if (data.success) {
        onUpdate(data.user);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 space-y-8">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl font-black">
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-2xl font-black text-gray-900">{user.name}</h2>
            <p className="text-gray-500 font-medium">{user.email}</p>
            <div className="mt-2 inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
              <ShieldCheck size={14} /> Tier {user.creditTier}
            </div>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          <h3 className="text-lg font-bold text-gray-900">Personal Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <input type="email" value={user.email} disabled className="w-full p-3 bg-gray-100 border border-gray-200 rounded-xl text-gray-500 cursor-not-allowed" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Business Type</label>
              <input type="text" value={businessType} onChange={e => setBusinessType(e.target.value)} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
          </div>

          <div className="pt-6 flex items-center justify-between border-t border-gray-100">
            <button type="button" onClick={onLogout} className="text-red-600 font-bold hover:bg-red-50 px-4 py-2 rounded-lg transition-colors">
              Log Out
            </button>
            <div className="flex items-center gap-4">
              {success && <span className="text-emerald-600 font-bold text-sm">Saved successfully!</span>}
              <button type="submit" disabled={loading} className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all disabled:opacity-50">
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function AboutPage({ setActiveTab }: { setActiveTab: (tab: any) => void }) {
  return (
    <div className="flex flex-col gap-24 pb-24 relative">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-slate-900 pt-32 pb-48 overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-emerald-400 font-black tracking-[0.3em] uppercase text-sm mb-6"
          >
            Our Mission
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-8"
          >
            Financial inclusion for the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">unbanked hustle.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Finui bridges the gap between informal work and formal finance using alternative data and AI-driven trust metrics.
          </motion.p>
        </div>

        {/* Creative Bottom Edge */}
        <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden pointer-events-none">
          <svg className="absolute bottom-0 w-full h-32 text-white" viewBox="0 0 1440 100" fill="currentColor" preserveAspectRatio="none">
            <path d="M0,100 C480,0 960,0 1440,100 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Why Finui */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
              <ShieldCheck size={32} />
            </div>
            <h2 className="text-3xl font-black text-slate-900">Why Finui?</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Millions of informal workers lack access to traditional banking because they don't have formal pay slips. We use alternative data—like mobile money transaction patterns—to build a verifiable "Trust Score."
            </p>
          </motion.div>

          {/* Our Vision */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-emerald-600 p-10 rounded-[3rem] shadow-xl shadow-emerald-200/50 text-white flex flex-col gap-6"
          >
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white">
              <TrendingUp size={32} />
            </div>
            <h2 className="text-3xl font-black">Our Vision</h2>
            <p className="text-emerald-50 text-lg leading-relaxed">
              We envision a world where every hard-working individual, regardless of their employment status, has the tools to grow their wealth, access credit, and secure their financial future.
            </p>
          </motion.div>
        </div>

        {/* How it Works Grid */}
        <div className="mt-24 space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-black text-slate-900">How to use Finui</h2>
            <p className="text-slate-500 mt-4">Four simple steps to financial freedom.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Track", desc: "Connect your mobile money and track daily income.", icon: Wallet },
              { step: "02", title: "Monitor", desc: "Watch your Trust Score grow with every transaction.", icon: ShieldCheck },
              { step: "03", title: "Save", desc: "Follow AI nudges to save small amounts effortlessly.", icon: PiggyBank },
              { step: "04", title: "Unlock", desc: "Access micro-loans and higher credit tiers.", icon: TrendingUp },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-lg transition-all group"
              >
                <div className="text-4xl font-black text-slate-200 mb-6 group-hover:text-emerald-200 transition-colors">{item.step}</div>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section for About Page */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-emerald-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full -ml-20 -mb-20 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Ready to build your <br />financial future?</h2>
            <p className="text-emerald-100/70 text-lg max-w-2xl mx-auto">Join thousands of entrepreneurs who are unlocking credit and growing their businesses with Finui.</p>
            <button 
              onClick={() => setActiveTab('auth')}
              className="bg-white text-emerald-900 px-10 py-4 rounded-2xl font-black text-lg hover:bg-emerald-50 transition-all shadow-xl shadow-emerald-950/20"
            >
              Get Started Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
function Dashboard({ user, score, transactions }: { user: User | null, score: TrustScore | null, transactions: Transaction[] }) {
  if (!user || !score) return <div className="p-12 flex justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div></div>;

  const scoreData = [
    { name: 'Score', value: score.overall },
    { name: 'Remaining', value: 100 - score.overall }
  ];
  const COLORS = ['#10b981', '#e5e7eb'];

  const handleDownloadReport = () => {
    // ... (existing report logic)
    const reportContent = `
=========================================
FINUI FINANCIAL TRUST REPORT
=========================================
Date: ${new Date().toLocaleDateString()}

USER PROFILE
-----------------------------------------
Name: ${user.name}
Email: ${user.email}
Phone: ${user.phone || 'N/A'}
Business Type: ${user.businessType || 'N/A'}

FINANCIAL SUMMARY
-----------------------------------------
Available Balance: UGX ${user.balance.toLocaleString()}
Total Savings: UGX ${user.savingsBalance.toLocaleString()}
Credit Tier: Tier ${user.creditTier}

TRUST SCORE: ${score.overall}/100
-----------------------------------------
Income Regularity: ${score.breakdown.regularity}%
Consistency: ${score.breakdown.consistency}%
Savings Stability: ${score.breakdown.stability}%

Recommendation: ${score.recommendation}

RECENT TRANSACTIONS (Last 30)
-----------------------------------------
${transactions.slice(0, 30).map(tx => `${new Date(tx.date).toLocaleDateString()} | ${tx.type === 'credit' ? '+' : '-'} UGX ${tx.amount.toLocaleString()} | ${tx.category}`).join('\n')}

=========================================
This document serves as a verifiable financial 
history generated by Finui.
=========================================
    `.trim();
    
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${user.name.replace(/\s+/g, '_')}_Financial_Report.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 relative z-10">
        {/* Header */}
        <div className="relative bg-emerald-600 text-white rounded-[3rem] shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-emerald-100 text-lg mb-1 font-medium"
              >
                Welcome back,
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black tracking-tight"
              >
                {user.name}
              </motion.h1>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <button 
                onClick={handleDownloadReport}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-2xl flex items-center gap-2 transition-all font-bold text-sm backdrop-blur-md"
              >
                <Download size={20} />
                Download Report
              </button>
              <div className="bg-white/20 rounded-[2rem] p-8 backdrop-blur-xl min-w-[300px] border border-white/10 shadow-2xl">
                <p className="text-emerald-100 text-xs mb-2 font-black uppercase tracking-widest">Available Balance</p>
                <h2 className="text-4xl font-black">UGX {user.balance.toLocaleString()}</h2>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/20 rounded-full -ml-20 -mb-20 blur-3xl"></div>
          
          {/* Creative Bottom Edge */}
          <div className="absolute bottom-0 left-0 w-full h-12 overflow-hidden pointer-events-none">
            <svg className="absolute bottom-0 w-full h-12 text-white/5" viewBox="0 0 1440 100" fill="currentColor" preserveAspectRatio="none">
              <path d="M0,100 C480,0 960,0 1440,100 L1440,100 L0,100 Z" />
            </svg>
          </div>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trust Score Card (Spans 2 columns on desktop) */}
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
              Tier {user.creditTier} Unlocked
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
                  <div className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${score.breakdown.regularity}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 font-medium">Consistency</span>
                  <span className="font-bold text-gray-900">{score.breakdown.consistency}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div className="bg-purple-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${score.breakdown.consistency}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 font-medium">Savings Stability</span>
                  <span className="font-bold text-gray-900">{score.breakdown.stability}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div className="bg-emerald-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${score.breakdown.stability}%` }}></div>
                </div>
              </div>
            </div>
          </motion.div>
          
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

        {/* Recent Transactions (Spans 1 column) */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
            <button className="text-sm text-emerald-600 font-semibold hover:text-emerald-700">View All</button>
          </div>
          <div className="space-y-4 flex-1 overflow-y-auto pr-2">
            {transactions.slice(0, 6).map(tx => (
              <div key={tx.id} className="group p-4 rounded-2xl flex items-center justify-between border border-gray-50 hover:border-emerald-100 hover:bg-emerald-50/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                    tx.type === 'credit' ? "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200" : "bg-red-100 text-red-600 group-hover:bg-red-200"
                  )}>
                    {tx.type === 'credit' ? <TrendingUp size={20} /> : <ArrowRight size={20} className="rotate-45" />}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{tx.category}</p>
                    <p className="text-sm text-gray-500">{new Date(tx.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</p>
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
      </div>
    </div>
  </div>
  );
}

function SavingsFlow({ user, onTransferSuccess }: { user: User | null, onTransferSuccess: () => void }) {
  // ... (existing state)
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{suggestedAmount: number, message: string} | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      fetch(`/api/savings/recommendation/${user.id}`)
        .then(res => res.json())
        .then(data => setRecommendation(data))
        .catch(console.error);
    }
  }, [user]);

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
          {/* Total Savings Card */}
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

          {/* Smart Suggestion */}
          {recommendation && recommendation.suggestedAmount > 0 && (
            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="bg-blue-600 p-4 rounded-2xl text-white shrink-0 shadow-md shadow-blue-200">
                  <TrendingUp size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Smart Suggestion</h4>
                  <p className="text-blue-800 mb-6 leading-relaxed">{recommendation.message}</p>
                  <button 
                    onClick={() => setAmount(recommendation.suggestedAmount.toString())}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    Save UGX {recommendation.suggestedAmount} Now
                  </button>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>

        {/* Quick Transfer Form */}
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
                <p className="text-sm text-gray-500 font-medium">Available balance: <span className="text-gray-900">UGX {user.balance.toLocaleString()}</span></p>
                <button onClick={() => setAmount(user.balance.toString())} className="text-sm text-emerald-600 font-bold hover:text-emerald-700">Max</button>
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
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'landing' | 'home' | 'savings' | 'about' | 'profile' | 'auth'>('landing');
  const [user, setUser] = useState<User | null>(null);
  const [score, setScore] = useState<TrustScore | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchData = async (userId: string) => {
    try {
      const [userRes, scoreRes, txRes] = await Promise.all([
        fetch(`/api/user/${userId}`),
        fetch(`/api/trust-score/${userId}`),
        fetch(`/api/transactions/${userId}`)
      ]);
      
      if (userRes.ok) setUser(await userRes.json());
      if (scoreRes.ok) setScore(await scoreRes.json());
      if (txRes.ok) setTransactions(await txRes.json());
    } catch (err) {
      console.error("Failed to fetch data", err);
    }
  };

  useEffect(() => {
    if (user) {
      fetchData(user.id);
    }
  }, [user?.id]);

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
    setActiveTab('home');
  };

  const handleLogout = () => {
    setUser(null);
    setScore(null);
    setTransactions([]);
    setActiveTab('landing');
  };

  return (
    <div className="min-h-screen bg-gray-50/50 font-sans text-gray-900 flex flex-col">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('landing')}>
              <Logo />
              <span className="text-2xl font-black tracking-tight text-gray-900">Finui</span>
            </div>
            
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-2">
              <button 
                onClick={() => setActiveTab('landing')} 
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2", 
                  activeTab === 'landing' ? "bg-emerald-50 text-emerald-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Home size={18} />
                Home
              </button>
              <button 
                onClick={() => setActiveTab('about')} 
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2", 
                  activeTab === 'about' ? "bg-emerald-50 text-emerald-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Info size={18} />
                About
              </button>
              
              {user ? (
                <>
                  <button 
                    onClick={() => setActiveTab('home')} 
                    className={cn(
                      "px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2", 
                      activeTab === 'home' ? "bg-emerald-50 text-emerald-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    <LayoutDashboard size={18} />
                    Dashboard
                  </button>
                  <button 
                    onClick={() => setActiveTab('savings')} 
                    className={cn(
                      "px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2", 
                      activeTab === 'savings' ? "bg-emerald-50 text-emerald-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    <PiggyBank size={18} />
                    Savings
                  </button>
                  <button 
                    onClick={() => setActiveTab('profile')} 
                    className={cn(
                      "px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2", 
                      activeTab === 'profile' ? "bg-emerald-50 text-emerald-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    <UserIcon size={18} />
                    Profile
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => setActiveTab('auth')} 
                  className={cn(
                    "px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ml-2", 
                    activeTab === 'auth' ? "bg-emerald-700 text-white" : "bg-emerald-600 text-white hover:bg-emerald-700"
                  )}
                >
                  <UserIcon size={18} />
                  Log In
                </button>
              )}
            </div>

            {/* Mobile Menu Button (simplified) */}
            <div className="flex md:hidden items-center">
              <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                <span className="sr-only">Open menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
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

      {/* Mobile Bottom Navigation (Only visible on small screens) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center z-50 pb-safe">
        <button 
          onClick={() => setActiveTab('landing')}
          className={cn(
            "flex flex-col items-center gap-1 p-2 transition-colors",
            activeTab === 'landing' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
          )}
        >
          <Home size={24} className={activeTab === 'landing' ? "fill-emerald-100" : ""} />
          <span className="text-[10px] font-bold">Home</span>
        </button>

        <button 
          onClick={() => setActiveTab('about')}
          className={cn(
            "flex flex-col items-center gap-1 p-2 transition-colors",
            activeTab === 'about' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
          )}
        >
          <Info size={24} className={activeTab === 'about' ? "fill-emerald-100" : ""} />
          <span className="text-[10px] font-bold">About</span>
        </button>

        {user ? (
          <>
            <button 
              onClick={() => setActiveTab('home')}
              className={cn(
                "flex flex-col items-center gap-1 p-2 transition-colors",
                activeTab === 'home' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
              )}
            >
              <LayoutDashboard size={24} className={activeTab === 'home' ? "fill-emerald-100" : ""} />
              <span className="text-[10px] font-bold">Dashboard</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('savings')}
              className={cn(
                "flex flex-col items-center gap-1 p-2 transition-colors",
                activeTab === 'savings' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
              )}
            >
              <PiggyBank size={24} className={activeTab === 'savings' ? "fill-emerald-100" : ""} />
              <span className="text-[10px] font-bold">Savings</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('profile')}
              className={cn(
                "flex flex-col items-center gap-1 p-2 transition-colors",
                activeTab === 'profile' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
              )}
            >
              <UserIcon size={24} className={activeTab === 'profile' ? "fill-emerald-100" : ""} />
              <span className="text-[10px] font-bold">Profile</span>
            </button>
          </>
        ) : (
          <button 
            onClick={() => setActiveTab('auth')}
            className={cn(
              "flex flex-col items-center gap-1 p-2 transition-colors",
              activeTab === 'auth' ? "text-emerald-600" : "text-gray-400 hover:text-gray-600"
            )}
          >
            <UserIcon size={24} className={activeTab === 'auth' ? "fill-emerald-100" : ""} />
            <span className="text-[10px] font-bold">Login</span>
          </button>
        )}
      </div>
    </div>
  );
}

