import React from "react";
const type = require("@/data/navigation.json");

interface Props {
  contentType: any;
  setContentType: any;
}

const Modal = ({ setContentType, contentType }: Props) => {
  const filteredType = type.filter(
    (item: { name: string }) => item.name !== "o"
  );

  return (
    <div className="fixed top-0 left-0 w-screen h-screen justify-center z-[100] bg-white dark:bg-black">
      <div className="max-w-xl mx-auto">
        <h1 className="font-bold dark:text-white text-6xl text-center py-10">
          Select your type
        </h1>
        <div className="flex flex-wrap gap-2 justify-center">
          {filteredType.map((item: { name: string; href: string }) => (
            <button
              onClick={(e) => {
                e.preventDefault();
                setContentType(e.currentTarget.dataset.type);
              }}
              key={item.name}
              className="text-neutral-600 hover:text-black dark:hover:text-white px-3 py-2 text-sm font-medium dark:text-white bg-neutral-100 dark:bg-semi-black w-44 h-44 hover:scale-105"
              data-type={item.name.toLowerCase()} // Aplicamos toLowerCase() a la propiedad data-type
            >
              {item.name.toLowerCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
