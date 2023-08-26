import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaFacebook,
  FaGlobe,
  FaUserSecret,
} from "react-icons/fa";
import Enlace from "@/components/Enlaces";

const enlaces = [
  {
    color: "rose",
    link: "https://www.instagram.com/isaacdiaazzz/",
    texto: "Instagram",
    icono: FaInstagram,
  },
  {
    color: "black",
    link: "https://www.tiktok.com/@isaacdiaazzz",
    texto: "TikTok",
    icono: FaTiktok,
  },
  {
    color: "rose",
    link: "https://ngl.link/isaacdiazzz",
    texto: "Enviame un mensaje anonimo | NGL",
    icono: FaUserSecret,
  },
  {
    color: "black",
    link: "https://www.threads.net/@isaacdiaazzz",
    texto: "threads",
    icono: FaGlobe,
  },
  {
    color: "blue",
    link: "https://www.facebook.com/profile.php?id=100070076196241",
    texto: "Facebook",
    icono: FaFacebook,
  },
];

const IsaacDiaz = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto flex max-w-3xl flex-col">
          <h1 className="mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-4xl font-extrabold uppercase tracking-tighter text-transparent sm:text-5xl lg:text-7xl">
            IsaacDiazzz
          </h1>
          <h2 className="order-first bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-medium tracking-wide text-transparent">
            TikToker
          </h2>
        </div>
      </div>
      <div className="max-w-xl mx-auto">
        <Enlace enlaces={enlaces} />
      </div>{" "}
    </div>
  );
};

export default IsaacDiaz;
