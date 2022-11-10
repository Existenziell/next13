'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid"
import InputText from '../../components/ui/InputText'
import Textarea from '../../components/ui/Textarea'
import Button from '../../components/ui/Button'

export default function CreateNote() {
  const [title, setTitle] = useState()
  const [text, setText] = useState()
  const [addNoteOpen, setAddNoteOpen] = useState(false)
  const router = useRouter()

  const createNote = async (e) => {
    e.preventDefault()
    const data = JSON.stringify({ title, text })
    try {
      const res = await fetch('/api/createNote', {
        method: "post",
        body: data,
        headers: { "Content-Type": "application/json" }
      })
      if (res.status === 200) {
        setAddNoteOpen(false)
        router.refresh()
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='mt-10 pb-24'>
      <button onClick={() => setAddNoteOpen(current => !current)} type='button' title='Add Note'>
        {addNoteOpen
          ? <MinusIcon className='w-10' />
          : <PlusIcon className='w-10' />
        }
      </button>
      {addNoteOpen &&
        <div className='flex flex-col items-start w-full'>
          <h1 className='text-2xl'>Create Note</h1>
          <form onSubmit={createNote} className='flex flex-col my-8 gap-2 w-full md:w-1/2 note'>
            <InputText onChange={setTitle} required={true} placeholder='Title' />
            <Textarea onChange={setText} rows={5} required={true} placeholder='Content' />
            <Button type='submit' label='Save Me' />
          </form>
        </div>
      }
    </div>
  )
}
