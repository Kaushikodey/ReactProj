import React from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="background-image">
      <h1>Welcome to Paradise Nursery</h1>

      <button onClick={() => navigate("/plants")}>
        Get Started
      </button>
    </div>
  );
};

export default App;
