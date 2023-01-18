import React from "react";
import { bestWriters } from "./../data/bestWriters";

const BestWriters = () => {
  console.log(bestWriters);
  return (
    <div className="best-writer">
      <h3 className="bw-head">Meilleurs écrivains</h3>
      <ul className="writer-container">
        {bestWriters.map((writer) => (
          <li className="writer">
            <div className="img-container">
              <img src="" alt="" />
            </div>
            <div className="name-desc">
              <h3 className="writer-name">{writer.name}</h3>
              <p className="description">{writer.description}</p>
            </div>
            <div className="btn-container">
              <p className="follow">Suivre</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="show-more">Voir plus</p>
    </div>
  );
};

export default BestWriters;
