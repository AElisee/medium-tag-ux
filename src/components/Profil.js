import React, { useEffect, useState } from "react";
import LogButton from "./LogButton";

const Profil = () => {
  const [showProfil, setShowProfil] = useState(false);

  // si le modal de profil est isVisible, l'enlever pendant le scroll
  window.document.addEventListener("scroll", () => {
    setShowProfil(false);
  });

  // toogleProfil
  const toggleProfil = () => {
    setShowProfil((prevState) => !prevState);
    console.log("click sur icon profil");
  };

  useEffect(() => {
    const handleClickOutsideProfil = (e) => {
      const profil = document.querySelector(".cheron-icon");
      if (profil && !profil.contains(e.target) && showProfil) {
        setShowProfil(false);
      }
    };
    document.addEventListener("click", handleClickOutsideProfil);

    return () => {
      document.removeEventListener("click", handleClickOutsideProfil);
    };
  }, [showProfil]);
  // ---

  return (
    <div className="profil">
      <div className="user-icon" onClick={toggleProfil}>
        <img src="./icons/user-circle.svg" alt="user-circle-svg" />
      </div>
      <div className="cheron-icon" onClick={() => setShowProfil(!showProfil)}>
        <img src="./icons/chevron-down.svg" alt="user-circle-svg" />
      </div>

      <div className={`profil-modal ${showProfil === true ? "show" : "hide"}`}>
        <p id="start" className="pointer">
          Démarrez avec News
        </p>
        <LogButton />
        <div>
          <p id="p-star">
            <span>Devenir membre</span> <span id="star">&#9733;</span>
          </p>
          <p>
            postulez au programme <br /> parteneaire
          </p>
          <p>Offrir une adhésion</p>
        </div>
      </div>
    </div>
  );
};

export default Profil;
