"use client"

import Link from 'next/link'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'

export default function Home() {
  const [ass, setass] = useState(false);
  useEffect(() => {
    const { USI: token } = parseCookies()
    if (token) {
      setass(true)
    }
  }, []);


  return (
    <>

      {ass && (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Link href='signIn'>logar</Link>
          <Link href='signUp'>criar conta</Link>
        </main>
      )}

    </>
  )
}
