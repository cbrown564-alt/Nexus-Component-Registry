import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownUp, RefreshCw } from 'lucide-react';

interface Currency {
  code: string;
  name: string;
  symbol: string;
  flag?: string;
}

interface CurrencyConverterProps {
  currencies?: Currency[];
  exchangeRates?: Record<string, number>; // Rates relative to USD
  initialFrom?: string;
  initialTo?: string;
  onConvert?: (from: string, to: string, amount: number, result: number) => void;
}

const defaultCurrencies: Currency[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' },
  { code: 'BTC', name: 'Bitcoin', symbol: '₿', flag: '🪙' },
];

const defaultRates: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 148.5,
  BTC: 0.000024,
};

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  currencies = defaultCurrencies,
  exchangeRates = defaultRates,
  initialFrom = 'USD',
  initialTo = 'EUR',
  onConvert,
}) => {
  const [fromCurrency, setFromCurrency] = useState(initialFrom);
  const [toCurrency, setToCurrency] = useState(initialTo);
  const [amount, setAmount] = useState('1000');
  const [isSwapping, setIsSwapping] = useState(false);

  const fromRate = exchangeRates[fromCurrency] || 1;
  const toRate = exchangeRates[toCurrency] || 1;
  const convertedAmount = (parseFloat(amount || '0') / fromRate) * toRate;

  const handleSwap = () => {
    setIsSwapping(true);
    setTimeout(() => {
      setFromCurrency(toCurrency);
      setToCurrency(fromCurrency);
      setIsSwapping(false);
    }, 200);
  };

  const getCurrency = (code: string) => currencies.find((c) => c.code === code) || currencies[0];
  const fromCurrencyData = getCurrency(fromCurrency);
  const toCurrencyData = getCurrency(toCurrency);

  const formatAmount = (value: number, code: string) => {
    if (code === 'BTC') {
      return value.toFixed(8);
    }
    if (code === 'JPY') {
      return Math.round(value).toLocaleString();
    }
    return value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-medium text-zinc-400">Convert</h3>
        <motion.button
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
          className="p-2 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors"
          aria-label="Refresh rates"
        >
          <RefreshCw className="h-4 w-4" />
        </motion.button>
      </div>

      {/* From Currency */}
      <div className="relative rounded-lg bg-zinc-900 border border-zinc-800 p-4 mb-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-zinc-500">From</span>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="bg-transparent text-sm font-medium text-zinc-300 focus:outline-none cursor-pointer hover:text-white"
          >
            {currencies.map((c) => (
              <option key={c.code} value={c.code} className="bg-zinc-900">
                {c.flag} {c.code}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl text-zinc-500">{fromCurrencyData.symbol}</span>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))}
            className="bg-transparent text-3xl font-semibold text-white focus:outline-none w-full"
            placeholder="0"
          />
        </div>
      </div>

      {/* Swap Button */}
      <div className="relative flex justify-center -my-3 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isSwapping ? 180 : 0 }}
          onClick={handleSwap}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition-colors"
          aria-label="Swap currencies"
        >
          <ArrowDownUp className="h-4 w-4" />
        </motion.button>
      </div>

      {/* To Currency */}
      <div className="relative rounded-lg bg-zinc-900 border border-zinc-800 p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-zinc-500">To</span>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="bg-transparent text-sm font-medium text-zinc-300 focus:outline-none cursor-pointer hover:text-white"
          >
            {currencies.map((c) => (
              <option key={c.code} value={c.code} className="bg-zinc-900">
                {c.flag} {c.code}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl text-zinc-500">{toCurrencyData.symbol}</span>
          <span className="text-3xl font-semibold text-emerald-400">
            {formatAmount(convertedAmount, toCurrency)}
          </span>
        </div>
      </div>

      {/* Exchange Rate */}
      <div className="flex items-center justify-center text-xs text-zinc-500">
        <span>
          1 {fromCurrency} = {formatAmount(toRate / fromRate, toCurrency)} {toCurrency}
        </span>
      </div>
    </div>
  );
};

export default CurrencyConverter;
