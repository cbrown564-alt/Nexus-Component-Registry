import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Phone, Video, MoreVertical, Mic, Image as ImageIcon, Smile, Send, Paperclip } from 'lucide-react';
import { Link } from 'react-router-dom';
import SignalItem, { SignalMessage } from './SignalItem';

const INITIAL_MESSAGES: SignalMessage[] = [
    { id: '1', text: "Hey! Did you see the new organic updates?", isSender: false, timestamp: "10:23 AM", status: 'read' },
    { id: '2', text: "Yeah, the breathing animations look incredible. Very smooth.", isSender: true, timestamp: "10:24 AM", status: 'read' },
    { id: '3', text: "I love how it feels alive. Not just static UI elements anymore.", isSender: false, timestamp: "10:25 AM", status: 'read' },
    { id: '4', text: "Exactly! It's that biology-meets-technology vibe we were going for.", isSender: true, timestamp: "10:26 AM", status: 'read' },
];

export default function SignalTemplate() {
    const [messages, setMessages] = useState<SignalMessage[]>(INITIAL_MESSAGES);
    const [inputValue, setInputValue] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom securely
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newMessage: SignalMessage = {
            id: Date.now().toString(),
            text: inputValue,
            isSender: true,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            status: 'sent'
        };

        setMessages(prev => [...prev, newMessage]);
        setInputValue('');

        // Simulate reply
        setTimeout(() => {
            const reply: SignalMessage = {
                id: (Date.now() + 1).toString(),
                text: "That's super cool! Can you show me more?",
                isSender: false,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                status: 'read'
            };
            setMessages(prev => [...prev, reply]);
        }, 2000);
    };

    const [notification, setNotification] = useState<string | null>(null);
    const [isRecording, setIsRecording] = useState(false);

    const showNotification = (text: string) => {
        setNotification(text);
        setTimeout(() => setNotification(null), 2000);
    };

    const handleImageClick = () => {
        showNotification("📸 Gallery Opened");
    };

    const handleEmojiClick = () => {
        setInputValue(prev => prev + " 😊");
    };

    const handleVoiceClick = () => {
        if (isRecording) {
            setIsRecording(false);
            showNotification("🎤 Recording Cancelled");
        } else {
            setIsRecording(true);
            setInputValue("Listening...");
            setTimeout(() => {
                setIsRecording(false);
                setInputValue("");
                showNotification("🔊 Voice Note Sent");
                setMessages(prev => [...prev, {
                    id: Date.now().toString(),
                    text: "🎤 Voice Message (0:04)",
                    isSender: true,
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    status: 'sent'
                }]);
            }, 1500);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex flex-col font-sans overflow-hidden">

            {/* Base Background Layer */}
            <div className="absolute inset-0 bg-slate-50 z-0" />

            {/* Vivid Breathing Orbs - "Lava Lamp" Style */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 0.9, 1],
                    x: [0, 20, -20, 0],
                    y: [0, -30, 20, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-300 rounded-full blur-[100px] opacity-60 pointer-events-none z-0"
            />

            <motion.div
                animate={{
                    scale: [1, 1.1, 1.3, 1],
                    x: [0, -30, 30, 0],
                    y: [0, 40, -20, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-pink-400 rounded-full blur-[80px] opacity-60 pointer-events-none z-0"
            />

            <motion.div
                animate={{
                    scale: [1, 1.4, 0.8, 1],
                    opacity: [0.4, 0.7, 0.4]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-rose-300 rounded-full blur-[120px] opacity-50 pointer-events-none z-0"
            />

            {/* Header */}
            <div className="relative px-4 py-3 flex items-center justify-between bg-white/60 backdrop-blur-xl border-b border-pink-100 z-50">
                <div className="flex items-center gap-3">
                    <Link to="/mobile/templates" className="text-pink-900/70 hover:text-pink-900 transition-colors">
                        <ArrowLeft size={24} />
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-400 to-rose-400 p-[2px]">
                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                                </div>
                            </div>
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-800 text-sm">Alex Chen</span>
                            <span className="text-xs text-pink-600/80 font-medium">Online</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-5 text-gray-500">
                    <Video size={22} className="hover:text-pink-600 transition-colors cursor-pointer" />
                    <Phone size={20} className="hover:text-pink-600 transition-colors cursor-pointer" />
                    <MoreVertical size={20} className="hover:text-pink-600 transition-colors cursor-pointer" />
                </div>
            </div>

            {/* Notification Toast */}
            <AnimatePresence>
                {notification && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: -20, x: '-50%' }}
                        className="fixed top-24 left-1/2 bg-gray-900/90 text-white px-4 py-2 rounded-full text-sm font-medium z-[200] backdrop-blur-md shadow-lg"
                    >
                        {notification}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Chat Area */}
            <div ref={containerRef} className="flex-1 overflow-y-auto p-4 z-10 relative scroll-smooth">
                <AnimatePresence initial={false}>
                    {messages.map((msg) => (
                        <SignalItem key={msg.id} message={msg} />
                    ))}
                </AnimatePresence>
            </div>

            {/* Floating Input Area */}
            <div className="relative px-4 pb-6 pt-2 z-50 flex-none">
                <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-2 rounded-[2rem] shadow-xl shadow-pink-500/10 flex items-center gap-2">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={handleImageClick}
                        className="p-3 text-gray-500 hover:text-pink-500 transition-colors rounded-full hover:bg-pink-50/50"
                    >
                        <ImageIcon size={22} />
                    </motion.button>

                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder={isRecording ? "Listening..." : "Message..."}
                            disabled={isRecording}
                            className={`w-full bg-stone-100/50 text-gray-800 rounded-full py-3 pl-4 pr-10 focus:outline-none focus:bg-white transition-all placeholder:text-gray-400 font-medium text-[15px] ${isRecording ? 'animate-pulse text-pink-600' : ''}`}
                        />
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={handleEmojiClick}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-pink-500"
                        >
                            <Smile size={20} />
                        </motion.button>
                    </div>

                    {inputValue.trim() && !isRecording ? (
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={handleSend}
                            className="p-3 bg-gradient-to-tr from-pink-500 to-rose-500 text-white rounded-full shadow-lg shadow-pink-500/30"
                        >
                            <Send size={18} className="translate-x-0.5" />
                        </motion.button>
                    ) : (
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={handleVoiceClick}
                            className={`p-3 rounded-full transition-colors ${isRecording ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' : 'text-gray-500 hover:text-pink-500 hover:bg-pink-50/50'}`}
                        >
                            <Mic size={22} />
                        </motion.button>
                    )}
                </div>
            </div>
        </div>
    );
}
