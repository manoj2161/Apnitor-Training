import { useReducer } from "react";
import "./App.css";
const initialState = {
  items: [], //it holds items id , name, price, quantity
  totalPrice: 0,
  totalItems: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      let updatedItems;
      if (existingItemIndex >= 0) {
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
      } else {
        updatedItems = [
          ...state.items,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }
      return {
        ...state,
        items: updatedItems,
        totalPrice: updatedItems.reduce(
          (acc, curr) => acc + curr.price * curr.quantity,
          0,
        ),
        totalItems: updatedItems.reduce((acc, curr) => acc + curr.quantity, 0),
      };
    }
    case "REMOVE_ITEM": {
      let filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id,
      );
      return {
        ...state,
        items: filteredItems,
        totalPrice: filteredItems.reduce(
          (acc, curr) => acc + curr.price * curr.quantity,
          0,
        ),
        totalItems: filteredItems.reduce((acc, curr) => acc + curr.quantity, 0),
      };
    }
    case "UPDATE_QUANTITY": {
      if (action.payload.quantity === 0) {
        return reducer(
          (state,
          {
            type: "REMOVE_ITEM",
            payload: { id: action.payload.id },
          }),
        );
      }
      const updatedQuantityItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item,
      );
      return {
        ...state,
        items: updatedQuantityItems,
        totalPrice: updatedQuantityItems.reduce(
          (acc, curr) => acc + curr.price * curr.quantity,
          0,
        ),
        totalItems: updatedQuantityItems.reduce(
          (acc, curr) => acc + curr.quantity,
          0,
        ),
      };
    }
    case "CLEAR_CART": {
      return initialState;
    }
    default:
      return state;
  }
};
export const ShoppingCartWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const products = [
    {
      id: 1,
      name: "Milk",
      price: 33,
    },
    {
      id: 2,
      name: "Curd",
      price: 35,
    },
    {
      id: 3,
      name: "Biscuit",
      price: 20,
    },
  ];
  return (
    <>
      <div className="outerBox">
        <header>
          <h2>Proudcts</h2>
        </header>
        <div className="productBox">
          {products.map((product) => (
            <div key={product.id} className="product">
              <h2>{product.name}</h2>
              <h3>Price : ₹{product.price}</h3>
              <button
                className="addBtn"
                onClick={() => {
                  dispatch({
                    type: "ADD_ITEM",
                    payload: product,
                  });
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="cartShopping">
          <h2 className="shopping">Shopping Cart</h2>
          {state.items.length === 0 ? (
            <p className="empty">Your Cart is empty</p>
          ) : (
            <div>
              {state.items.map((item) => (
                <div className="itemsWrapper" key={item.id}>
                  <button
                    className="dec"
                    onClick={() => {
                      dispatch({
                        type: "UPDATE_QUANTITY",
                        payload: { id: item.id, quantity: item.quantity - 1 },
                      });
                    }}
                  >
                    -
                  </button>
                  <p className="itemDetails">
                    {item.name} - ₹{item.price} x {item.quantity}
                  </p>
                  <button
                    className="inc"
                    onClick={() => {
                      dispatch({
                        type: "UPDATE_QUANTITY",
                        payload: { id: item.id, quantity: item.quantity + 1 },
                      });
                    }}
                  >
                    +
                  </button>
                  <button
                    className="removeItem"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_ITEM",
                        payload: { id: item.id },
                      });
                    }}
                  >
                    Remove Item
                  </button>
                </div>
              ))}
            </div>
          )}
          <h3 className="items">Total Items : {state.totalItems}</h3>
          <h3 className="items">Total amount : ₹{state.totalPrice}</h3>

          {state.items.length > 0 && (
            <button className="clearCart"
              onClick={() => {
                dispatch({ type: "CLEAR_CART" });
              }}
            >
              Clear Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};
