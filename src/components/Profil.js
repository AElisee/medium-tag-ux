import React, { useState } from "react";
import Log from "./Log";

const Profil = () => {
  const [showProfil, setShowProfil] = useState(false);

  // si le modal de profil est isVisible, l'enlever pendant le scroll
  window.document.addEventListener("scroll", () => {
    setShowProfil(true);
  });
  return (
    <div className="profil">
      <div className="user-icon" onClick={() => setShowProfil(!showProfil)}>
        <img src="./icons/user-circle.svg" alt="user-circle-svg" />
      </div>
      <div className="cheron-icon" onClick={() => setShowProfil(!showProfil)}>
        <img src="./icons/chevron-down.svg" alt="user-circle-svg" />
      </div>

      <div className={`profil-modal ${showProfil ? "show" : "hide"}`}>
        <p>Démarrez sur App</p>
        <Log />
        <div>
          <p>
            <span>Devenir membre</span> <span>etoile</span>
          </p>
          <p>postulez au programme parteneaire</p>
          <p>Offrir une adhésion</p>
        </div>
      </div>
    </div>
  );
};

export default Profil;
