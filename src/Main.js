import axios from "axios";
import React, { useEffect, useState } from "react";
import BestWriters from "./components/BestWriters";
import Header from "./components/Header";
import MiniFooter from "./components/MiniFooter";
import NavBar from "./components/NavBar";
import News from "./components/News";
import StorieWritter from "./components/StorieWritter";
import Topics from "./components/Topics";

const Main = () => {
  const [news, setNews] = useState([]);
  const [islLoading, setIsLoading] = useState(true);
  const [totalResults, setTotalsResults] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-12-18&sortBy=publishedAt&apiKey=fc14d55b96cd41efb5e9459c5b07488c"
      )
      .then((res) => {
        setTotalsResults(res.data.totalResults);
        setNews(res.data.articles);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <NavBar />
      <div className="main-container">
        <div className="left-part">
          <Header />
          {islLoading ? (
            <p>L o o d i n g ...</p>
          ) : (
            <div className="new-container">
              <div className="news">
                <p id="lastest">plus récents</p>
                <ul className="item-container">
                  {news ? <News news={news} /> : ""}
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="right-part">
          <StorieWritter totalResults={totalResults} />
          <Topics />
          <BestWriters />
          <MiniFooter />
        </div>
      </div>
    </div>
  );
};

export default Main;
