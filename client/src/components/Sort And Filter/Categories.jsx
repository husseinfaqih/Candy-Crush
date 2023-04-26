import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import PropTypes from "prop-types";

const Categories = ({ displayedCategory, setDisplayedCategory }) => {
  const [allCategories, setAllCategories] = useState(null);
  const [active, setActive] = useState("");

  const { performFetch, cancelFetch } = useFetch("/category", (response) => {
    setAllCategories(response.result);
  });

  useEffect(() => {
    performFetch();
    return cancelFetch;
  }, []);

  const clickCategory = (event) => {
    if (displayedCategory && displayedCategory !== event.target.textContent) {
      setDisplayedCategory(event.target.textContent);
      setActive(event.target.textContent);
      return;
    }
    if (displayedCategory) {
      setDisplayedCategory(null);
      setActive("");
    } else {
      setDisplayedCategory(event.target.textContent);
      setActive(event.target.textContent);
    }
  };
  return (
    <>
      {allCategories &&
        allCategories.map((c) => (
          <button
            key={c._id}
            style={{ margin: "5px", cursor: "pointer" }}
            onClick={clickCategory}
            className={active === c.categoryName ? "active" : ""}
          >
            {c.categoryName}
          </button>
        ))}
    </>
  );
};

Categories.propTypes = {
  displayedCategory: PropTypes.string,
  setDisplayedCategory: PropTypes.func,
};

export default Categories;
