import PocketBase from 'pocketbase'
import BackBtn from '../../../components/backButton';
import EditNoteForm from '../../../components/EditNoteForm';

async function getNote(noteId) {
  const db = new PocketBase('http://127.0.0.1:8090')
  const result = await db.records.getOne('notes', noteId);
  const note = { id: result.id, title: result.title, text: result.text }
  return note
}

export default async function Note({ params }) {
  const note = await getNote(params.id)

  return (
    <div className='flex items-center justify-center relative'>
      <div className='absolute top-0 left-0'>
        <BackBtn href='/notes' />
      </div>
      <div className='note'>
        <EditNoteForm note={note} />
      </div>
    </div>
  )
}
