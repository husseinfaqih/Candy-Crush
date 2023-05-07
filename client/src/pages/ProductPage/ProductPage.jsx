import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import ProductOverview from "../../components/ProductDisplay/ProductOverview";
import Footer from "../../components/Footer/Footer";
import Rating from "../../components/ProductDisplay/Rating";
import Favorite from "../../components/ProductDisplay/Favorite";
import Basket from "../../components/ProductDisplay/Basket";
import "./ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { performFetch, cancelFetch } = useFetch(
    `/product/find/${id}`,
    (response) => {
      setProduct(response.result);
    }
  );
  useEffect(() => {
    performFetch();
    return cancelFetch;
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(product);
  }, [product]);
  return (
    <>
      <Header />
      <div
        className="product-display-component product-center"
        key={product._id}
      >
        <ProductOverview product={product} />
        <Rating productRating={product.rate} />
        <Favorite />
        <Basket product={product} />
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
