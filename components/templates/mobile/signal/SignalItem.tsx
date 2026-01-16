import { motion } from 'framer-motion';
import { Check, CheckCheck } from 'lucide-react';

export interface SignalMessage {
    id: string;
    text: string;
    isSender: boolean;
    timestamp: string;
    status?: 'sent' | 'delivered' | 'read';
}

interface SignalItemProps {
    message: SignalMessage;
    isTyping?: boolean;
}

export default function SignalItem({ message }: SignalItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 30
            }}
            className={`flex w-full mb-4 ${message.isSender ? 'justify-end' : 'justify-start'}`}
        >
            <div
                className={`
                    max-w-[75%] px-4 py-3 rounded-2xl relative
                    ${message.isSender
                        ? 'bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-br-none shadow-lg shadow-pink-500/20'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-100'
                    }
                `}
            >
                <p className="text-[15px] leading-relaxed font-medium">
                    {message.text}
                </p>

                <div className={`
                    flex items-center gap-1 mt-1 text-[10px]
                    ${message.isSender ? 'text-pink-100/80 justify-end' : 'text-gray-400 justify-start'}
                `}>
                    <span>{message.timestamp}</span>
                    {message.isSender && (
                        <span className="ml-0.5">
                            {message.status === 'read' ? <CheckCheck size={12} /> : <Check size={12} />}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
