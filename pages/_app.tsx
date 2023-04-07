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
            border: "1px solid #713200",
            padding: "16px",
            color: "purple",
            background: "black",
          },
        }}
      />
    </>
  );
}
