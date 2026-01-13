import React, { useState } from 'react';
import {
  FileText,
  Search,
  History,
  Share,
  Download,
  ChevronLeft,
  Highlighter,
  PenTool,
  Printer
} from 'lucide-react';
import LegalPaper from '../components/legal/LegalPaper';
import Clause from '../components/legal/Clause';
import RedlineSidebar from '../components/legal/RedlineSidebar';
import DiffViewer from '../components/legal/DiffViewer';
import LegalButton from '../components/legal/LegalButton';

import { useTheme } from '@/context/ThemeContext';

const LegalDashboard = () => {
  const { currentPlaygroundTheme: theme, setPlaygroundTheme } = useTheme();

  React.useEffect(() => {
    setPlaygroundTheme('legal');
  }, []);

  const [activeClause, setActiveClause] = useState<string | null>('1.2');

  return (
    <div
      className="flex h-screen w-full font-sans overflow-hidden"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.foreground,
        fontFamily: theme.typography.fontFamily,
      }}
    >

      {/* Left Navigation (Sidebar) */}
      <aside className="w-16 md:w-64 flex-shrink-0 flex flex-col border-r" style={{ backgroundColor: theme.colors.primary, color: theme.colors.mutedForeground, borderColor: theme.colors.border }}>
        <div className="h-16 flex items-center justify-center md:justify-start md:px-6 border-b" style={{ borderColor: theme.colors.border }}>
          <div className="h-8 w-8 rounded-sm flex items-center justify-center font-serif font-bold text-lg" style={{ backgroundColor: theme.colors.accent, color: theme.colors.card }}>
            §
          </div>
          <span className="ml-3 font-serif font-bold hidden md:block" style={{ color: theme.colors.primaryForeground }}>LegalEagle</span>
        </div>

        <nav className="flex-1 p-2 md:p-4 space-y-1">
          <div className="hidden md:block px-2 mb-2 text-[10px] uppercase tracking-wider font-bold" style={{ color: theme.colors.secondaryForeground }}>Documents</div>
          {[
            { icon: FileText, label: 'Master Agreement', active: true },
            { icon: History, label: 'Version History', active: false },
            { icon: Search, label: 'Clause Search', active: false },
          ].map((item, i) => (
            <button
              key={i}
              className={`w-full flex items-center gap-3 p-2 rounded-md transition-all`}
              style={{
                backgroundColor: item.active ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: item.active ? theme.colors.primaryForeground : theme.colors.secondaryForeground,
                boxShadow: item.active ? '0 1px 2px 0 rgba(0, 0, 0, 0.05)' : 'none'
              }}
            >
              <item.icon className="h-5 w-5" />
              <span className="hidden md:block text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t hidden md:block" style={{ borderColor: theme.colors.border }}>
          <div className="rounded-md p-3" style={{ backgroundColor: theme.colors.secondary }}>
            <div className="text-xs font-bold mb-1" style={{ color: theme.colors.foreground }}>Audit Trail</div>
            <div className="text-[10px] font-mono" style={{ color: theme.colors.mutedForeground }}>
              User: J. Doe<br />
              Session: #8821<br />
              Last Edit: 2m ago
            </div>
          </div>
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 flex flex-col min-w-0">

        {/* Top Toolbar */}
        <header className="h-16 border-b flex items-center justify-between px-6 shadow-sm z-10" style={{ backgroundColor: theme.colors.card, borderColor: theme.colors.border }}>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full" style={{ color: theme.colors.mutedForeground }}>
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div>
              <h1 className="text-lg font-bold leading-tight" style={{ color: theme.colors.foreground }}>Master Services Agreement v2.4</h1>
              <div className="flex items-center gap-2 text-xs" style={{ color: theme.colors.mutedForeground }}>
                <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                Draft Mode
                <span style={{ color: theme.colors.border }}>|</span>
                Last modified by Sarah Jenkins
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center rounded-lg p-1 mr-4" style={{ backgroundColor: theme.colors.muted }}>
              <LegalButton variant="secondary" size="sm" className="shadow-sm" style={{ backgroundColor: theme.colors.card }}>Edit</LegalButton>
              <LegalButton variant="toolbar" size="sm">Review</LegalButton>
              <LegalButton variant="toolbar" size="sm">Sign</LegalButton>
            </div>

            <LegalButton variant="toolbar" size="sm" icon={<Highlighter className="h-4 w-4" />} className="p-2" />
            <LegalButton variant="toolbar" size="sm" icon={<Printer className="h-4 w-4" />} className="p-2" />
            <LegalButton variant="primary" icon={<Share className="h-4 w-4" />} className="ml-2">
              Share
            </LegalButton>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-hidden flex" style={{ backgroundColor: theme.colors.background }}>

          {/* Document Canvas */}
          <div className="flex-1 overflow-y-auto p-8 lg:p-12 relative scroll-smooth">

            {/* Split View Widget (Floating or Inline) */}
            <div className="mb-8 max-w-[850px] mx-auto">
              <DiffViewer />
            </div>

            <LegalPaper title="Master Services Agreement">

              <div className="mb-8 text-sm text-center font-serif italic" style={{ color: theme.colors.mutedForeground }}>
                Effective Date: October 24, 2024
              </div>

              <Clause number="1.0" title="Definitions">
                <span className="font-bold">"Confidential Information"</span> means all non-public information disclosed by a party (Discloser) to the other party (Recipient), whether orally or in writing, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure.
              </Clause>

              <Clause
                number="1.2"
                title="Services"
                isActive={activeClause === '1.2'}
                hasComment={true}
                onClick={() => setActiveClause('1.2')}
              >
                Provider shall perform the services described in the Statement of Work ("SOW") attached hereto as Exhibit A (the <span className="bg-red-100 text-red-900 px-1 border-b border-red-300">"Services"</span>). Provider represents that it has the requisite skill, experience, and qualifications to perform the Services in a professional and workmanlike manner.
              </Clause>

              <Clause number="2.0" title="Payment Terms">
                Fees for the Services will be set forth in the applicable SOW. Unless otherwise stated in the SOW, Customer shall pay all undisputed invoices within <span className="bg-blue-100 text-blue-900 px-1 border-b border-blue-300">thirty (30)</span> days of receipt. Late payments shall accrue interest at the rate of 1.5% per month or the maximum rate permitted by law, whichever is lower.
              </Clause>

              <Clause number="3.0" title="Term and Termination">
                This Agreement commences on the Effective Date and continues until all SOWs have expired or been terminated. Either party may terminate this Agreement for cause if the other party breaches any material term and fails to cure such breach within thirty (30) days of written notice.
              </Clause>

              <Clause number="4.0" title="Intellectual Property">
                <span className="bg-yellow-100 px-1">Customer owns all right, title, and interest in and to the Deliverables.</span> Provider retains all ownership rights in its pre-existing materials and generic tools used to create the Deliverables.
              </Clause>

              <div className="mt-12 pt-12 flex justify-between gap-12" style={{ borderTopWidth: '2px', borderTopColor: theme.colors.foreground }}>
                <div className="flex-1">
                  <div className="h-16 mb-2" style={{ borderBottomWidth: '1px', borderBottomColor: theme.colors.mutedForeground }}></div>
                  <div className="text-xs font-bold uppercase tracking-wider">Signed by Customer</div>
                </div>
                <div className="flex-1">
                  <div className="h-16 mb-2" style={{ borderBottomWidth: '1px', borderBottomColor: theme.colors.mutedForeground }}></div>
                  <div className="text-xs font-bold uppercase tracking-wider">Signed by Provider</div>
                </div>
              </div>

            </LegalPaper>

            <div className="h-12" /> {/* Bottom Spacer */}
          </div>

          {/* Right Sidebar (Comments) */}
          <div className="w-80 flex-shrink-0 hidden xl:block shadow-xl z-20" style={{ borderLeftWidth: '1px', borderLeftColor: theme.colors.border, backgroundColor: theme.colors.card }}>
            <RedlineSidebar />
          </div>

        </div>
      </main>
    </div>
  );
};

export default LegalDashboard;