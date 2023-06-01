import express, { Application } from 'express'
import config from './config'
import cors from 'cors'
const app: Application = express()
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
})
export default app
