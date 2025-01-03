import { Auth } from "quickbaas-sdk";
import "./index.css";
import { useRef } from "react";

function App() {
  Auth.initialize({ backendURL: "http://localhost:3000" });

  const signUpEmailRef = useRef<HTMLInputElement>(null);
  const signUpPasswordRef = useRef<HTMLInputElement>(null);

  const signInEmailRef = useRef<HTMLInputElement>(null);
  const signInPasswordRef = useRef<HTMLInputElement>(null);

  const onSignUp = () => {
    Auth.signUpWithPassword(
      signUpEmailRef.current!.value,
      signUpPasswordRef.current!.value
    )
      .then(() => alert("success"))
      .catch(() => alert("failure"));
  };

  const onSignIn = () => {
    Auth.signInWithPassword(
      signInEmailRef.current!.value,
      signInPasswordRef.current!.value
    )
      .then(() => alert("success"))
      .catch(() => alert("failure"));
  };

  return (
    <div className="flex-row">
      <div className="flex-col">
        <h1>Sign up!</h1>
        <small>Email</small>
        <input ref={signUpEmailRef} />
        <small>password</small>
        <input ref={signUpPasswordRef} />
        <button onClick={onSignUp}>Sign up!</button>
      </div>
      <div className="flex-col">
        <h1>Sign in!</h1>
        <small>Email</small>
        <input ref={signInEmailRef} />
        <small>password</small>
        <input ref={signInPasswordRef} />
        <button onClick={onSignIn}>Sign in!</button>
      </div>
    </div>
  );
}

export default App;
