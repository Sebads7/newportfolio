import { generateRandomColor } from "@/utils/generateRandomColor";
import React from "react";

interface ListItemProps {
  styles: {
    left: string;
    width: string;
    height: string;
    bottom: string;
    animationDelay: string;
  };
}

const ListItem: React.FC<ListItemProps> = React.memo(
  function ListItemComponent({ styles }) {
    const colors = generateRandomColor();
    return (
      <li
        className="absolute block list-none bg-[#ffffff] shadow-2xl  shadow-white  animate-square-spin !rounded-full   "
        style={{
          left: styles.left,
          width: styles.width,
          height: styles.height,
          bottom: styles.bottom,
          animationDelay: styles.animationDelay,
          backgroundColor: colors,
          borderRadius: "50%",
        }}
      ></li>
    );
  },
);

ListItem.displayName = "ListItem";
export default ListItem;
