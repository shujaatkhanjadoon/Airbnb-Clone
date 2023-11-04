import { Nunito } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal';


const font = Nunito({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AirBnb | Shujaat Khan',
  description: 'Clone By Shujaat Khan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <Modal title="Login In" isOpen />
        <Navbar/>
        </ClientOnly>
        {children}</body>
    </html>
  )
}
