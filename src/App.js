import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [item, setItem] = useState("");
  const [result, setResult] = useState("");

  function changeHandler(event) {
    setItem(event.target.value);
  }

  function clickHandler() {
    // console.log(typeof item);

    if (item.length === 0) {
      setResult("Enter a valid number");
      return;
    }

    var val = parseInt(item, 10);
    // console.log(typeof val);

    if (val === 1 || val === 0) {
      setResult(" NON PRIME ");
      return;
    }

    for (var i = 2; i <= val / 2; i++) {
      if (val % i === 0) {
        setResult(" NON PRIME ");
        return;
      }
    }

    setResult(" PRIME ");
  }

  return (
    <div className="App">
      <div className="header">
        <div className="navigation">
          <h1 style={{ fontSize: "4rem" }}> Prime Check </h1>
        </div>
      </div>

      <div className="body-container">
        <div className="container">
          <input
            style={{
              width: "60%",
              padding: "0.5rem",
              fontSize: "1.5rem",
              borderRadius: "0.5rem",
              margin: "0rem auto",
              background: "transparent",
              color: "white",
              fontWeight: "bold"
            }}
            placeholder="Enter number"
            onChange={changeHandler}
          ></input>

          <button
            style={{
              width: "40%",
              padding: "0.25rem",
              margin: "1rem auto",
              borderRadius: "0.5rem",
              color: "white",
              background: "transparent",
              fontWeight: "bold",
              fontSize: "1rem"
            }}
            onClick={clickHandler}
          >
            CHECK PRIME
          </button>

          <div
            style={{
              fontSize: "2rem",
              margin: "0.5rem auto 1.25rem auto",
              fontWeight: "bold"
            }}
          >
            {result}
          </div>
        </div>
      </div>
    </div>
  );
}
