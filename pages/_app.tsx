import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />
      <Analytics />
      <Component {...pageProps} />
      <Toaster
        toastOptions={{
          className: "",
          // style: {
          //   border: "1px solid",
          //   borderColor: "pink", // Agregar borde rosa
          //   padding: "16px",
          //   color: "white", // Cambiar color del texto a blanco
          //   background: "black",
          //   textAlign: "center",
          // },
        }}
      />
    </>
  );
}
