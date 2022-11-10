import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/Header'
import clientPromise from "../../utils/mongodb"
import CreateNote from './CreateNote'

async function fetchNotes() {
  const client = await clientPromise
  const db = client.db(process.env.NEXT_MONGODB_DB)
  const notes = await db
    .collection("notes")
    .find({})
    // .sort({ 'created_at' })
    .toArray()
  return notes
}

export default async function Notes() {
  const notes = await fetchNotes()
  return (
    <div className=''>
      <Header link='https://www.mongodb.com/' text='MongoDB' />
      <div className='flex flex-wrap gap-8'>
        {notes?.map(note => (
          <Link key={note._id.toString()} href={`/notes/${note._id}`}>
            <div className='note hover:shadow-sm '>
              <h2 className='text-2xl mb-2'>{note.title}</h2>
              <p>{note.text}</p>
            </div>
          </Link>
        ))}
      </div>
      <CreateNote />
    </div>
  )
}
