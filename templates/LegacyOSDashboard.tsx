import React, { useState } from 'react';
import {
    HardDrive,
    Folder,
    Trash2,
    Globe,
    Settings,
    Terminal,
    Image as ImageIcon,
    FileText,
    Volume2,
    Clock,
    Menu
} from 'lucide-react';
import LegacyWindow from '../components/legacy/LegacyWindow';
import LegacyButton from '../components/legacy/LegacyButton';
import DesktopIcon from '../components/legacy/DesktopIcon';
import LegacyAlert from '../components/legacy/LegacyAlert';
import { useTheme } from '@/context/ThemeContext';

const LegacyOSDashboard = () => {
    const [activeWindow, setActiveWindow] = useState('explorer');
    const [startOpen, setStartOpen] = useState(false);
    const [time, setTime] = useState('10:42 PM');
    const { currentPlaygroundTheme: theme, setScopedTheme } = useTheme();

    // Set scoped theme
    React.useEffect(() => {
        setScopedTheme('brutalist', 'legacy');
    }, []);

    // Simple clock update
    React.useEffect(() => {
        const timer = setInterval(() => {
            const d = new Date();
            setTime(d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div
            className="h-screen w-full font-mono overflow-hidden relative selection:bg-[#000080] selection:text-[#ffffff]"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground
            }}
        >

            {/* Desktop Icons */}
            <div className="absolute top-4 left-4 grid grid-cols-1 gap-6">
                <DesktopIcon icon={HardDrive} label="My Computer" />
                <DesktopIcon icon={Globe} label="Internet" />
                <DesktopIcon icon={Folder} label="Documents" />
                <DesktopIcon icon={Trash2} label="Recycle Bin" />
            </div>

            {/* Floating Windows (Stacked via Grid for demo) */}
            <div className="absolute inset-0 p-12 pointer-events-none grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-20">

                {/* File Explorer */}
                <div className="pointer-events-auto transform hover:z-10 hover:scale-[1.01] transition-transform">
                    <LegacyWindow title="C:\WINDOWS\SYSTEM32" isActive={activeWindow === 'explorer'}>
                        <div
                            className="border-[2px] border-inset h-64 p-2 overflow-y-auto"
                            style={{ borderColor: theme.colors.muted, backgroundColor: '#ffffff' }}
                        >
                            <div className="grid grid-cols-4 gap-2 text-center">
                                {[
                                    { icon: Folder, name: "CONFIG" },
                                    { icon: Folder, name: "DRIVERS" },
                                    { icon: FileText, name: "README.TXT" },
                                    { icon: Settings, name: "SYSTEM.INI" },
                                    { icon: Terminal, name: "CMD.EXE" },
                                    { icon: ImageIcon, name: "LOGO.BMP" },
                                    { icon: FileText, name: "BOOT.LOG" },
                                    { icon: Settings, name: "WIN.INI" },
                                ].map((file, i) => (
                                    <div key={i} className="flex flex-col items-center hover:bg-[#000080] hover:text-[#ffffff] p-1 cursor-pointer group">
                                        <file.icon className="h-6 w-6 mb-1 group-hover:text-[#ffffff]" style={{ color: '#000000' }} />
                                        <span className="text-xs">{file.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className="p-1 text-xs border-t flex gap-2"
                            style={{ borderColor: theme.colors.card }}
                        >
                            <span>8 object(s)</span>
                            <span>124KB</span>
                        </div>
                    </LegacyWindow>
                </div>

                {/* Notepad / Text Editor */}
                <div className="pointer-events-auto transform translate-y-12 md:translate-x-12 hover:z-10 hover:scale-[1.01] transition-transform">
                    <LegacyWindow title="Untitled - Notepad" isActive={activeWindow === 'notepad'}>
                        <div
                            className="flex gap-4 px-2 pb-1 text-sm border-b shadow-[0_1px_0_#ffffff]"
                            style={{ borderColor: theme.colors.muted }}
                        >
                            <span><span className="underline decoration-1 underline-offset-2">F</span>ile</span>
                            <span><span className="underline decoration-1 underline-offset-2">E</span>dit</span>
                            <span><span className="underline decoration-1 underline-offset-2">S</span>earch</span>
                            <span><span className="underline decoration-1 underline-offset-2">H</span>elp</span>
                        </div>
                        <div
                            className="h-48 w-full p-2 text-sm outline-none resize-none border-[2px] border-inset overflow-y-auto"
                            style={{ borderColor: theme.colors.muted, backgroundColor: '#ffffff' }}
                        >
                            <p>TODO LIST:</p>
                            <p>- Buy floppy disks</p>
                            <p>- Defrag hard drive</p>
                            <p>- Install Netscape Navigator</p>
                            <p>- Update HTML marquee tag</p>
                            <p className="animate-pulse">_</p>
                        </div>
                    </LegacyWindow>
                </div>

                {/* Control Panel */}
                <div className="pointer-events-auto absolute bottom-32 right-12 w-64 hidden md:block">
                    <LegacyWindow title="Control Panel">
                        <div className="p-2 h-40 grid grid-cols-3 gap-2" style={{ backgroundColor: '#ffffff' }}>
                            <div className="flex flex-col items-center text-center">
                                <Settings className="h-6 w-6" />
                                <span className="text-[10px]">Display</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Settings className="h-6 w-6" />
                                <span className="text-[10px]">Mouse</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Settings className="h-6 w-6" />
                                <span className="text-[10px]">Sound</span>
                            </div>
                        </div>
                    </LegacyWindow>
                </div>

                {/* Alert Box Overlay */}
                <LegacyAlert />

            </div>

            {/* Taskbar */}
            <div
                className="absolute bottom-0 left-0 right-0 h-10 border-t-2 border-white flex items-center justify-between px-1 z-50 shadow-[0_-1px_0_#000]"
                style={{ backgroundColor: theme.colors.card }} // Silver
            >
                <div className="flex items-center gap-2 h-full py-1">
                    <LegacyButton
                        onClick={() => setStartOpen(!startOpen)}
                        active={startOpen}
                        className="flex items-center gap-1 font-bold h-full"
                    >
                        <div className="grid grid-cols-2 gap-[1px]">
                            <div className="w-1 h-1 bg-[#ff0000]" />
                            <div className="w-1 h-1 bg-[#00ff00]" />
                            <div className="w-1 h-1 bg-[#0000ff]" />
                            <div className="w-1 h-1 bg-[#ffff00]" />
                        </div>
                        Start
                    </LegacyButton>

                    {startOpen && (
                        <div
                            className="absolute bottom-10 left-1 w-48 border-2 border-white border-r-black border-b-black shadow-xl p-1 flex flex-col gap-1"
                            style={{ backgroundColor: theme.colors.card }}
                        >
                            <div className="bg-[#000080] p-1 mb-1 font-bold text-lg vertical-text flex items-end" style={{ color: '#ffffff' }}>
                                <span className="-rotate-90 origin-bottom-left translate-x-6">LegacyOS</span>
                            </div>
                            <div className="hover:bg-[#000080] hover:text-[#ffffff] px-2 py-1 flex items-center gap-2 cursor-pointer">
                                <Folder className="h-4 w-4" /> Programs
                            </div>
                            <div className="hover:bg-[#000080] hover:text-[#ffffff] px-2 py-1 flex items-center gap-2 cursor-pointer">
                                <FileText className="h-4 w-4" /> Documents
                            </div>
                            <div className="hover:bg-[#000080] hover:text-[#ffffff] px-2 py-1 flex items-center gap-2 cursor-pointer">
                                <Settings className="h-4 w-4" /> Settings
                            </div>
                            <div className="border-t border-b border-white my-1" style={{ borderColor: theme.colors.muted }} />
                            <div className="hover:bg-[#000080] hover:text-[#ffffff] px-2 py-1 flex items-center gap-2 cursor-pointer">
                                <Menu className="h-4 w-4" /> Shut Down...
                            </div>
                        </div>
                    )}

                    <div className="w-[2px] h-full border-r border-white mx-1" style={{ backgroundColor: theme.colors.muted }} />

                    {/* Taskbar Items */}
                    <div className="flex gap-1">
                        <div
                            className="w-36 h-full shadow-[inset_1px_1px_#ffffff,inset_-1px_-1px_#000000] active:bg-[#e0e0e0] active:shadow-[inset_1px_1px_#000000,inset_-1px_-1px_#ffffff] flex items-center px-2 gap-2 cursor-pointer border border-black border-t-white border-l-white bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzjwqJAwAxQBNgFUAxQBDgAAP+gK/mAA9F0AAAAASUVORK5CYII=')]"
                            style={{ backgroundColor: theme.colors.card }}
                        >
                            <Folder className="h-4 w-4" />
                            <span className="text-xs truncate font-bold">C:\WINDOWS</span>
                        </div>
                        <div
                            className="w-36 h-full shadow-[inset_1px_1px_#ffffff,inset_-1px_-1px_#000000] flex items-center px-2 gap-2 cursor-pointer border border-black border-t-white border-l-white"
                            style={{ backgroundColor: theme.colors.card }}
                        >
                            <FileText className="h-4 w-4" />
                            <span className="text-xs truncate">Untitled - Notepad</span>
                        </div>
                    </div>
                </div>

                {/* System Tray */}
                <div
                    className="h-full py-1 pr-1 pl-2 border-2 border-r-white border-b-white shadow-[inset_1px_1px_#000000] flex items-center gap-3 px-2"
                    style={{
                        backgroundColor: theme.colors.card,
                        borderColor: theme.colors.muted
                    }}
                >
                    <Volume2 className="h-4 w-4" />
                    <span className="text-xs">{time}</span>
                </div>
            </div>

        </div>
    );
};

export default LegacyOSDashboard;