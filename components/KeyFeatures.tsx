import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaCogs } from "react-icons/fa";
import { BsLayoutThreeColumns } from "react-icons/bs";
import Image from "next/image";
const KeyFeatures = () => {
  const features = [
    {
      icon: <AiOutlineCheckCircle className="h-12 w-12 dark:text-white mb-4" />,
      title: "Easy to Use",
      description:
        "Utilize our ready-to-use components with ease, saving development time and effort.",
    },
    {
      icon: <FaCogs className="h-12 w-12 dark:text-white mb-4" />,
      title: "Customizable",
      description:
        "Tailor the components to match your projects design with easy-to-use customization options.",
    },
    {
      icon: <BsLayoutThreeColumns className="h-12 w-12 dark:text-white mb-4" />,
      title: "Responsive Design",
      description:
        "Create responsive layouts with ease using our components that adapt to various screen sizes.",
    },
  ];

  return (
    <section className="bg-black w-screen h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-10 ">
        <h2 className="dark:text-white font-bold text-6xl py-10">
          Key Features
        </h2>
        <div className="md:flex">
          <div className="">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-2xl font-bold text-neutral-800 dark:text-white mb-2 ">
                  {feature.title}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-500 font-light leading-5">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="hidden  w-full justify-center md:flex">
            <Image
              width={300}
              height={300}
              src="https://images.pexels.com/photos/4021521/pexels-photo-4021521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Creative"
              className="max-sm:mt-10 w-full object-cover md:w-72 md:h-72 rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
