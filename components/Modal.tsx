import React, { useState } from "react";
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
  const [openModal, setopenModal] = useState(true);
  const handleModal = () => {
    setopenModal(!openModal);
  };
  const renderCodeInput = (contentType: string | any) => {
    switch (contentType) {
      case "buttons":
        setCode(`<button class="bg-white font-bold">Button code</button>`);
        break;
      case "inputs":
        setCode(`<input type="text" placeholder="Input code" />`);
        break;
      case "cards":
        setCode(` <div class="bg-white w-48 h-64 rounded-3xl"> </div>`);
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
      <button className="fixed bg-black dark:bg-white text-white dark:text-black  z-50 bottom-11 lg:right-14 p-4 rounded-3xl font-bold max-sm:block max-sm:w-full" onClick={handleModal}>
        Add component
      </button>
      {openModal === true ? (
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
                className="text-neutral-600 hover:text-black dark:hover:text-white px-3 py-2 text-sm font-medium dark:text-white bg-neutral-200 dark:bg-neutral-900 w-44 h-44 hover:scale-105"
                data-type={item.name.toLowerCase()}
              >
                {item.name.toLowerCase()}
              </button>
            ))}
          </div>
          <div className="dark:text-white">
            <h2 className="font-bold">Best practices for this app:</h2>
            <ul>
              <li>
                Use external images and assets instead of embedding them
                directly in the app.
              </li>
              <li>
                Avoid using excessively large components that may negatively
                impact performance.
              </li>
              <li>
                Do not use screen-based sizes (e.g.{" "}
                <span className="font-bold">screen-width</span>,
                <span className="font-bold">screen-height</span>, etc.) in
                styles.
              </li>
              <li>
                Always follow the React component format, with proper closing
                tags for all elements.
              </li>
              <li>
                Use appropriate semantic HTML tags for each element to improve
                accessibility.
              </li>
              <li>
                Keep the code organized and maintain good code style and
                formatting practices.
              </li>
              <li>
                Minimize the use of global styles and prioritize
                component-specific styles.
              </li>
              <li>
                Ensure that the app is responsive and functions properly across
                a range of devices and screen sizes.
              </li>
              <li>
                Test the app thoroughly and handle errors and exceptions
                gracefully.
              </li>
              <li>
                Consider incorporating security measures to protect user data
                and prevent vulnerabilities.
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
