import React, { useEffect, useState } from "react";
import Log from "./Log";

const Profil = () => {
  const [showProfil, setShowProfil] = useState(false);

  // si le modal de profil est isVisible, l'enlever pendant le scroll
  window.document.addEventListener("scroll", () => {
    setShowProfil(false);
  });

  return (
    <div className="profil">
      <div className="user-icon" onClick={() => setShowProfil(!showProfil)}>
        <img src="./icons/user-circle.svg" alt="user-circle-svg" />
      </div>
      <div className="cheron-icon" onClick={() => setShowProfil(!showProfil)}>
        <img src="./icons/chevron-down.svg" alt="user-circle-svg" />
      </div>

      <div className={`profil-modal ${showProfil === true ? "show" : "hide"}`}>
        <p id="start" className="pointer">
          Démarrez avec News
        </p>
        <Log />
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
