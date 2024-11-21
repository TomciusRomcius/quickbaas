import { Auth } from "quickbaas-sdk";

function App() {
  Auth.initialize({ backendURL: "http://localhost:3000" });
  Auth.signInWithPassword("email@gmail.com", "password");
  return <h1>Example</h1>;
}

export default App;
