import { Sidebar } from '@/components/sidebar'
import { Topbar } from '@/components/topbar'
export default function DashboardLayout({ children }: { children: React.ReactNode }) { return <div className="min-h-screen bg-[#f8f9fc]"><Sidebar /><main className="pl-64"><Topbar />{children}</main></div> }
