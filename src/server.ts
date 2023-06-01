import mongoose from 'mongoose'
import config from './config'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database Succefullly Connected')
  } catch (e) {
    console.log('there something wrong')
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main()
