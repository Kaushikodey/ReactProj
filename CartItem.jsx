<button onClick={() => dispatch(decrement(item))}>-</button>
<span>{item.quantity}</span>
<button onClick={() => dispatch(increment(item))}>+</button>

const total = items.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

<button onClick={() => alert("Coming Soon")}>Checkout</button>
