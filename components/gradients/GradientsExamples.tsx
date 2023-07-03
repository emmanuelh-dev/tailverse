import React from "react";
import GradientCard from "./GradientCard";

interface Gradient {
  title: string;
  classTitle: string;
  style: string;
}

interface Props {
  gradients: Gradient[];
}

const GradientsExamples: React.FC<Props> = ({ gradients }) => {
  return (
    <div className="pt-20 px-4 container mx-auto">
      <div className="text-center pb-6">
        <h2 className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent font-bold text-4xl py-3">
          Ready to be Used
        </h2>
        <p className="dark:text-neutral-300">
          Unleash the Power of Colors with our Stunning Tailwind CSS Gradients
          for Exquisite Cards, Mobile Apps, and Websites!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {gradients.map((gradient, index) => (
          <GradientCard
            key={index}
            title={gradient.title}
            classTitle={gradient.classTitle}
            style={gradient.style}
          />
        ))}
      </div>
    </div>
  );
};

export default GradientsExamples;
