import React from "react";
import Button from "./Button";

const ButtonsList = () => {
  const buttonCategory = [
    "All",
    "Trending",
    "Live",
    "Cricket",
    "Music",
    "Food",
    "News",
    "Nature",
  ];
  return (
    <div className="flex ml-12">
      {buttonCategory.map((btn, index) => {
        return <Button name={btn} key={index} />;
      })}
    </div>
  );
};

export default ButtonsList;
