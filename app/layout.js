import Link from 'next/link'
import { Suspense } from 'react'
import DarkModeToggle from '../components/darkmodeToggle'
import Navigation from '../components/navigation'
import './globals.css'
import Loading from './loading'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Notes</title>
        <meta name="description" content="Save and Edit your notes" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header className='h-20 bg-slate-300 dark:bg-slate-900 flex justify-between items-center px-4 md:px-8'>
          <Navigation />
          <DarkModeToggle />
        </header>
        <main className='px-4 md:px-8 pt-8'>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </main>
        <footer className='h-8 fixed bottom-0 w-full bg-slate-300 dark:bg-slate-900 text-xs flex items-center justify-center'>
          Footer
        </footer>
      </body>
    </html>
  )
}
