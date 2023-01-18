import React from "react";

const News = ({ news }) => {
  console.log(news[99]);
  return (
    <>
      {news.map((item, index) => (
        <li key={index} className="item">
          {item.author ? item.author : "Auteur inconnu"}
          <div className="article">
            <h2 id="title">{item.title ? item.title : ""}</h2>
            <p id="description">
              {item.content ? item.content : item.description}
            </p>
            <div className="img-container">
              <img
                src={
                  item.urlToImage
                    ? item.urlToImage
                    : "./images/default-image.jpg"
                }
                alt={`img-${index}`}
                width={115}
                height={115}
              />
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default News;
