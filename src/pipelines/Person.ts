import { Schema, Model, model, connect, Document } from "mongoose"

interface IUser extends Document {
  name: string
  id: string
}
class Person {
  schema: Schema = new Schema(
    {
      name: { type: String },
      id: { type: String },
    },
    { collection: "hellos" }
  )
  User: Model<IUser> = model("User", this.schema)

  findData = async () => {
    // TODO Make to put url with param
    await connect("mongodb://root:example@localhost:27017", {
      dbName: "ttest",
    })
    // TODO export function to write data
    const doc: IUser = new this.User({
      name: "Helloa",
      id: "asdf",
    })
    // await doc.save()

    this.User.findOne({ name: "Helloaff" }).then((res) => {
      console.log(res)
    })
  }
}
// const a = new Person()
// a.run()

// export { run }
