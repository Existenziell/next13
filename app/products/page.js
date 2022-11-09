import Image from "next/image"
import Link from "next/link"
import Button from "../../components/ui/Button"

async function getProducts() {
  const result = await fetch(`https://dummyjson.com/products`, { cache: 'no-store' })
  const data = await result.json()
  return data.products
}

export default async function Products() {
  const products = await getProducts()

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start justify-evenly gap-8 pb-24'>
        {products?.map(prod => (
          <Link key={prod.title} href={`/products/${prod.id}`}>
            <div className='product hover:shadow-sm'>
              <h2 className="text-xl mb-2 truncate">{prod.title}</h2>
              <p className="truncate">{prod.description}</p>
              <div className="my-4 h-44 overflow-hidden">
                <Image
                  src={prod.thumbnail}
                  width={200}
                  height={100}
                  alt={prod.title}
                  style={{ width: 'auto', height: 'auto' }}
                  className='shadow rounded-sm'
                  priority={true}
                />
              </div>
              <p className="text-sm">USD {prod.price},-</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
