import "@/styles/globals.css";
import toast, { Toaster } from "react-hot-toast";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid",
            borderColor: "pink", // Agregar borde rosa
            padding: "16px",
            color: "white", // Cambiar color del texto a blanco
            background: "black",
            textAlign: "center",
          },
        }}
      />
    </>
  );
}
