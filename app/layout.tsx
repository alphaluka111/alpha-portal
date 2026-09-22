import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Lumina School Portal', description: 'A calm, connected school management experience.' }
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html> }
