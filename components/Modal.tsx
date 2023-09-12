import UserStore from "@/store/user";
import React, { useState } from "react";
const type = require("@/data/navigation.json");

const renderCodeInput = (contentType: string | any) => {
  switch (contentType) {
    case "buttons":
      return `<button class="bg-white font-bold">Button code</button>`;
    case "inputs":
      return `<input type="text" placeholder="Input code" />`;
    case "cards":
      return `<div class="bg-white w-48 h-64 rounded-3xl"></div>`;
    case "forms":
      return <input type="text" placeholder="Form code" />;
    case "all":
      return `<div class="bg-pink-400 p-8">
      <h1 class="text-4xl font-bold">Hello world!</h1>
      <p class="text-xl text-white">This is sample text.</p>
    </div>`;
    default:
      return `<div class="bg-pink-400 p-8">
      <h1 class="text-4xl font-bold">Hello world!</h1>
      <p class="text-xl text-white">This is sample text.</p>
    </div>`;
  }
};

const Modal = () => {
  const filteredType = type.filter(
    (item: { name: string }) => item.name !== "all"
  );

  const [openModal, setopenModal] = useState(true);
  const selectNewComponentType = UserStore(
    (state) => state.selectNewComponentType
  );
  const setComponentSource = UserStore((state) => state.setComponentSource);
  const handleModal = () => {
    setopenModal(!openModal);
  };
  return openModal ? (
    <div className="fixed top-0 left-0 w-screen h-screen justify-center z-[100] bg-white dark:bg-black flex items-center">
      <div>
        <div className="max-w-xl mx-auto">
          <h1 className="font-bold dark:text-white text-6xl text-center py-10">
            Select your type
          </h1>
          <div className="flex flex-wrap gap-2 justify-center">
            {filteredType.map((item: { name: string; href: string }) => (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  selectNewComponentType(e.currentTarget.dataset.type);
                  setComponentSource(
                    renderCodeInput(e.currentTarget.dataset.type)
                  );
                  setopenModal(false);
                }}
                key={item.name}
                className="text-neutral-600 hover:text-black dark:hover:text-white px-3 py-2 text-sm font-medium dark:text-white bg-neutral-200 dark:bg-neutral-900 w-44 h-44 hover:scale-105"
                data-type={item.name.toLowerCase()}
              >
                {item.name.toLowerCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
