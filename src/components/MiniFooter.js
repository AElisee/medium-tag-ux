import React from "react";

const MiniFooter = () => {
  const navigation = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipisicing",
    "elit",
  ];

  return (
    <div className="mini-footer">
      <p>Visiter les archives</p>
      <ul>
        {navigation.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default MiniFooter;
