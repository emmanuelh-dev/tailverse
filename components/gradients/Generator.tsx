import React, { useEffect, useState } from "react";
import { RiFileCopyLine } from "react-icons/ri";
import ColorPalette from "./ColorPalette";
import SelectDropdown from "./SelectDropDown";
import { toast } from "react-hot-toast";

const GradientGenerator = () => {
  const [fromColor, setFromColor] = useState("from-pink-500");
  const [via, updateViaColor] = useState("");
  const [toColor, updateToColor] = useState("to-rose-500");
  const hola = "bg-white";
  const [Class, setClass] = useState(
    "bg-gradient-to-r from-blue-600 to-violet-600"
  );
  useEffect(() => {
    setClass(`bg-gradient-to-r ${fromColor} ${toColor}`);
  }, [fromColor, toColor, via]);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(Class);
    toast.success("Style copied to clipboard!");
  };

  return (
    <div className="pt-20 px-4 container mx-auto">
      <div className="text-center pb-10">
        <h2 className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent font-bold text-4xl py-3">
          Ignite Your Creativity: Customize Your Own Striking Gradients!
        </h2>
        <p className="dark:text-neutral-300">
          Elevate your design with our interactive tool. Decide between
          mesmerizing text or captivating background gradients to achieve the
          perfect visual impact for your project. The power is in your hands!
        </p>
      </div>
      <div className="flex gap-10">
        <div className="w-full flex gap-10">
          <div
            className={`h-96 w-2/5 ${hola} rounded-lg bg-gradient-to-r ${fromColor} ${toColor}`}
          ></div>
          <div className="w-3/5">
            <ColorPalette
              from={fromColor}
              to={toColor}
              via={via}
              viaActive={false}
              setFromColor={setFromColor}
              updateViaColor={updateViaColor}
              updateToColor={updateToColor}
            />
            <div className="flex gap-4">
              <SelectDropdown
                options={[
                  { title: "Inactive", value: false },
                  { title: "Active", value: true },
                ]}
                defaultValue={"Inactive"}
                defaultTitle={undefined}
                tabindex={undefined}
              />
              <SelectDropdown
                options={[
                  { title: "To Top", value: "bg-gradient-to-t" },
                  { title: "To Top Right", value: "bg-gradient-to-tr" },
                  { title: "To Right", value: "bg-gradient-to-r" },
                  { title: "To Bottom Right", value: "bg-gradient-to-br" },
                  { title: "To Bottom", value: "bg-gradient-to-b" },
                  { title: "To Bottom Left", value: "bg-gradient-to-bl" },
                  { title: "To Left", value: "bg-gradient-to-l" },
                  { title: "To Top Left", value: "bg-gradient-to-tl" },
                ]}
                defaultValue={"To Right"}
                defaultTitle={"To Right"}
                tabindex={undefined}
              />
            </div>
            <div className="flex gap-2 items-center mt-4">
              <input
                value={Class}
                disabled
                className="flex-1 w-full h-12 px-4 font-medium text-neutral-700 bg-white border border-neutral-200 rounded-md lg:w-full xl:w-auto sm:w-auto cursor-text focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-opacity-20"
              />
              <button
                className="flex lg:w-full xl:w-auto duration-300 transition-color lg:mt-4 xl:mt-0 mt-4 sm:mt-0 bg-neutral-950 dark:bg-white dark:text-black text-white items-center justify-center px-4 py-2.5 space-x-3 font-semibold rounded-md focus:outline-none"
                onClick={handleCopyClick}
              >
                <RiFileCopyLine />
                <span> Copy CSS </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientGenerator;
