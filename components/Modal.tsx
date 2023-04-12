import React from "react";
const type = require("@/data/navigation.json");
interface Props{
    contentType:any;
    setContentType:any;
}
const Modal = ({setContentType, contentType}:Props) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-white dark:bg-black ">
      {type.map((item: { name: string; href: string }) => (
        <button onClick={(e) => {e.preventDefault();setContentType(e.target.value); console.log(e.target.value) }}
          key={item.name}
          className="text-neutral-600 hover:text-black dark:hover:text-white px-3 py-2  text-sm font-medium dark:text-white"
          value={item.name}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Modal;
