import express from "express"
import mongoose from "mongoose"
const app = express()
const port = 3001

class Person {}

mongoose.connect(
  "mongodb://localhost:27017",
  {
    user: "root",
    pass: "example",
    dbName: "ttest",
  },
  (error) => {
    if (error) {
      console.log("몽고디비 연결 에러", error)
    } else {
      console.log("몽고디비 연결 성공")
    }
  }
)



mongoose.connection.on("connect", (res) => {
  console.log(res)
})
mongoose.connection.on("error", (error) => {
  console.error(error)
})
mongoose.connection.on("disconnected", () => {
  console.error("Mongodb Disconnected")
})

app.get("/", (req, res) => {
  var a = { asdf: 12 }
  res.send(a)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://192.168.0.6:${port}`)
})
