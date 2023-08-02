import GradientGenerator from "@/components/gradients/Generator";
import GradientsExamples from "@/components/gradients/GradientsExamples";
import Layout from "@/layout/Layout";
import {gradients} from "@/data/gradients";
import React from "react";
const gradientGenerator = () => {

  return (
    <Layout
    title="Tailwind Gradient Generator | Tailverse"
    description="Create beautiful gradients for your projects with the Tailwind Gradient Generator! Easily customize your color combinations."
   >
      <GradientGenerator />
      <GradientsExamples gradients={gradients} />
    </Layout>
  );
};

export default gradientGenerator;
