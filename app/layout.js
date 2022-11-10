import './globals.css'
import Link from 'next/link'
import Loading from './loading'
import Navigationn from '../components/Navigationnn'
import DarkModeTogggle from '../components/DarkmodeTogggle'
import { Suspense } from 'react' // Needed for loading state
import { Quicksand } from '@next/font/google'
const font = Quicksand()

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={font.className}>
      <head>
        <title>NextJS 13 Playground</title>
        <meta name="description" content="NextJS 13 Playground" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header className='h-20 bg-brand dark:bg-brand-dark flex justify-between items-center px-4 md:px-8'>
          <Navigationn />
          <DarkModeTogggle />
        </header>
        <main className='px-4 md:px-8 pt-8'>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </main>
        <footer className='h-8 fixed bottom-0 w-full bg-brand dark:bg-brand-dark text-xs flex items-center justify-center'>
          Footer
        </footer>
      </body>
    </html>
  )
}
