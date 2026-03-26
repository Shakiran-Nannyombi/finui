import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
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
