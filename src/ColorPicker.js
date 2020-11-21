import React from "react";
import { SketchPicker } from "react-color";
import { useState } from "react";
import "./ColorPicker.css";
const { v4: uuid4 } = require("uuid");

export default function ColorPicker() {
  const [pickedColor, setPickedColor] = useState({});
  const [palette, setPalette] = useState([]);

  function handleClick() {
    setPalette([...palette, pickedColor]);
  }

  function deleteBox(id) {
    const filtered = palette.filter((elem) => elem.id !== id);
    setPalette(filtered);
  }

  return (
    <div>
      <div className="display">
        {console.log(palette)}
        {palette.map((elem) => (
          <div className="box" style={{ backgroundColor: `${elem.color}` }}>
            <div>
              <span
                className="click"
                onClick={() => {
                  deleteBox(elem.id);
                }}
              >
                X
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="picker">
        <SketchPicker
          color={pickedColor.color}
          onChangeComplete={(newColor) =>
            setPickedColor({ color: newColor.hex, id: uuid4() })
          }
        />
        <button onClick={handleClick}>ADD COLOR</button>
        <input type="color" />
      </div>
    </div>
  );
}
