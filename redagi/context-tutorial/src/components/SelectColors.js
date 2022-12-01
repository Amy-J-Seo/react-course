import React, { Component } from "react";
import { ColorConsumer } from "../context/color";
import ColorContext from "../context/color";
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// function SelectColors() {
//   return (
//     <div>
//       <h2>Select colors</h2>
//       {/* <div style={{ display: "flex" }}>
//         {colors.map((color) => (
//           <div
//             key={color}
//             style={{
//               background: color,
//               width: "24px",
//               height: "24px",
//               cursor: "pointer",
//             }}
//           />
//         ))}
//       </div> */}
//       <ColorConsumer>
//         {({ actions }) => (
//           <div style={{ display: "flex" }}>
//             {colors.map((color) => (
//               <div
//                 key={color}
//                 style={{
//                   background: color,
//                   width: "24px",
//                   height: "24px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => actions.setColor(color)}
//                 onContextMenu={(e) => {
//                   e.preventDefault();
//                   actions.setSubcolor(color);
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </ColorConsumer>
//       <hr />
//     </div>
//   );
// }

class SelectColors extends Component {
  static contextType = ColorContext;
  handleSetColor = (color) => {
    this.context.actions.setColor(color);
  };
  handleSetSubColor = (subColor) => {
    this.context.actions.setSubcolor(subColor);
  };
  render() {
    return (
      <div>
        <h2>Choose the color</h2>
        <div style={{ display: "flex" }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                backgroundColor: color,
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={(e) => {
                e.preventDefault();
                this.handleSetSubColor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default SelectColors;
