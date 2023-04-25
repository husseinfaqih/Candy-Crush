import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const Categories = () => {
  const [allCategories, setAllCategories] = useState(null);

  const { performFetch, cancelFetch } = useFetch("/category", (response) => {
    setAllCategories(response.result);
  });

  useEffect(() => {
    performFetch();
    return cancelFetch;
  }, []);

  return (
    <>
      {allCategories &&
        allCategories.map((c) => (
          <button key={c._id} style={{ margin: "5px" }}>
            {c.categoryName}
          </button>
        ))}
    </>
  );
};

export default Categories;
