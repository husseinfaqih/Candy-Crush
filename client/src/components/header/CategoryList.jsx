import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import arrow from "../../assets/arrow.svg";
import { Link } from "react-router-dom";

function CategoryList() {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const { performFetch, cancelFetch } = useFetch("/product", (response) => {
    setProducts(response.result);
  });

  const clickArrow = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    performFetch();
    return cancelFetch;
  }, []);

  useEffect(() => {
    products &&
      setCategories([...new Set(products.map((item) => item.category))]);
  }, [products]);

  return (
    <menu className="header-category-list-block">
      <p className="header-category-title">Categories</p>
      <img
        onClick={clickArrow}
        className="header-category-arrow"
        src={arrow}
        alt="arrow"
      />
      {isVisible && (
        <ul
          name="category"
          id="category-select"
          className="header-category-list"
        >
          {categories &&
            categories.map((category) => {
              return (
                <li
                  className="header-category-list-item"
                  key={category}
                  value={category}
                >
                  <Link to="/"> {category}</Link>
                </li>
              );
            })}
        </ul>
      )}
    </menu>
  );
}

export default CategoryList;
