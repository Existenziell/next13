'use client'

import { use, useState } from 'react'
import { useRouter } from 'next/navigation'
import PocketBase from 'pocketbase'
import InputText from './InputText'
import Textarea from './Textarea'
import { XMarkIcon } from "@heroicons/react/24/outline"

export default function EditNoteForm({ note }) {
  const [showEdit, setShowEdit] = useState(false)
  const [title, setTitle] = useState()
  const [text, setText] = useState()
  const router = useRouter()

  async function updateNote(id) {
    const db = new PocketBase('http://127.0.0.1:8090')
    const data = { title, text }
    await db.records.update('notes', id, data);
    router.refresh()
  }

  async function deleteNote(id) {
    const db = new PocketBase('http://127.0.0.1:8090')
    await db.records.delete('notes', id);
    router.refresh()
    router.push('/notes')
  }

  return (
    <>
      {showEdit ?
        <form onSubmit={() => updateNote(note.id)} className='flex flex-col gap-2 w-full'>
          <InputText onChange={setTitle} required={true} defaultValue={note.title} />
          <Textarea onChange={setText} rows={10} required={true} defaultValue={note.text} />
          <button type='submit' className='button'>Update</button>
        </form>
        :
        <div className='relative'>
          <h2 className='text-2xl mb-2'>{note.title}</h2>
          <p>{note.text}</p>
          <p>{note.id}</p>
          <button onClick={() => deleteNote(note.id)} className='absolute -top-4 -right-6 hover:text-red-600'>
            <XMarkIcon className='w-5' />
          </button>
        </div>
      }
      <button className='hover:underline text-sm mt-4' onClick={() => setShowEdit(current => !current)}>
        {showEdit ? `Close` : `Edit`}
      </button>
    </>
  )
}
