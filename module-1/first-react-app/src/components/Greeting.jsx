import { useState } from "react";

export function Greeting() {
  const [name, setName] = useState("");
  return (
    <>
      {/* If input field does not have text, give red border, if it has text, no border*/}
      <input
        type="text"
        style={{ border: !name && "1px solid red" }}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <p>Hello {name}</p>
    </>
  );
}
