import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaFacebook,
  FaGlobe,
} from "react-icons/fa";
import Enlace from "@/components/Enlaces";

const enlaces = [
  {
    color: "rose",
    link: "https://www.instagram.com/emmanuelh.dev",
    texto: "Instagram",
    icono: FaInstagram,
  },
  {
    color: "black",
    link: "https://www.tiktok.com/@emmanuelh.dev",
    texto: "TikTok",
    icono: FaTiktok,
  },
  {
    color: "sky",
    link: "https://twitter.com/emmanuelhdev",
    texto: "Twitter",
    icono: FaTwitter,
  },
  {
    color: "black",
    link: "https://tailverse.tech",
    texto: "Tailverse",
    icono: FaGlobe,
  },
  {
    color: "black",
    link: "https://bysmax.com",
    texto: "BysMax",
    icono: FaGlobe,
  },
];

const Emmanuel = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto flex max-w-3xl flex-col">
          <h1 className="mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-4xl font-extrabold uppercase tracking-tighter text-transparent sm:text-5xl lg:text-7xl">
            EmmanuelH.dev
          </h1>
          <h2 className="order-first bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-medium tracking-wide text-transparent">
            WebDev
          </h2>
        </div>
      </div>
      <div className="max-w-xl mx-auto">
        <Enlace enlaces={enlaces} />
      </div>
    </div>
  );
};

export default Emmanuel;
