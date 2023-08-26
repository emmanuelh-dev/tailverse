import GradientGenerator from "@/components/gradients/Generator";
import GradientsExamples from "@/components/gradients/GradientsExamples";
import Layout from "@/layout/Layout";
import { gradients } from "@/data/gradients";
import React from "react";
const gradientGenerator = () => {
  const title = "Tailwind CSS Gradient Generator";
  const description =
    "Create beautiful gradients for your projects with the Tailwind Gradient Generator! Easily customize your color combinations.";

  return (
    <Layout title={title} description={description}>
      <GradientGenerator />
      <div className=" text-center  pt-40 ">
        <h2 className="text-4xl lg:text-6xl font-semibold dark:text-white">
          Gradients Ready To Be Used
        </h2>
        <p className="dark:text-white">
          Choose from our ready-made Tailwind CSS gradients to create beautiful
          things.
        </p>
      </div>
      <GradientsExamples gradients={gradients} />
    </Layout>
  );
};

export default gradientGenerator;
