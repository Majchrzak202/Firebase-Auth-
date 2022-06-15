import React, { useState } from "react";
import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword } from "@firebase/auth";

const App = () => {
  const [createUsername, setCreateUsername] = useState("");
  const [createPassword, setCreatePassword] = useState("");

  const register = async (e) => {
    e.preventDefault()
    try {
      const user = await createUserWithEmailAndPassword (
        auth,
        createUsername,
        createPassword
      )
      console.log(user)

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="App">
      <div className="form">
        <h3>create User</h3>
        <form>
          <div>
            <input onChange={(e) => setCreateUsername(e.target.value)} placeholder="username" />
            <input onChange={(e) => setCreatePassword(e.target.value)} placeholder="password" />
            <div>
              <button onClick={register}>Create User</button>
            </div>
          </div>
        </form>
      </div>
      <div className="form">
        <h3>user Login</h3>
        <form>
          <div>
            <input placeholder="username" />
            <input placeholder="password" />
            <div>
              <button>Login</button>
            </div>
          </div>
        </form>
      </div>
      <div className="form"> User Logged in: username</div>
      <div className="form">
        <button>Logout</button>
      </div>
    </div>
  );
};

export default App;
