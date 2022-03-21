import create from "zustand"
import "./App.css"
import { useEffect } from "react"
import { M, Person } from "./interfaces/Person"
import axios from "axios"

const useStore = create((set: any) => ({
  count: 0,
  hello: [],
  setHello: (data: any) => {
    set({ hello: data })
  },
  mongodb: [],
  setMongodb: (data: any) => {
    set({ mongodb: data })
  },
}))

async function fetching(url: string) {
  const response = await axios.get(url)
  return Promise.resolve(response.data)
}

function App() {
  const { hello, setHello, setMongodb } = useStore()
  const mongodb = useStore().mongodb

  useEffect(() => {
    fetching("https://gorest.co.in/public/v2/users").then((res) => {
      setHello(res.reverse())
    })
    fetching("http://192.168.0.6:3001/").then((res) => {
      setMongodb(res)
    })
  }, [setHello, setMongodb])

  return (
    <div className="App">
      <div className="App-header">
        <table className="content">
          <tbody>
            {hello.map((home: Person) => (
              <tr key={home.id}>
                <th key={home.id}>{home.id}</th>
                <td key={home.email}>{home.email}</td>
                <td key={home.gender}>{home.gender}</td>
                <td key={home.status}>{home.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <tbody>
            {mongodb.map((a: M) => (
              <tr key={a.id}>
                <td key={a.id}>{a.id}</td>
                <td key={a.name}>{a.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// function AA(props: IAA) {
//   return <>hellod? {props.color}</>
// }

export default App
