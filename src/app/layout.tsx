'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { checkRoutes } from '@/functions/checkRoutes'
import PrivateRoutes from '@/components/privateRoutes'
import { UserContextProvider } from '@/context/userContext'
import Home from './page'
import Header from '@/components/header'
import NavBar from '@/components/navbar'
import { MainContextProvider } from '@/context/mainContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const isPublicRoute = checkRoutes(pathname!)

  return (
    <html lang="pt-BR">
      <MainContextProvider>
        <body className={inter.className}>
          <UserContextProvider>
            <Header />
            {isPublicRoute && children}
            {!isPublicRoute && <PrivateRoutes>{<Home />}</PrivateRoutes>}
            <NavBar />
          </UserContextProvider>
        </body>
      </MainContextProvider>
    </html>
  )
}
