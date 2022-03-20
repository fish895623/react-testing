import create from "zustand"
import "./App.css"
import { useEffect } from "react"
import { Person } from "./interfaces/Person"

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
      setHello(res)
    })
  }, [setHello])

  return (
    <div className="App">
      <div className="App-header">
        <div className="Title"></div>
        <div className="Content"></div>
        {hello.map((home: Person) => (
          <div>
            {home.id}, {home.email}, {home.gender}, {home.status}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
