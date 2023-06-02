import { useState } from "react";
import Login from "./Login";
import SingUp from "./SingUp";

function App() {
  const [showSingUp, setShowSingUp] = useState(false);
  const handleSingUp = () => {
    setShowSingUp(true);
    setShowLogIn(false);
  };
  const [showLogIn, setShowLogIn] = useState(false);
  const handleLogIn = () => {
    setShowLogIn(true);
    setShowSingUp(false);
  };

  return (
    <div>
      <button onClick={handleSingUp}>sing up</button>
      <button onClick={handleLogIn}>Log In</button>
      {showSingUp && <SingUp />}
      {showLogIn && <Login />}
    </div>
  );
}

export default App;
