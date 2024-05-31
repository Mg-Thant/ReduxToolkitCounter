import Counter from "./components/Counter"
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <Counter />
    </div>
  )
}

export default App;
