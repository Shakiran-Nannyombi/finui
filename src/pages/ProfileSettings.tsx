import { useState } from 'react';
import { ShieldCheck, Mail, Phone, Briefcase, User as UserIcon, LogOut, CheckCircle2, TrendingUp, PiggyBank } from 'lucide-react';
import { motion } from 'motion/react';
import { User } from '../types';

export function ProfileSettings({ user, onUpdate, onLogout }: { user: User, onUpdate: (u: User) => void, onLogout: () => void }) {
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

    const tierColors = ['', 'bg-slate-100 text-slate-600', 'bg-emerald-100 text-emerald-700', 'bg-purple-100 text-purple-700'];
    const tierColor = tierColors[user.creditTier] || tierColors[1];

    return (
        <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">

            {/* Hero banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative bg-emerald-600 rounded-[2.5rem] overflow-hidden shadow-xl"
            >
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/20 rounded-full -ml-16 -mb-16 blur-2xl pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end gap-6 p-8 md:p-10">
                    {/* Avatar */}
                    <div className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-md border-4 border-white/30 flex items-center justify-center text-4xl font-black text-white shadow-xl shrink-0">
                        {user.name.charAt(0)}
                    </div>

                    {/* Name + meta */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl font-black text-white tracking-tight">{user.name}</h1>
                        <p className="text-emerald-100/80 mt-1">{user.email}</p>
                        <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white`}>
                                <ShieldCheck size={13} /> Tier {user.creditTier}
                            </span>
                            {user.businessType && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white">
                                    <Briefcase size={13} /> {user.businessType}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Quick stats */}
                    <div className="flex gap-4 shrink-0">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 text-center">
                            <p className="text-emerald-100/60 text-[10px] font-bold uppercase tracking-widest mb-1">Balance</p>
                            <p className="text-white font-black text-lg">UGX {user.balance.toLocaleString()}</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 text-center">
                            <p className="text-emerald-100/60 text-[10px] font-bold uppercase tracking-widest mb-1">Savings</p>
                            <p className="text-white font-black text-lg">UGX {user.savingsBalance.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left: stat cards */}
                <div className="flex flex-col gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-emerald-100 rounded-2xl flex items-center justify-center">
                                <ShieldCheck size={20} className="text-emerald-600" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Credit Tier</p>
                                <p className="text-xl font-black text-gray-900">Tier {user.creditTier}</p>
                            </div>
                        </div>
                        <div className="flex gap-1.5">
                            {[1, 2, 3].map(t => (
                                <div key={t} className={`flex-1 h-2 rounded-full ${t <= user.creditTier ? 'bg-emerald-500' : 'bg-gray-100'}`} />
                            ))}
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                            {user.creditTier < 3 ? `Keep saving to reach Tier ${user.creditTier + 1}` : 'Maximum tier reached!'}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center">
                                <PiggyBank size={20} className="text-blue-600" />
                            </div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Savings</p>
                        </div>
                        <p className="text-2xl font-black text-gray-900">UGX {user.savingsBalance.toLocaleString()}</p>
                        <p className="text-xs text-emerald-600 font-bold mt-1">↑ Growing steadily</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center">
                                <TrendingUp size={20} className="text-purple-600" />
                            </div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Available Balance</p>
                        </div>
                        <p className="text-2xl font-black text-gray-900">UGX {user.balance.toLocaleString()}</p>
                    </motion.div>
                </div>

                {/* Right: edit form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
                >
                    <h3 className="text-xl font-black text-gray-900 mb-6">Personal Information</h3>

                    <form onSubmit={handleSave} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-bold text-gray-600 mb-2 flex items-center gap-1.5">
                                    <UserIcon size={14} /> Full Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all text-gray-900 font-medium"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-600 mb-2 flex items-center gap-1.5">
                                    <Mail size={14} /> Email Address
                                </label>
                                <input
                                    type="email"
                                    value={user.email}
                                    disabled
                                    className="w-full p-3.5 bg-gray-100 border border-gray-200 rounded-2xl text-gray-400 cursor-not-allowed font-medium"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-600 mb-2 flex items-center gap-1.5">
                                    <Phone size={14} /> Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all text-gray-900 font-medium"
                                    placeholder="+256..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-600 mb-2 flex items-center gap-1.5">
                                    <Briefcase size={14} /> Business Type
                                </label>
                                <input
                                    type="text"
                                    value={businessType}
                                    onChange={e => setBusinessType(e.target.value)}
                                    className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all text-gray-900 font-medium"
                                    placeholder="Market Vendor"
                                />
                            </div>
                        </div>

                        {success && (
                            <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-2xl text-sm font-bold"
                            >
                                <CheckCircle2 size={16} /> Changes saved successfully!
                            </motion.div>
                        )}

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <button
                                type="button"
                                onClick={onLogout}
                                className="flex items-center gap-2 text-red-500 font-bold hover:bg-red-50 px-4 py-2.5 rounded-xl transition-colors text-sm"
                            >
                                <LogOut size={16} /> Log Out
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-2xl font-bold transition-all disabled:opacity-50 shadow-lg shadow-emerald-100"
                            >
                                {loading ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
