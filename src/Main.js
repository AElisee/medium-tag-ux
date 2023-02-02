import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BestWriters from "./components/BestWriters";
import Header from "./components/Header";
import Log from "./components/Log";
import MiniFooter from "./components/MiniFooter";
import NavBar from "./components/NavBar";
import News from "./components/News";
import StorieWritter from "./components/StorieWritter";
import Topics from "./components/Topics";
import { getNews } from "./feature/new.slice";

const Main = () => {
  const news = useSelector((state) => state.news);
  // const [news, setNews] = useState();
  const [islLoading, setIsLoading] = useState(true);
  const [totalResults, setTotalsResults] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-01-02&sortBy=publishedAt&apiKey=fc14d55b96cd41efb5e9459c5b07488c"
      )
      .then((res) => {
        setTotalsResults(res.data.totalResults);
        // setNews(res.data.articles);
        dispatch(getNews(res.data.articles));
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
                <ul className="item-container">{news ? <News /> : ""}</ul>
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
