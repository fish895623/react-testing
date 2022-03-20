import { Schema, Model, model, connect, Document } from "mongoose"

interface IUser extends Document {
  name: string
  id: string
}

const schema: Schema = new Schema(
  {
    name: { type: String },
    id: { type: String },
  },
  { collection: "hellos" }
)

const User: Model<IUser> = model("User", schema)

run().catch((err) => console.log(err))

async function run() {
  await connect("mongodb://root:example@localhost:27017", {
    dbName: "ttest",
  })
  const doc: IUser = new User({
    name: "Helloa",
    id: "asdf",
  })
  // await doc.save()
  User.findOne({ name: "Helloaff" }).then((res) => {
    console.log(res)
  })
}

// export { run }
