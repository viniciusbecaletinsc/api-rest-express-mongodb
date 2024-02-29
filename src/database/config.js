import 'dotenv/config'
import mongoose from 'mongoose'

export async function connection() {
  mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.eqk9wao.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`)

  return mongoose.connection
}

