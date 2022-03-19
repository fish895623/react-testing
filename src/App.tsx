import create from "zustand";
import "./App.css";
import { useEffect } from "react";
import { Person } from "./interfaces/Person";

const useStore = create((set: any) => ({
  count: 0,
  hello: [],
  helloa: (data: any) => {
    set({ hello: data });
  },
}));

async function T() {
  const response = await fetch("https://gorest.co.in/public/v2/users");
  const finish = await response.json();
  return finish;
}

function App() {
  const { count, hello, helloa } = useStore();
  useEffect(() => {
    T().then((res) => {
      helloa(res);
    });
  }, [helloa]);

  return (
    <div className="App">
      <div className="App-header">
        <div className="Title"></div>
        <div className="Content"></div>
        <p className="Testing">Classname Works Fine</p>
        <p className="TestingContent">Hello</p>
        <p>{count}</p>
        {hello.map((home: Person) => (
          <div>
            {home.id}, {home.email}, {home.gender}, {home.status}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
