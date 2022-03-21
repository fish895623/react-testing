import path from "path"

import express from "express"
import mongoose, { Schema } from "mongoose"
import cors from "cors"
import log4js, { getLogger } from "log4js"

log4js.configure(path.join(__dirname, "log4js.json"))

const logger = getLogger("logTest")

const app = express()
const port = 3001

const UserSchema = new Schema(
  {
    name: { type: String },
    id: { type: String },
  },
  { collection: "hellos" }
)
const model = mongoose.model("mm", UserSchema)
const GetData = model.find().then((res) => {
  return Promise.resolve(res)
})

const root = app.get("/", (req, res) => {
  logger.info("/ get accessed")

  GetData.then((res2) => {
    res.header("Access-Control-Allow-Origin", "*")

    logger.info("json response")
    res.json(res2)
  })
})
const settings = app.use(cors())

root
settings
mongoose.connect(
  "mongodb://localhost:27017",
  {
    user: "root",
    pass: "example",
    dbName: "ttest",
  },
  (error) => {
    if (error) {
      logger.error("Error on connect database", error)
    } else {
      logger.info("Success on connect database")
    }
  }
)
mongoose.connection.on("connect", (res) => {
  logger.info(res)
})
mongoose.connection.on("error", (error) => {
  logger.error(error)
})
mongoose.connection.on("disconnected", () => {
  logger.error("Mongodb Disconnected")
})

app.listen(port, () => {
  logger.info(`Example app listening on port http://192.168.0.6:${port}`)
})
