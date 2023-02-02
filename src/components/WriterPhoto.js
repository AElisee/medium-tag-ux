import React from "react";
import { useSelector } from "react-redux";

const WriterPhoto = () => {
  const news = useSelector((state) => state.news);
  return (
    <div className="writer-photo">
      <ul>
        {news &&
          news.slice(0, 9).map((el, index) => (
            <li key={index}>
              <img src={el.urlToImage} alt="" />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WriterPhoto;
