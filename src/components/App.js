import UseLocalStorage from "../hooks/useLocalStorage";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const [id, setId] = UseLocalStorage('id')
  return (
    id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />
  );
}

export default App;
