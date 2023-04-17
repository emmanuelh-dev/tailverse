import React from "react";
const type = require("@/data/navigation.json");

interface Props {
  contentType: string;
  setContentType: any;
  setCode: any;
}

const Modal = ({ setContentType, contentType, setCode }: Props) => {
  const filteredType = type.filter(
    (item: { name: string }) => item.name !== "all"
  );
  const renderCodeInput = (contentType: string | any) => {
    switch (contentType) {
      case "buttons":
        setCode(`<button class="bg-white font-bold">Button code</button>`);
        break;
      case "inputs":
        setCode(`<input type="text" placeholder="Input code" />`);
        break;
      case "cards":
        setCode(` <div class="bg-white w-48 h-64 rounded-lg"> </div>`);
        break;
      case "forms":
        return <input type="text" placeholder="Form code" />;
      case "all":
        setCode(`    <div class="bg-pink-400 p-8">
        <h1 class="text-4xl font-bold">Hello world!</h1>
        <p class="text-xl text-white">This is sample text.</p>
      </div>`);
        break;
      default:
        return null;
    }
  };
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
                setContentType(e.currentTarget.dataset.type);
                renderCodeInput(e.currentTarget.dataset.type);
              }}
              key={item.name}
              className="text-neutral-600 hover:text-black dark:hover:text-white px-3 py-2 text-sm font-medium dark:text-white bg-neutral-100 dark:bg-semi-black w-44 h-44 hover:scale-105"
              data-type={item.name.toLowerCase()}
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
