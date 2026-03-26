import type { User, TrustScore, Transaction } from '../types';

export function useUserData(
    setUser: (u: User) => void,
    setScore: (s: TrustScore) => void,
    setTransactions: (t: Transaction[]) => void
): {
    fetchData: (userId: string) => Promise<void>;
} {
    const fetchData = async (userId: string): Promise<void> => {
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

    return { fetchData };
}
