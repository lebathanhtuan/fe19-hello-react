import React, { useState } from "react";

import Search from "./Search";
import List from "./List";

const COLOR_LIST = ["red", "blue", "yellow", "green"];

function Main(props) {
  const { isShowSidebar } = props

  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  const buttonCountStyle = {
    width: 32,
    height: 32,
  };

  const buttonColorStyle = {
    marginRight: 8,
    border: "none",
    height: 32,
  };

  const divColorStyle = {
    width: 150,
    height: 150,
    margin: "8px 0",
    backgroundColor: color,
  };

  const renderColorButton = () => {
    return COLOR_LIST.map((item, index) => (
      <button
        key={index}
        onClick={() => setColor(item)}
        style={{
          ...buttonColorStyle,
          backgroundColor: item,
        }}
      >
        {item}
      </button>
    ));
  };

  return (
    <div className={isShowSidebar ? "main active" : "main"}>
      {/* <Search name={name} logArray={logArray} /> */}
      {/* {count}
      <div>
        <button
          onClick={() => setCount(count + 1)}
          style={buttonCountStyle}
        >
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={buttonCountStyle}
        >
          -
        </button>
      </div>
      <div style={divColorStyle}></div>
      {renderColorButton()} */}
      <List />
    </div>
  );
}

export default Main;
