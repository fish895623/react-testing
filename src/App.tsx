import * as React from 'react'
import create from 'zustand'
import './App.css'
import { useEffect } from 'react'
import { M, Person } from './interfaces/Person'
import axios from 'axios'

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

/**
 * @param url - Url to get data
 * @param type - GET, POST to get data
 * @returns - response data from axios
 */
async function fetching({ url }: { url: string }): Promise<any> {
  const response = await axios.get(url)
  return Promise.resolve(response.data)
}

function App() {
  const { hello, mongodb } = useStore()
  const { setHello, setMongodb } = useStore()

  useEffect(() => {
    fetching({ url: 'https://gorest.co.in/public/v2/users' }).then((res) => {
      setHello(res.reverse())
    })
    fetching({ url: 'http://192.168.0.6:3001/' }).then((res) => {
      console.log(res)
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

export default App
