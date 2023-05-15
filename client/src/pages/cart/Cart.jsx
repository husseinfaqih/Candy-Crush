import React, { useEffect, useState } from "react";

import Rating from "../../components/ProductDisplay/Rating";
import Favorite from "../../components/ProductDisplay/Favorite";
import Basket from "../../components/ProductDisplay/Basket";
import { CartContext } from "../../store/Context";
import { useContext } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import ProductOverview from "../../components/ProductDisplay/ProductOverview";
import ProductTitleAndPrice from "../../components/ProductDisplay/ProductTitleAndPrice";
import Summary from "../../components/Summary/Summary";
import "./cart.css";

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
                  <div className="white-background">
                    <ProductTitleAndPrice product={product} />
                    <Rating productRating={product.rate} product={product} />
                    <div className="product-options">
                      <Favorite />
                      <Basket product={product} />
                    </div>
                  </div>
                  <div className="cart-options">
                    <span className="amount-items">
                      Amount : {product.amount}
                    </span>
                    <button onClick={() => addItem({ ...product, amount: 1 })}>
                      +
                    </button>
                    <button onClick={() => removeItem(product._id)}>-</button>
                  </div>
                </div>
              );
            })}
        </div>
        <Summary isEmptyCart={isEmptyCart} />
      </div>
      <Footer />
    </>
  );
}
