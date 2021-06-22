import UseLocalStorage from "../hooks/useLocalStorage";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../contexts/ContactsProvider";

function App() {
  const [id, setId] = UseLocalStorage('id')

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  )
  return (
    id ? dashboard : <Login onIdSubmit={setId} />
  );
}

export default App;
