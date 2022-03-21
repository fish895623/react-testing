import path from 'path'
import express from 'express'
import cors from 'cors'
import log4js, { getLogger } from 'log4js'

import { GetData } from './DatabaseAccess'

log4js.configure(path.join(__dirname, 'log4js.json'))
const logger = getLogger('logTest')
const app = express()
const port = 3001

const root = app.get('/', (req, res) => {
  logger.info('/ get accessed')

  GetData.then((res2) => {
    res.header('Access-Control-Allow-Origin', '*')

    logger.info('json response')
    res.json(res2)
  })
})
const settings = app.use(cors())
const start = app.listen(port, () => {
  logger.info(`Example app listening on port http://192.168.0.6:${port}`)
})

const example = () => {
  root
  settings
  start
}
export { example }
