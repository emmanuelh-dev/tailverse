import React from "react";
import QRGenerator from "./QRGenerator";

const QRView = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto flex max-w-3xl flex-col">
          <h1 className="mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-4xl font-extrabold uppercase tracking-tighter text-transparent sm:text-5xl lg:text-7xl">
            Free QR Generator
          </h1>
          <h2 className="order-first bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-medium tracking-wide text-transparent">
            Tailvese by EmmanuelH.Dev
          </h2>
        </div>
      </div>
      <QRGenerator />
    </div>
  );
};

export default QRView;
