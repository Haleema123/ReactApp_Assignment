import React, { useState } from "react";
import SignUp from "./components/signup";
import Login from "./components/login"; // Create this component
import Dashboard from "./components/dashboard";

const App = () => {
  const [user, setUser] = useState(null); // State to store the authenticated user
  const [isLogin, setIsLogin] = useState(false); // State to toggle between SignUp and Login

  return (
    <div>
      {user ? (
        <Dashboard user={user} setIsSignedUp={setUser} />
      ) : isLogin ? (
        <Login setUser={setUser} setIsLogin={setIsLogin} />
      ) : (
        <SignUp setUser={setUser} setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default App;
