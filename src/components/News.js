import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";

const News = () => {
  const news = useSelector((state) => state.news);

  // defint des minutes aléatoires
  const minOfReading = () => {
    return Math.round(Math.random() + (Math.random() * 7 + 2));
  };

  // formater la date en Iso en une date simple a lire
  const dateFormater = (date) => {
    const publishedAt = date.split("T")[0];

    let diffTime = Math.abs(new Date() - new Date(publishedAt));
    let days = Math.floor(diffTime / (1000 * 3600 * 24));

    if (days === 0) {
      return "Aujourd'hui";
    } else if (days === 1) {
      return "il y a 1 jour";
    } else {
      return "il y a " + days + " jours";
    }
  };
  return news.map((item, index) => (
    <a
      key={index}
      className="item"
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="h-item">
        <span>
          <img src={item.urlToImage} alt="" />
        </span>
        <h4 id="author">{item.author ? item.author : "Auteur inconnu"}</h4>
        <p id="publish">publié {dateFormater(item.publishedAt)}</p>
      </div>
      <div className="article">
        <h2 id="title">{item.title ? item.title : ""}</h2>
        <p id="content">{item.content ? item.content : item.description}</p>
        <div className="img-container">
          <img
            src={
              item.urlToImage ? item.urlToImage : "./images/default-image.jpg"
            }
            alt={`img-${index}`}
            width={115}
            height={115}
          />
        </div>
      </div>
      <div className="f-item">
        <div>
          <p className="ux">Expérience utilisateur</p>
          <p>{minOfReading()} min de lecture</p>
        </div>
        <span>
          <img src="./icons/bookmark.svg" alt="bookmark-svg" />
        </span>
      </div>
    </a>
  ));
};

export default News;
