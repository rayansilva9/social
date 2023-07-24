"use client"

import './globals.css'

import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { checkRoutes } from '@/functions/checkRoutes'
import PrivateRoutes from '@/components/privateRoutes'
import { UserContextProvider } from '@/context/userContext'
import Home from './page'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()

  const isPublicRoute = checkRoutes(pathname!)


  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          {isPublicRoute && children}
          {!isPublicRoute && (
            <PrivateRoutes>
              {<Home />}
            </PrivateRoutes>
          )}
        </UserContextProvider>
      </body>
    </html>
  )
}
