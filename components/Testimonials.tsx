import React from 'react';
import { FaUser } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      testimonial: "The Tailwind components have greatly improved the efficiency and aesthetics of our web projects. Highly recommended!"
    },
    {
      name: "Jane Smith",
      testimonial: "As a developer, I love the flexibility and time-saving aspects of using the Tailwind components. They've become an essential part of my toolkit."
    },
    {
      name: "Sarah Johnson",
      testimonial: "The Tailwind components have allowed us to rapidly develop and launch beautiful websites. The clean code and extensive documentation are a developer's dream."
    }
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="dark:text-white font-bold text-center text-5xl md:text-6xl py-10">
          Testimonials
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center">
              <FaUser className="text-5xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-white mb-2">
                {testimonial.name}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-300 text-center">
                &ldquo;{testimonial.testimonial}&ldquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
