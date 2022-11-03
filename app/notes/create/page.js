'use client'

import PocketBase from 'pocketbase'
import { useState } from 'react'
import InputText from '../../../components/InputText'
import Textarea from '../../../components/Textarea'
import { useRouter } from 'next/navigation'

export default function Create() {
  const [title, setTitle] = useState()
  const [text, setText] = useState()
  const router = useRouter()

  const createNote = async (e) => {
    e.preventDefault()
    const db = new PocketBase('http://127.0.0.1:8090')
    const data = { title, text };
    const record = await db.records.create('notes', data)
    if (record) {
      router.refresh()
      router.push('/notes')
    }
  }

  return (
    <div className='flex flex-col items-center w-full'>
      <p className='text-2xl'>Create Note</p>
      <form onSubmit={createNote} className='flex flex-col my-8 gap-2 w-full md:w-1/2'>
        <InputText onChange={setTitle} required={true} />
        <Textarea onChange={setText} rows={10} required={true} />
        <button type='submit' className='button'>Save</button>
      </form>
    </div>
  )
}
