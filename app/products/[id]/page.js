import Image from 'next/image';
import BackBtn from '../../../components/backButton';

async function getProduct(prodId) {
  const res = await fetch(`https://dummyjson.com/products/${prodId}`)
  return res.json();
}

export default async function Product({ params }) {
  const product = await getProduct(params.id)

  return (
    <div className='flex items-center justify-center relative'>
      <div className='absolute top-0 left-0'>
        <BackBtn href='/products' />
      </div>
      <div className='product'>
        <h2 className="text-xl mb-2 ">{product.title}</h2>
        <p className="">{product.description}</p>
        <div className="nextimg my-4">
          <Image
            src={product.thumbnail}
            layout='responsive'
            width={100}
            height={100}
            alt={product.title}
            objectFit='contain'
            className="rounded-sm"
          />
        </div>
        <p>USD {product.price},-</p>
      </div>
    </div>
  )
}
