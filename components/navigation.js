import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className='flex items-center justify-center gap-6'>
      <Link href='/' className='link-nav'>Home</Link>
      <Link href='/nfts' className='link-nav'>NFTs</Link>
      <Link href='/products' className='link-nav'>Products</Link>
      <Link href='/notes' className='link-nav'>Notes</Link>
      <Link href='/notes/create' className='link-nav'>Create</Link>
    </nav>
  )
}
