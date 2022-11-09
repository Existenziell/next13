'use client'

import SyncLoader from 'react-spinners/SyncLoader'

export default function Loading() {
  return (
    <div className='flex items-center justify-center w-full mt-8'>
      <SyncLoader color='var(--color-cta)' size={10} />
    </div>
  )
}
