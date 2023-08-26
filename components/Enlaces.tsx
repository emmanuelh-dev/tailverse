import React from "react";
import { IconType } from "react-icons";
import { FaInstagram, FaTiktok, FaTwitter, FaFacebook } from "react-icons/fa";

interface Enlace {
  color: string;
  link: string;
  texto: string;
  icono: IconType;
}

interface EnlacesBloqueProps {
  enlaces: Enlace[];
}

const EnlacesBloque: React.FC<EnlacesBloqueProps> = ({ enlaces }) => {
  return (
    <div className="flex justify-center flex-col ">
      {enlaces.map((enlace, index) => {
        const Icono = enlace.icono;
        const bgColor = `bg-${enlace.color}-500`;
        const hoverBgColor = `hover:bg-${enlace.color}-600`;
        return (
          <a
            key={index}
            href={enlace.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${bgColor} ${hoverBgColor} text-white font-bold py-3 px-4 rounded m-2`}
            style={{ backgroundColor: enlace.color }}
          >
            <Icono className="inline mr-2" />
            {enlace.texto}
          </a>
        );
      })}
    </div>
  );
};

export default EnlacesBloque;
