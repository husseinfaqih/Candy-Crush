import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import PropTypes from "prop-types";

const Categories = ({
  filterQuery,
  setFilterQuery,
  filterQueryChanged,
  setFilterQueryChanged,
}) => {
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
    if (filterQuery.categories === event.target.innerText) {
      setFilterQuery({ ...filterQuery, categories: "all" });
      setActive("");
    } else if (filterQuery.categories === "all") {
      setFilterQuery({ ...filterQuery, categories: event.target.innerText });
      setActive(event.target.innerText);
    } else {
      setFilterQuery({ ...filterQuery, categories: event.target.innerText });
      setActive(event.target.innerText);
    }
    setFilterQueryChanged(true);
  };

  useEffect(() => {
    if (filterQuery.categories === "all") setActive("");
  }, [filterQueryChanged]);

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
  filterQuery: PropTypes.object,
  setFilterQuery: PropTypes.func,
  filterQueryChanged: PropTypes.bool.isRequired,
  setFilterQueryChanged: PropTypes.func.isRequired,
};

export default Categories;
