import create from "zustand"
import "./App.css"
import { useEffect } from "react"
import { Person } from "./interfaces/Person"
import { IAA } from "./interfaces/props"

const useStore = create((set: any) => ({
  count: 0,
  hello: [],
  setHello: (data: any) => {
    set({ hello: data })
  },
}))

async function fetching() {
  const response = await fetch("https://gorest.co.in/public/v2/users")
  const finish = await response.json()
  return finish
}

function App() {
  const { hello, setHello } = useStore()

  useEffect(() => {
    fetching().then((res) => {
      setHello(res.reverse())
    })
  }, [setHello])

  return (
    <div className="App">
      <div className="App-header">
        <table className="content">
          {hello.map((home: Person) => (
            <tr>
              <th className="id">{home.id}</th>
              <td className="email">{home.email}</td>
              <td className="gender">{home.gender}</td>
              <td className="status">{home.status}</td>
            </tr>
          ))}
          <AA color="hello"></AA>
        </table>
      </div>
    </div>
  )
}

function AA(props: IAA) {
  return <>hellod? {props.color}</>
}

export default App
