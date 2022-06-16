import React, { useState, useEffect } from "react";
import { auth } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "@firebase/auth";

const App = () => {
  const [createUsername, setCreateUsername] = useState("");
  const [createPassword, setCreatePassword] = useState("");

  const [loginUsername, setloginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
    });
  }, [user]);

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        createUsername,
        createPassword
      );
      console.log(user);
      setCreatePassword("");
      setCreateUsername("");
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginUsername,
        loginPassword
      );
      console.log(user);
      setloginUsername("");
      setLoginPassword("");
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div className="form">
        <h3>create User</h3>
        <form>
          <div>
            <input
              onChange={(e) => setCreateUsername(e.target.value)}
              placeholder="username"
              value={createUsername}
            />
            <input
              onChange={(e) => setCreatePassword(e.target.value)}
              placeholder="password"
              value={createPassword}
            />
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
            <input
              value={loginUsername}
              onChange={(e) => setloginUsername(e.target.value)}
              placeholder="username"
            />
            <input
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="password"
            />
            <div>
              <button onClick={login}>Login</button>
            </div>
          </div>
        </form>
      </div>
      <div className="form"> User Logged in: {user ? user.email : null}</div>
      <div className="form">
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default App;
