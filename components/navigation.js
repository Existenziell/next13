import Link from "next/link";


export default function Navigation() {
  return (
    <nav className='flex items-center justify-center gap-6'>
      <Link href='/'>Home</Link>
      <Link href='/products'>Products</Link>
      <Link href='/notes'>Notes</Link>
      <Link href='/notes/create'>Create</Link>

    </nav>
  )
}
