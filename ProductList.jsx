const plants = {
  Indoor: [...6 plants],
  Outdoor: [...6 plants],
  Succulents: [...6 plants]
};

<button disabled={inCart} onClick={addHandler}>
  {inCart ? "Added" : "Add to Cart"}
</button>


const totalItems = useSelector(
  state => state.cart.items.reduce((a, b) => a + b.quantity, 0)
);
