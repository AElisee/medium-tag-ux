import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BestWriters from "./components/BestWriters";
import Header from "./components/Header";
import LogButton from "./components/LogButton";
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
    const stickyPart = document.getElementById("stickyPart");
    const sticky = stickyPart.offsetTop;
    axios
      .get(
        // API
        `${process.env.REACT_APP_API}`
      )
      .then((res) => {
        setTotalsResults(res.data.totalResults);
        // setNews(res.data.articles);
        dispatch(getNews(res.data.articles));
        setIsLoading(false);
      })
      .catch((err) => console.log(err));

    function addPositionSticky() {
      if (window.pageYOffset >= sticky) {
        stickyPart.classList.add("sticky");
      } else {
        stickyPart.classList.remove("sticky");
      }
    }
    window.addEventListener("scroll", () => {
      addPositionSticky();
    });
  }, []);

  return (
    <div className="app">
      <LogButton />
      <NavBar />
      <div className="main-container">
        <div className="left-part">
          <Header />
          {islLoading ? (
            <p>L a o d i n g ...</p>
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
          <div id="stickyPart">
            <Topics />
            <BestWriters />
            <MiniFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
