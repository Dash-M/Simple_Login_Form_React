import React from "react";
import Login from "./Login";

var UserIsSignedUp = false;

function App() {
  return <Login isSignedUp={UserIsSignedUp} />;
}

export default App;
