export const defaultCartState = {
  items: [],
  totalAmount: 0,
};
export const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //check if it is the list
    if (state.items.some((item) => item._id === action.item._id)) {
      return {
        items: state.items.map((item) => {
          if (item._id === action.item._id) {
            return {
              ...item,
              amount: item.amount + action.item.amount,
            };
          } else {
            return item;
          }
        }),
        totalAmount: updatedTotalAmount,
      };
    } else {
      return {
        items: [...state.items, action.item],
        totalAmount: updatedTotalAmount,
      };
    }
  }
  if (action.type === "REMOVE") {
    const existedItemIndex = state.items.findIndex(
      (item) => item._id === action.id
    );

    const existedItem = state.items[existedItemIndex];
    let updatedTotalAmount = state.totalAmount - existedItem.price;
    let updatedItems;

    if (existedItem.amount > 1) {
      const updatedItem = { ...existedItem, amount: existedItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existedItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => item._id !== action.id);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "RESET") {
    return defaultCartState;
  }

  return defaultCartState;
};
