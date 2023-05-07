import React, { useEffect, useState } from "react";

import Rating from "../../components/ProductDisplay/Rating";
import Favorite from "../../components/ProductDisplay/Favorite";
import Basket from "../../components/ProductDisplay/Basket";
import { CartContext } from "../../store/Context";
import { useContext } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import ProductOverview from "../../components/ProductDisplay/ProductOverview";

import Summary from "../../components/Summary/Summary";
import { Link } from "react-router-dom";

export default function Cart() {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);
  const [isEmptyCart, setIsEmptyCart] = useState(true);

  useEffect(() => {
    if (totalAmount > 0) {
      setIsEmptyCart(false);
    }
  }, [totalAmount]);

  return (
    <>
      <Header />
      <div>
        <div className="product-display-grid">
          {items &&
            items.map((product) => {
              return (
                <div className="product-display-component" key={product._id}>
                  <ProductOverview product={product} />
                  <Rating productRating={product.rate} />
                  <Favorite />
                  <Basket product={product} />
                  <span>amount : {product.amount}</span>
                  <button onClick={() => addItem({ ...product, amount: 1 })}>
                    + add
                  </button>
                  <button onClick={() => removeItem(product._id)}>
                    - deduct
                  </button>
                </div>
              );
            })}
        </div>
        <Summary />
      </div>
      {!isEmptyCart && (
        <Link to="/payment">For payment and entering personal data</Link>
      )}
      <Footer />
    </>
  );
}
