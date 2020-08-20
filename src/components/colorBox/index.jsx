//rsfp
import React, { useState } from "react";
import "./colorBox.scss";

ColorBox.propTypes = {};

function getRadomColor() {
  const LIST_COLOR = ["blue", "black", "red", "orange"];
  const indexRadom = Math.trunc(Math.random() * 4);
  return LIST_COLOR[indexRadom];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("color") || "deeppink";
    console.log(initColor);
    return initColor;
  });
  function handleColorBox() {
    const newColor = getRadomColor();
    setColor(newColor);
    localStorage.setItem("color", newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleColorBox}
    ></div>
  );
}

export default ColorBox;
