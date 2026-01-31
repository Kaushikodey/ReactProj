import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const plants = {
    Indoor: [
      { id: 1, name: "Snake Plant", price: 300 },
      { id: 2, name: "Peace Lily", price: 450 },
      { id: 3, name: "Spider Plant", price: 250 },
      { id: 4, name: "Aloe Vera", price: 200 },
      { id: 5, name: "Money Plant", price: 150 },
      { id: 6, name: "Areca Palm", price: 600 }
    ],
    Outdoor: [
      { id: 7, name: "Rose", price: 120 },
      { id: 8, name: "Hibiscus", price: 180 },
      { id: 9, name: "Bougainvillea", price: 220 },
      { id: 10, name: "Jasmine", price: 160 },
      { id: 11, name: "Tulsi", price: 100 },
      { id: 12, name: "Champa", price: 300 }
    ],
    Succulents: [
      { id: 13, name: "Echeveria", price: 200 },
      { id: 14, name: "Haworthia", price: 180 },
      { id: 15, name: "Jade Plant", price: 250 },
      { id: 16, name: "Zebra Plant", price: 220 },
      { id: 17, name: "Panda Plant", price: 260 },
      { id: 18, name: "Burro’s Tail", price: 300 }
    ]
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      <h2>Our Plants</h2>

      {Object.keys(plants).map((category) => (
        <div key={category}>
          <h3>{category} Plants</h3>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {plants[category].map((plant) => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  width: "180px"
                }}
              >
                <img
                  src="https://via.placeholder.com/150"
                  alt={plant.name}
                  width="150"
                  height="150"
                />
                <h4>{plant.name}</h4>
                <p>₹{plant.price}</p>

                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedItems.includes(plant.id)}
                >
                  {addedItems.includes(plant.id)
                    ? "Added"
                    : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
