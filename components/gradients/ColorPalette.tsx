import { useState, useEffect } from "react";
import { BiCheck } from "react-icons/bi";

interface ColorSelectorProps {
  from: string;
  to: string;
  via: string;
  viaActive: boolean;
  setFromColor: (color: string) => void;
  updateViaColor: (color: string) => void;
  updateToColor: (color: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  from,
  to,
  via,
  viaActive,
  setFromColor,
  updateViaColor,
  updateToColor,
}) => {
  const [select, setSelect] = useState("from");
  const [isChange, setIsChange] = useState(false);
  const colors = [
    "slate",
    "neutral",
    "zinc",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ];
  const values = [
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ];

  useEffect(() => {
    setIsChange(true);

    setTimeout(() => setIsChange(false), 500);
  }, [select]);

  const selectedColor = (color: string) => {
    if (select === "from" && from === color) {
      return true;
    }

    if (select === "via" && via === color && viaActive) {
      return true;
    }

    if (select === "to" && to === color) {
      return true;
    }

    return false;
  };

  const handleUpdateColor = (color: string) => {
    if (select === "from") {
      setFromColor(color);
    }

    if (select === "via") {
      updateViaColor(color);
    }

    if (select === "to") {
      updateToColor(color);
    }
  };

  return (
    <div className="flex flex-col flex-1 max-h-72 md:max-h-96 xl:max-h-[28rem]">
      <div className="flex items-center space-x-8">
        <button
          disabled={isChange}
          onClick={() => setSelect("from")}
          className={
            select === "from"
              ? "text-neutral-800 dark:text-neutral-400 font-thin"
              : "text-neutral-400 hover:text-neutral-600 font-semibold focus:outline-none"
          }
        >
          From Color
        </button>

        {viaActive && (
          <button
            disabled={isChange}
            onClick={() => setSelect("via")}
            className={
              select === "via"
                ? "text-neutral-800 dark:text-neutral-400 font-thin"
                : "text-neutral-400 hover:text-neutral-600 font-semibold transition-colors duration-300 focus:outline-none"
            }
          >
            Via Color
          </button>
        )}

        <button
          disabled={isChange}
          onClick={() => setSelect("to")}
          className={
            select === "to"
              ? "text-neutral-800 dark:text-neutral-400 font-thin"
              : "text-neutral-400 hover:text-neutral-600 font-semibold transition-colors duration-300 focus:outline-none"
          }
        >
          To Color
        </button>
      </div>

      <div
        id="colors"
        className="relative flex-1 w-full h-64 px-6 py-4 mt-4 space-y-6 overflow-y-auto border rounded-lg"
      >
        {colors.map((color, index) => (
          <div key={index}>
            <p className="mb-2 text-neutral-600 capitalize" key={index}>
              {color}
            </p>

            <div className="grid grid-cols-4 gap-6 md:gap-4 2xl:gap-6 sm:grid-cols-7 md:grid-cols-10 lg:grid-cols-6 xl:grid-cols-10">
              {values.map((number, index) => (
                <div key={index}>
                  <div>
                    <button
                      className={`w-full h-10 sm:h-12 rounded-lg md:h-10 2xl:h-12 focus:outline-none bg-${color}-${number}`}
                      onClick={() =>
                        handleUpdateColor(select + "-" + color + "-" + number)
                      }
                    >
                      {selectedColor(select + "-" + color + "-" + number) && (
                        <BiCheck className="w-5 h-5 text-white absolute top-2 right-2" />
                      )}
                    </button>

                    <p
                      className={`mt-1 text-sm text-center ${
                        selectedColor(select + "-" + color + "-" + number)
                          ? "text-[#0FD3CF] font-bold"
                          : "text-neutral-500 font-medium"
                      }`}
                      key={index}
                    >
                      {number}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
