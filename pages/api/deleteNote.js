import clientPromise from '../../utils/mongodb'
import { ObjectId } from 'mongodb'

async function deleteNote(req, res) {
  try {
    const client = await clientPromise
    const db = client.db(process.env.NEXT_MONGODB_DB)
    const id = req.body
    if (!id) {
      res.status(404).send(false)
      return
    }
    try {
      await db.collection("notes").deleteOne({ _id: ObjectId(id) })
    } catch (e) {
      console.log(e)
    }
    res.status(200).send(true)
  } catch (error) {
    res.status(404).send(false)
  }
}

export default deleteNote
