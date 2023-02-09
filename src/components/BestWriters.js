import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { bestWriters } from "./../data/bestWriters";

const BestWriters = () => {
  const news = useSelector((state) => state.news);

  let urlToImage = [];
  if (news) {
    for (let i = 0; i < 10; i++) {
      urlToImage.push(news[i].urlToImage);
    }
    // randomIamge = urlToImage[~~(Math.random() * urlToImage.length)];
    // console.log(randomIamge);
  }

  return (
    <div className="best-writer">
      <h3 className="bw-head">Meilleurs écrivains</h3>
      <ul className="writer-container">
        {bestWriters.map((writer, index) => (
          <li key={index} className="writer">
            <div className="img-container">
              <img src={writer.image} alt="" />
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
