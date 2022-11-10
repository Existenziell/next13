import Image from 'next/image'
import BackButton from '../../../components/BackButton'

async function getProduct(prodId) {
  const res = await fetch(`https://dummyjson.com/products/${prodId}`)
  return res.json()
}

export default async function Product({ params }) {
  const product = await getProduct(params.id)

  return (
    <div className='flex items-center justify-center relative'>
      <div className='absolute top-0 left-0'>
        <BackButton href='/products' />
      </div>
      <div className='product'>
        <h2 className="text-xl mb-2 ">{product.title}</h2>
        <p className="">{product.description}</p>
        <div className="my-4">
          <Image
            src={product.thumbnail}
            width={200}
            height={100}
            alt={product.title}
            style={{ width: 'auto', height: 'auto' }}
            className='shadow rounded-sm'
            priority={true}
          />
        </div>
        <p className='text-sm'>USD {product.price},-</p>
      </div>
    </div>
  )
}
