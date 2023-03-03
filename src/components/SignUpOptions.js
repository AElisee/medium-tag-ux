import React from "react";

const SignUpOptions = ({ setSignUp }) => {
  return (
    <div className="sign-in-option">
      <p>signUp with</p>
      <span
        className="close"
        onClick={() => setSignUp((prevState) => !prevState)}
      >
        <img src="./icons/x.svg" alt="close-icon" />
      </span>
    </div>
  );
};

export default SignUpOptions;
