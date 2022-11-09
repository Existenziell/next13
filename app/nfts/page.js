import { supabase } from '../../utils/supabase'
import Link from 'next/link'
import Image from 'next/image'

async function fetchNfts() {
  let { data: nfts } = await supabase
    .from('nfts')
    .select(`*, collections(*), artists(*)`)
    .order('created_at', { ascending: false })
  return nfts
}

export default async function Nfts() {
  const nfts = await fetchNfts()
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start justify-evenly gap-8 pb-24'>
      {nfts?.map(nft => (
        <Link key={nft.name} href={`/nfts/${nft.id}`}>
          <div className='nft hover:shadow-sm '>
            <h2 className='text-2xl mb-2'>{nft.name}</h2>
            <p className='max-h-16 truncate'>{nft.description}</p>
            <div className="my-4">
              <Image
                src={nft.image_url}
                width={400}
                height={400}
                alt={nft.name}
                style={{ width: 'auto', height: 'auto' }}
                className='shadow rounded-sm'
                priority={true}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
