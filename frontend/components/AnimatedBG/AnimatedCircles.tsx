import React from "react";
import ListItem from "./ListItem";

// Generate list items with different delays and sizes
const generateListItems = () => {
  const numberOfItems = 25;
  const delays = [
    "1s",
    "5s",
    "1s",
    "9s",
    "14s",
    "8s",
    "7s",
    "14s",
    "4s",
    "15s",
    "7s",
    "6s",
    "6s",
    "14s",
    "9s",
    "14s",
    "7s",
    "16s",
    "8s",
    "17s",
    "8s",
    "9s",
    "15s",
    "8s",
    "6s",
    "8s",
    "15s",
    "11s",
    "13s",
  ];
  const sizes = [
    "5px",
    "8px",
    "12px",
    "8px",
    "7px",
    "14px",
    "5px",
    "5px",
    "8px",
    "7px",
    "10px",
    "8px",
    "7px",
    "8px",
    "7px",
    "12px",
    "6px",
    "10px",
    "5px",
    "8px",
    "12px",
    "14px",
    "7px",
    "8px",
    "7px",
    "3px",
    "12px",
    "8px",
    "10px",
  ];

  return Array(numberOfItems)
    .fill(null)
    .map((_, index) => {
      const size = sizes[index % sizes.length];
      return {
        left: `${Math.random() * 100}%`,
        width: size,
        height: size,
        bottom: `-${size}`,
        animationDelay: delays[index % delays.length],
      };
    });
};

const AnimatedSquares: React.FC = () => {
  const listItems = generateListItems();

  return (
    <ul className="fixed inset-0 m-0 p-0  overflow-hidden  ">
      {listItems.map((styles, index) => (
        <ListItem key={index} styles={styles} />
      ))}
    </ul>
  );
};

export default AnimatedSquares;
