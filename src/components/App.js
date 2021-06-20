import UseLocalStorage from "../hooks/useLocalStorage";
import Login from "./Login";

function App() {
  const [id, setId] = UseLocalStorage()
  return (
    <>
      {id}
      <Login onIdSubmit={setId} />
    </>
  );
}

export default App;
