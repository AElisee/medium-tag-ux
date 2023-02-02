import React from "react";
import WriterPhoto from "./WriterPhoto";

const StorieWritter = ({ totalResults }) => {
  const formatNumber = () => {
    const myNumber = totalResults;
    // console.log(myNumber);

    if (myNumber > 999) {
      const myString = myNumber.toString();
      return myString.slice(0, 2) + "." + myString.at(2) + "K";
    } else return totalResults;
  };

  return (
    <div className="storie-writter">
      <ul>
        <li>
          <h3>{formatNumber()}</h3>
          <p>Histoires</p>
        </li>
        <li>
          <h3>5K</h3>
          <p>Ecrivains</p>
        </li>
      </ul>
      <WriterPhoto />
    </div>
  );
};

export default StorieWritter;
