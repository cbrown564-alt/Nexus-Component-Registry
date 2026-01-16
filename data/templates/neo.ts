export interface NeoWallet {
    id: string;
    name: string;
    balance: number;
    currency: string;
    change: number;
    color: string;
}

export interface NeoTransaction {
    id: string;
    merchant: string;
    amount: number;
    date: string;
    icon: string;
    category: string;
}

export const neoWallets: NeoWallet[] = [
    {
        id: '1',
        name: 'Main Vault',
        balance: 24560.00,
        currency: 'USD',
        change: 2.4,
        color: 'from-emerald-400 to-cyan-500'
    },
    {
        id: '2',
        name: 'Crypto Folio',
        balance: 8.45,
        currency: 'ETH',
        change: -1.2,
        color: 'from-purple-500 to-pink-500'
    },
    {
        id: '3',
        name: 'Savings',
        balance: 12000.00,
        currency: 'USD',
        change: 0.5,
        color: 'from-blue-400 to-indigo-600'
    }
];

export const neoTransactions: NeoTransaction[] = [
    {
        id: '1',
        merchant: 'Netflix',
        amount: -15.99,
        date: 'Today',
        icon: 'Clapperboard',
        category: 'Entertainment'
    },
    {
        id: '2',
        merchant: 'Uber Eats',
        amount: -32.50,
        date: 'Yesterday',
        icon: 'Car',
        category: 'Food'
    },
    {
        id: '3',
        merchant: 'Direct Deposit',
        amount: 3200.00,
        date: 'Aug 24',
        icon: 'Briefcase',
        category: 'Income'
    },
    {
        id: '4',
        merchant: 'Apple Store',
        amount: -1299.00,
        date: 'Aug 20',
        icon: 'Smartphone',
        category: 'Tech'
    }
];
