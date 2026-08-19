import type { Metadata } from 'next'; import './globals.css'; import Header from '@/components/Header'; import Footer from '@/components/Footer';
export const metadata: Metadata = { title:'Hike Remote | Go Beyond the Trail', description:'Guided outdoor experiences where adventure becomes connection.', metadataBase:new URL('https://hike-remote.replit.app') };
export default function RootLayout({children}:{children:React.ReactNode}){ return <html lang="en"><body><Header/>{children}<Footer/></body></html> }
