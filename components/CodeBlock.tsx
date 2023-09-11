import React from "react";
import { LiveProvider, LivePreview } from "react-live";
interface Props {
  code?: string;
  setCode?: any;
}

// Por ejemplo, en pages/prueba.js
import dynamic from "next/dynamic";

const App = dynamic(
  // Importamos dinámicamente el componente del editor Monaco
  () => import("@monaco-editor/react").then((mod) => mod.Editor),
  { ssr: false } // Indicamos que no renderice este componente en el servidor (solo en el cliente)
);

const CodeBlock = ({ code, setCode }: Props) => {
  return (
    <div className="lg:flex h-screen w-screen bg-neutral-100 dark:bg-semi-black">
      <LiveProvider code={code} scope={{}}>
        <div className="w-full overflow-y-scroll bg-neutral-100 dark:bg-semi-black h-screen">
          <div className="">
            <App
              height="90vh"
              defaultLanguage="html"
              defaultValue={code}
              onChange={setCode}
              theme="vs-dark"
            />
          </div>
        </div>
        <div className="w-full bg-neutral-100 dark:bg-semi-black h-full flex items-center justify-center overflow-scroll">
          <div className="">
            <LivePreview />
          </div>
        </div>
      </LiveProvider>
    </div>
  );
};

export default CodeBlock;
