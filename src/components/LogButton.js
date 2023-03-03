import React, { useState } from "react";
import LogModal from "./LogModal";

const Log = () => {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="log-component">
      <ul>
        <li
          id="sign-up-button"
          onClick={() => {
            console.log("sign-up");
            setSignIn(false);
            setSignUp(true);
          }}
        >
          S'inscrire
        </li>
        <li
          id="sign-in-button"
          onClick={() => {
            console.log("sign-in");
            setSignUp(false);
            setSignIn(true);
          }}
        >
          S'identifier
        </li>
      </ul>
      <LogModal
        signIn={signIn}
        setSignIn={setSignIn}
        signUp={signUp}
        setSignUp={setSignUp}
      />
    </div>
  );
};

export default Log;
