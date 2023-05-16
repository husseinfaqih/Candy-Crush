import React, { createContext, useReducer, useEffect } from "react";
import { cartReducer, defaultCartState } from "./Reducer";
import PropTypes from "prop-types";

export const CartContext = createContext({});

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
    (initialState) => {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : initialState;
    }
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState]);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const resetCartHandler = () => {
    dispatchCartAction({ type: "RESET" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    resetCart: resetCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.any,
};

export default CartProvider;
