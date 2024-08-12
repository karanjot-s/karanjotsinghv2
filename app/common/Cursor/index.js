"use client";

import AnimatedCursor from "react-animated-cursor";
import "./cursor.css";

// import React, { useState, useEffect } from "react";
// import "./flare.css";

// // This functional component represents a custom cursor with a flare effect.
// function FlareCursor() {
//   // State to track the current cursor position (x, y coordinates).
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   // State to track whether the cursor is over a clickable element.
//   const [isPointer, setIsPointer] = useState(false);
//   const [isText, setIsText] = useState(false);

//   // Event handler for the mousemove event.
//   const handleMouseMove = (e) => {
//     // Update the cursor position based on the mouse coordinates.
//     setPosition({ x: e.clientX, y: e.clientY });

//     // Get the target element that the cursor is currently over.
//     const target = e.target;

//     // Check if the cursor is over a clickable element by inspecting the cursor style.
//     setIsPointer(
//       window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
//     );
//     setIsText(
//       window.getComputedStyle(target).getPropertyValue("cursor") === "text"
//     );
//   };

//   // Set up an effect to add and remove the mousemove event listener.
//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []); // The empty dependency array ensures that this effect runs only once on mount.

//   // Calculate the size of the flare based on whether the cursor is over a clickable element.
//   const flareSize = isPointer || isText ? 50 : 20;

//   // Adjust the cursor position to create a visual effect when over a clickable element.
//   const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

//   // Render the custom cursor element with dynamic styles based on cursor state.
//   return (
//     <div
//       className={`flare ${isPointer ? "pointer" : ""} ${isText ? "text" : ""}`}
//       style={{
//         ...cursorStyle,
//         left: `${position.x}px`,
//         top: `${position.y}px`,
//         width: `${flareSize}px`,
//         height: `${flareSize}px`,
//       }}
//     ></div>
//   );
// }

// // Export the FlareCursor component to be used in other parts of the application.
// export default FlareCursor;

export default function Cursor() {
  return (
    <AnimatedCursor
      innerSize={16}
      outerSize={45}
      innerScale={4}
      outerScale={0}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: "var(--cursor-color)",
        mixBlendMode: "exclusion",
        zIndex: 99999,
      }}
      outerStyle={{
        border: "3px solid var(--cursor-color)",
        zIndex: 99999,
      }}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}
