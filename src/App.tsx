import create from "zustand";
import "./App.css";

const useStore = create((set) => ({
  count: 0,
}));

function App() {
  const { count } = useStore();
  return (
    <div className="App">
      <div className="App-header">
        <div className="Title"></div>
        <div className="Content"></div>
        <p className="Testing">Classname Works Fine</p>
        <p className="TestingContent">Hello</p>
        <p>{count}</p>
      </div>
    </div>
  );
}

export default App;
