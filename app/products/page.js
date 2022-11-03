import Image from "next/image"
import Link from "next/link"

async function getProducts() {
  const result = await fetch(`https://dummyjson.com/products`, { cache: 'no-store' })
  const data = await result.json()
  return data.products
}

export default async function Products() {
  const products = await getProducts()

  return (
    <div>
      <div className='flex flex-wrap gap-8 pb-24'>
        {products?.map(prod => (
          <Link key={prod.title} href={`/products/${prod.id}`}>
            <div className='product hover:shadow-sm'>
              <h2 className="text-xl mb-2 max-w-[200px] truncate">{prod.title}</h2>
              <p className="max-w-[200px] truncate">{prod.description}</p>
              <div className="nextimg h-20 my-4">
                <Image
                  src={prod.thumbnail}
                  layout='fill'
                  alt={prod.title}
                  objectFit='cover'
                  className="rounded-sm"
                />
              </div>
              <p>USD {prod.price},-</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
