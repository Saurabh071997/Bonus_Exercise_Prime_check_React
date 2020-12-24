import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [item, setItem] = useState(0);
  const [result, setResult] = useState("");

  function changeHandler(event) {
    // console.log(event.target.value);
    setItem(event.target.value);
  }

  function clickHandler() {
    //  console.log("hjhjhj");
    console.log(item);

    if (item == 1) {
      console.log("one");
      setResult("1 is neither a prime nor a composite");
      return;
    }

    for (var i = 2; i <= item / 2; i++) {
      if (item % i === 0) {
        setResult(item + " is not Prime Number");
        return;
      }
    }

    setResult(item + " is a Prime Number");
  }

  return (
    <div className="App">
      <div className="header">
        <div className="navigation">
          <h1> Prime Check </h1>
        </div>
      </div>

      <div className="conatiner" style={{ maxWidth: "600px", margin: "auto" }}>
        <input
          id="txt-input"
          onChange={changeHandler}
          style={{
            width: "50%",
            padding: "1rem",
            display: "block",
            margin: "auto"
          }}
        ></input>

        <button
          // onClick={(event) => clickHandler(event)}
          onClick={clickHandler}
          style={{ margin: "1rem auto" }}
        >
          {" "}
          Check
        </button>
        {/* {result} */}
        <div>{result}</div>
      </div>
    </div>
  );
}
