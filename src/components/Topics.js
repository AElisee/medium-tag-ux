import React from "react";

const Topics = () => {
  const topics = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit amet consectetur",
    "adipisicing",
    "obcaecati",
    "nisi fuga",
    "cupiditate culpa",
    "Facilis numquam voluptatum",
    "incidunt",
    "dolorem aut saepe",
    "tempore minima vero ",
  ];

  return (
    <div className="topics">
      <h4 className="t-head">Rubriques connexes </h4>
      <ul>
        {topics.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Topics;
