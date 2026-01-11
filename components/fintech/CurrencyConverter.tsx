import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownUp, RefreshCw } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

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
  const { theme } = useTheme();

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
    <div
      className="rounded-xl border p-5"
      style={{
        backgroundColor: theme.colors.background,
        borderColor: theme.colors.border
      }}
    >
      <div className="flex items-center justify-between mb-5">
        <h3
          className="text-sm font-medium"
          style={{ color: theme.colors.mutedForeground }}
        >
          Convert
        </h3>
        <motion.button
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
          className="p-2 rounded-lg transition-colors hover:opacity-80"
          style={{ color: theme.colors.mutedForeground }}
          aria-label="Refresh rates"
        >
          <RefreshCw className="h-4 w-4" />
        </motion.button>
      </div>

      {/* From Currency */}
      <div
        className="relative rounded-lg border p-4 mb-2"
        style={{
          backgroundColor: theme.colors.muted,
          borderColor: theme.colors.border
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-xs"
            style={{ color: theme.colors.mutedForeground }}
          >
            From
          </span>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
            style={{ color: theme.colors.foreground }}
          >
            {currencies.map((c) => (
              <option
                key={c.code}
                value={c.code}
                style={{ backgroundColor: theme.colors.muted }}
              >
                {c.flag} {c.code}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-baseline gap-2">
          <span
            className="text-2xl"
            style={{ color: theme.colors.mutedForeground }}
          >
            {fromCurrencyData.symbol}
          </span>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))}
            className="bg-transparent text-3xl font-semibold focus:outline-none w-full"
            style={{ color: theme.colors.foreground }}
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
          className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-colors"
          style={{
            backgroundColor: theme.colors.accent,
            color: theme.colors.accentForeground,
            boxShadow: `0 10px 25px ${theme.colors.accent}40`
          }}
          aria-label="Swap currencies"
        >
          <ArrowDownUp className="h-4 w-4" />
        </motion.button>
      </div>

      {/* To Currency */}
      <div
        className="relative rounded-lg border p-4 mb-4"
        style={{
          backgroundColor: theme.colors.muted,
          borderColor: theme.colors.border
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-xs"
            style={{ color: theme.colors.mutedForeground }}
          >
            To
          </span>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
            style={{ color: theme.colors.foreground }}
          >
            {currencies.map((c) => (
              <option
                key={c.code}
                value={c.code}
                style={{ backgroundColor: theme.colors.muted }}
              >
                {c.flag} {c.code}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-baseline gap-2">
          <span
            className="text-2xl"
            style={{ color: theme.colors.mutedForeground }}
          >
            {toCurrencyData.symbol}
          </span>
          <span
            className="text-3xl font-semibold"
            style={{ color: theme.colors.accent }}
          >
            {formatAmount(convertedAmount, toCurrency)}
          </span>
        </div>
      </div>

      {/* Exchange Rate */}
      <div
        className="flex items-center justify-center text-xs"
        style={{ color: theme.colors.mutedForeground }}
      >
        <span>
          1 {fromCurrency} = {formatAmount(toRate / fromRate, toCurrency)} {toCurrency}
        </span>
      </div>
    </div>
  );
};

export default CurrencyConverter;
