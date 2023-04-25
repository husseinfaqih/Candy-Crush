import React from "react";

const Price = () => {
  const sortingOptions = [
    "IN STOCK",
    "ON SALE",
    "BEST SELLING",
    "RATE/ HIGH TO LOW",
    "RATE/ LOW TO HIGH",
    "SORT A TO Z",
    "SORT Z TO A",
    "PRICE/ HIGH TO LOW",
    "PRICE/ LOW TO HIGH",
  ];
  return (
    <div className="sorting-div">
      {sortingOptions.map((option) => {
        return (
          <button className="sorting-button" key={option}>
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Price;
