import React from "react";
import Input from "./Input";

export default function Login(props) {
  return (
    <div className="container">
      {props.isSignedUp ? <h1>Log In</h1> : <h1>Sign Up</h1>}

      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {!props.isSignedUp && (
          <Input type="password" placeholder="Confirm Password" />
        )}

        <button type="submit">{props.isSignedUp ? "Log In" : "Sign Up"}</button>
      </form>
    </div>
  );
}
