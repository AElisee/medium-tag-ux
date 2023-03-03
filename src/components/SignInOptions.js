import React from "react";

const SignInOptions = ({ setSignIn }) => {
  return (
    <div className="sign-up-option">
      <p>signIn with</p>
      <span
        className="close"
        onClick={() => setSignIn((prevState) => !prevState)}
      >
        <img src="./icons/x.svg" alt="close-icon" />
      </span>
    </div>
  );
};

export default SignInOptions;
