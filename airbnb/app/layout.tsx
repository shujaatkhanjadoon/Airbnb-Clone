import { Nunito } from 'next/font/google'

import Navbar from '@/app/components/navbar/Navbar';
import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';
import SearchModal from '@/app/components/modals/SearchModal';
import RentModal from '@/app/components/modals/RentModal';

import ToasterProvider from './providers/ToasterProvider';

import './globals.css'
import ClientOnly from './components/ClientOnly';


const font = Nunito({
  subsets: ['latin'],
})

export const Metadata = {
  title: 'AirBnb | Shujaat Khan',
  description: 'Clone By Shujaat Khan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          {/* <Navbar currentUser={currentUser} /> */}
          <Navbar />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}