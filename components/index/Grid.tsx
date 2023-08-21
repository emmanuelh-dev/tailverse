import React from "react";

const Grid = ({ components, users }: Props) => {
  const totalUsers = users.length;
  const totalComponents = components.length;
  return (
    <div className="bg-cyan-900">
      <div className="grid md:grid-cols-3 gap-3 max-w-5xl mx-auto py-40 container">
        <div className="col-span-2 pt-10 rounded-3xl dark:text-white justify-center text-center py-2 text-3xl bg-cyan-700">
          <span className="font-bold text-6xl">+{totalComponents}</span>
          <p className="py-6 text-xl text-center font-light text-gray-200">
            Community-Crafted UI Elements
          </p>
        </div>
        <div className="pt-10 rounded-3xl dark:text-white justify-center text-center py-2 text-3xl bg-cyan-700">
          <span className="font-bold text-6xl">100%</span>
          <p className="py-6 text-xl text-center font-light text-gray-200">
            Free for Personal and Commercial Use
          </p>
        </div>
        <div className="pt-10 rounded-3xl dark:text-white justify-center text-center py-2 text-3xl bg-cyan-700">
          <span className="font-bold text-6xl">100%</span>
          <p className="py-6 text-xl text-center font-light text-gray-200">
            Free for Personal and Commercial Use
          </p>
        </div>
        <div className="pt-10 rounded-3xl dark:text-white justify-center text-center py-2 text-3xl col-span-2  bg-cyan-700">
          <span className="font-bold text-6xl">+{totalUsers}</span>
          <p className="py-6 text-xl text-center font-light text-gray-200">
            Contributors
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grid;
