import axios from "axios";
import React, { useEffect, useState } from "react";
import BestWriters from "./components/BestWriters";
import Header from "./components/Header";
import Log from "./components/Log";
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
        "https://newsapi.org/v2/everything?q=tesla&from=2022-12-19&sortBy=publishedAt&apiKey=015c11e6ebf4450da33fd062ea3ca061"
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
      <Log />
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
