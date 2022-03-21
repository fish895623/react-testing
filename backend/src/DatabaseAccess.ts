import path from 'path'
import mongoose, { Schema } from 'mongoose'
import log4js, { getLogger } from 'log4js'

log4js.configure(path.join(__dirname, 'log4js.json'))

const logger = getLogger('logTest')

mongoose.connect(
  'mongodb://localhost:27017',
  {
    user: 'root',
    pass: 'example',
    dbName: 'ttest',
  },
  (error) => {
    if (error) {
      logger.error('Error on connect database', error)
    } else {
      logger.info('Success on connect database')
    }
  }
)
mongoose.connection.on('connect', (res) => {
  logger.info(res)
})
mongoose.connection.on('error', (error) => {
  logger.error(error)
})
mongoose.connection.on('disconnected', () => {
  logger.error('Mongodb Disconnected')
})

const UserSchema = new Schema(
  {
    name: { type: String },
    id: { type: String },
  },
  { collection: 'hellos' }
)
const model = mongoose.model('mm', UserSchema)
const GetData = model.find().then((res) => {
  return Promise.resolve(res)
})

export { GetData }
