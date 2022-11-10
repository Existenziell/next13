import clientPromise from '../../utils/mongodb'

async function createNote(req, res) {
  try {
    const client = await clientPromise
    const db = client.db(process.env.NEXT_MONGODB_DB)
    const data = req.body
    if (!data) {
      res.status(404).send(false)
      return
    }
    try {
      await db.collection("notes").insertOne({ ...data })
    } catch (e) {
      console.log(e)
    }
    res.status(200).send(true)
  } catch (error) {
    res.status(404).send(false)
  }
}

export default createNote
