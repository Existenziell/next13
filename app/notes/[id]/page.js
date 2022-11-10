import BackButton from '../../../components/BackButton'
import EditNoteForm from '../../../components/EditNoteForm'
import clientPromise from '../../../utils/mongodb'
import { ObjectId } from 'mongodb'

async function getNote(noteId) {
  const client = await clientPromise
  const db = client.db(process.env.NEXT_MONGODB_DB)
  const note = await db
    .collection("notes")
    .findOne({ _id: ObjectId(noteId) })
  note.id = note._id.toString()
  delete note._id
  return note
}
export default async function Mongo({ params }) {
  const note = await getNote(params.id)
  return (
    <div className='flex items-center justify-center relative'>
      <div className='absolute top-0 left-0'>
        <BackButton href='/notes' />
      </div>
      <div className='note'>
        <EditNoteForm note={note} />
      </div>
    </div>
  )
}
