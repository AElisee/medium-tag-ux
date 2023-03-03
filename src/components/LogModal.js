import React, { useEffect, useState } from "react";
import SignInOptions from "./SignInOptions";
import SignUpOptions from "./SignUpOptions";

const LogModal = ({ signIn, signUp, setSignIn, setSignUp }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleProfil = () => {
    setShowModal((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutsideModal = (e) => {
      const modal = document.querySelector(".log-modal");
      if (modal && !modal.contains(e.target) && showModal) {
        setShowModal(false);
      }
    };
    document.addEventListener("click", handleClickOutsideModal);

    return () => {
      document.removeEventListener("click", handleClickOutsideModal);
    };
  }, [showModal]);
  return (
    <div className={`log-modal ${signIn || signUp ? "visible" : ""}`}>
      {signUp && <SignUpOptions signUp={signUp} setSignUp={setSignUp} />}
      {signIn && <SignInOptions signIn={signIn} setSignIn={setSignIn} />}
    </div>
  );
};

export default LogModal;
