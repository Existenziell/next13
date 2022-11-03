import Link from 'next/link'
import PocketBase from 'pocketbase'

async function getNotes() {
  const db = new PocketBase('http://127.0.0.1:8090')
  const notes = await db.records.getList('notes')
  return notes?.items
}

export default async function Notes() {
  const notes = await getNotes()
  return (
    <div className='flex flex-wrap gap-8'>
      {notes?.map(note => (
        <Link key={note.title} href={`/notes/${note.id}`}>
          <div className='note hover:shadow-sm '>
            <h2 className='text-2xl mb-2'>{note.title}</h2>
            <p>{note.text}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
