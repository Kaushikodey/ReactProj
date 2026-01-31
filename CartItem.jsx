import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 && <p>Your cart is empty.</p>}

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            display: "flex",
            gap: "15px",
            alignItems: "center"
          }}
        >
          <img
            src="https://via.placeholder.com/100"
            alt={item.name}
            width="100"
            height="100"
          />

          <div>
            <h4>{item.name}</h4>
            <p>Price: ₹{item.price}</p>
            <p>Total: ₹{item.price * item.quantity}</p>

            <div>
              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity - 1
                    })
                  )
                }
                disabled={item.quantity <= 1}
              >
                -
              </button>

              <span style={{ margin: "0 10px" }}>
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity + 1
                    })
                  )
                }
              >
                +
              </button>
            </div>

            <button
              style={{ marginTop: "5px" }}
              onClick={() => dispatch(removeItem(item.id))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <h3>Total Cart Amount: ₹{totalAmount}</h3>

      <button onClick={() => navigate("/plants")}>
        Continue Shopping
      </button>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>
    </div>
  );
};

export default CartItem;
