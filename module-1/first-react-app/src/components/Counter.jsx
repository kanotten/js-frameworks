import { useState } from "react";
function setColor(count) {
  if (count < 3) {
    return "red";
  } else if (count <= 6) {
    return "blue";
  } else if (count < 10) {
    return "rebeccapurple";
  } else {
    return "white";
  }
}

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
      style={{ backgroundColor: setColor(count) }}
    >
      count: {count}
    </button>
  );
}
