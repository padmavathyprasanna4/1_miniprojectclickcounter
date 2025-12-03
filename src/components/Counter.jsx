// Counter.jsx
import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-card">
      <h2>Click Counter</h2>
      <p className="count-display">Count: {count}</p>

      <button
        className="counter-btn"
        onClick={() => setCount(count + 1)}
      >
        Click Me
      </button>
    </div>
  );
}

export default Counter;
