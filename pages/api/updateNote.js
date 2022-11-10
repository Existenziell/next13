import clientPromise from '../../utils/mongodb'
import { ObjectId } from 'mongodb'

async function updateNote(req, res) {
  try {
    const client = await clientPromise
    const db = client.db(process.env.NEXT_MONGODB_DB)
    const { id, title, text } = req.body
    if (!id || !title || !text) {
      res.status(404).send(false)
      return
    }
    try {
      /* eslint-disable object-shorthand */
      await db.collection("notes").updateOne({ _id: ObjectId(id) }, { $set: { title: title, text: text } })
      /* eslint-enable object-shorthand */
    } catch (e) {
      console.log(e)
    }
    res.status(200).send(true)
  } catch (error) {
    res.status(404).send(false)
  }
}

export default updateNote
