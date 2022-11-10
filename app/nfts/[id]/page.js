import { supabase } from '../../../utils/supabase'
import BackButtonn from '../../../components/BackButton';
import Image from 'next/image';

async function fetchNft(nftId) {
  const { data: nft } = await supabase
    .from('nfts')
    .select(`*, artists(*), collections(*)`)
    .eq('id', nftId)
    .single()
  if (!nft) return
  return nft
}

export default async function Nft({ params }) {
  const nft = await fetchNft(params.id)
  return (
    <div className='flex items-center justify-center relative'>
      <div className='absolute top-0 left-0'>
        <BackButtonn href='/nfts' />
      </div>
      <div className='nft'>
        <h2 className='text-2xl mb-2'>{nft.name}</h2>
        <p>Artist: {nft.artists.name}</p>
        <p className='mb-4'>Collection: {nft.collections.title}</p>
        <Image
          width={300}
          height={300}
          placeholder="blur"
          src={nft.image_url}
          blurDataURL={nft.image_url}
          alt='NFT Image'
          className='shadow rounded-sm'
        />
        <p className='mt-4 max-w-[300px]'>{nft.description}</p>
      </div>
    </div>
  )
}
