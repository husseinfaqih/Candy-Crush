import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Category from "./Category";

export default function Categories() {
  const [categories, setCategories] = useState(null);
  const { performFetch } = useFetch("/category", (response) => {
    setCategories(response.result);
  });

  useEffect(() => {
    performFetch();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        backgroundColor: "#FEE588",
      }}
    >
      {categories &&
        categories.map((category) => (
          <Category key={category._id} {...category} />
        ))}
    </div>
  );
}
