import React, { useEffect, useState } from "react";
import ColorPalette from "./ColorPalette";
import SelectDropdown from "../SelectDropDown";
import CopyButton from "../tools/CopyButton";

const GradientGenerator = () => {
  const [fromColor, setFromColor] = useState("from-pink-500");
  const [via, updateViaColor] = useState("Inactive");
  const [viaValue, updateViaValue] = useState(false);
  const [toColor, updateToColor] = useState("to-rose-500");
  const [gradientTitle, setGradientTitle] = useState("To Right");
  const [gradientValue, setGradientValue] = useState("bg-gradient-to-r");
  const [viaColor, setViaColor] = useState("via-rose-500");
  const [Class, setClass] = useState("");
  const [ClassClip, setClassClip] = useState("");

  useEffect(() => {
    setClass(
      `${gradientValue} ${fromColor} ${viaValue ? viaColor : null} ${toColor}`
    );
    setClassClip(
      `bg-clip-text text-transparent ${gradientValue} ${fromColor} ${
        viaValue ? viaColor : null
      } ${toColor}`
    );
  }, [fromColor, toColor, via, gradientValue, viaValue, viaColor]);

  return (
    <div className="pt-20 px-4 container mx-auto">
      <div className="flex gap-10">
        <div className="w-full flex gap-10 max-sm:flex-wrap">
          <div className=" lg:w-2/5 mt-10">
            <div className={` h-72 w-full rounded-lg ${Class}`}></div>
            <div className="text-5xl font-extrabold flex items-center justify-center h-72 ">
              <span className={`${ClassClip}`}>Hello world!!</span>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <ColorPalette
              from={fromColor}
              to={toColor}
              via={via}
              viaActive={viaValue}
              setFromColor={setFromColor}
              updateViaColor={setViaColor}
              updateToColor={updateToColor}
            />
            <div className="flex gap-4">
              <SelectDropdown
                options={[
                  { title: "Inactive", value: false },
                  { title: "Active", value: true },
                ]}
                value={viaValue}
                title={via}
                setTitle={updateViaColor}
                setValue={updateViaValue}
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
                value={viaValue}
                title={gradientTitle}
                setTitle={setGradientTitle}
                setValue={setGradientValue}
              />
            </div>
            <div className="flex gap-2 items-center mt-4">
              <input
                value={Class}
                disabled
                className="flex-1 w-full h-12 px-4 font-medium text-neutral-700 bg-white border border-neutral-200 rounded-md lg:w-full xl:w-auto sm:w-auto cursor-text focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-opacity-20"
              />
              <CopyButton textToCopy={Class} info={"Copy Css"} className={"max-w-[10rem] flex lg:w-full xl:w-auto duration-300 transition-color lg:mt-4 xl:mt-0 sm:mt-0 bg-neutral-950 dark:bg-white dark:text-black text-white items-center justify-center px-4 py-2.5 space-x-3 font-semibold rounded-md focus:outline-none"}/>
            </div>
            <div className="flex gap-2 items-center mt-4">
              <input
                value={ClassClip}
                disabled
                className="flex-1 w-full h-12 px-4 font-medium text-neutral-700 bg-white border border-neutral-200 rounded-md lg:w-full xl:w-auto sm:w-auto cursor-text focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-opacity-20"
              />
              <CopyButton textToCopy={ClassClip} info={"Copy Css"} className={"max-w-[10rem] flex lg:w-full xl:w-auto duration-300 transition-color lg:mt-4 xl:mt-0 sm:mt-0 bg-neutral-950 dark:bg-white dark:text-black text-white items-center justify-center px-4 py-2.5 space-x-3 font-semibold rounded-md focus:outline-none"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientGenerator;
