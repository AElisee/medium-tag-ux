import React from "react";
import LogButton from "./LogButton";
import Profil from "./Profil";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left-part">
        <h3>News / News API</h3>
        <div id="search">
          <span>
            <img src="./icons/search.svg" alt="search-svg" />
          </span>
          <input type="text" placeholder="Média de recherche" />
        </div>
      </div>
      <div className="right-part">
        <div className="write">
          <span>
            <img src="./icons/edit.svg" alt="edit-svg" />
          </span>
          <p>Ecrivez</p>
        </div>
        <LogButton />
        <Profil />
      </div>
    </div>
  );
};

export default NavBar;
