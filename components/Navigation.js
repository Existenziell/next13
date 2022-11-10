import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className='flex items-center justify-center gap-6'>
      <Link href='/' className='link-nav'>Home</Link>
      <Link href='/nfts' className='link-nav'>Supabase</Link>
      <Link href='/notes' className='link-nav'>MongoDB</Link>
      <Link href='/products' className='link-nav'>Dummyjson</Link>
    </nav>
  )
}
