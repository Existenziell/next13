'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { XMarkIcon } from '@heroicons/react/24/outline'
import InputText from './ui/InputText'
import Textarea from './ui/Textarea'
import Button from './ui/Button'

export default function EditNoteForm({ note }) {
  const [showEdit, setShowEdit] = useState(false)
  const [title, setTitle] = useState(note.title)
  const [text, setText] = useState(note.text)
  const router = useRouter()

  async function updateNote(e, id) {
    e.preventDefault()
    const data = JSON.stringify({ id, title, text })
    try {
      const res = await fetch('/api/updateNote', {
        method: "post",
        body: data,
        headers: { "Content-Type": "application/json" }
      })
      if (res.status === 200) {
        router.refresh()
        router.push('/notes')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  async function deleteNote(id) {
    try {
      const res = await fetch('/api/deleteNote', {
        method: "post",
        body: JSON.stringify(id),
        headers: { "Content-Type": "application/json" }
      })
      if (res.status === 200) {
        router.refresh()
        router.push('/notes')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      {showEdit ?
        <form onSubmit={(e) => updateNote(e, note.id)} className='flex flex-col gap-2 w-full'>
          <InputText onChange={setTitle} required={true} defaultValue={note.title} />
          <Textarea onChange={setText} rows={10} required={true} defaultValue={note.text} />
          <Button label='Save' disabled={!showEdit} />
        </form>
        :
        <div className='relative'>
          <h2 className='text-2xl mb-2'>{note.title}</h2>
          <p>{note.text}</p>
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
