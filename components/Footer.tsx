import React from "react";
import Image from "next/image"
import Link from "next/link";
const Footer = () => {
  return (
    <div className="dark:bg-black  dark:text-white text-lg p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-10">
          <div>
            <Image
              width={80}
              height={80}
              objectFit="cover"
              src={"/img/logo.png"}
              alt=""
            />
          </div>
          <div>
          <p>
            <span className="font-bold text-right w-1/2">Tailverse</span> | All rights reserved © {new Date().getFullYear()}
          </p>
          <div>
            <Link href="/terms">
            Terms of use
            </Link>
            <Link href="/privacy-policy">
            Privacy Policy
            </Link>
          </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
