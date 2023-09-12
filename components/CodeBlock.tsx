import React from "react";
import { LiveProvider, LivePreview } from "react-live";
import dynamic from "next/dynamic";
interface Props {
  code?: string;
  setCode?: any;
}

const App = dynamic(
  () => import("@monaco-editor/react").then((mod) => mod.Editor),
  { ssr: false }
);

const CodeBlock = ({ code, setCode }: Props) => {
  return (
    <div className="lg:flex h-screen w-screen bg-neutral-100 dark:bg-semi-black">
      <LiveProvider code={code} scope={{}}>
        <div className="w-full overflow-y-scroll bg-neutral-100 dark:bg-semi-black h-screen">
          <div className="">
            <App
              height="100vh"
              defaultLanguage="html"
              defaultValue={code}
              onChange={setCode}
              theme="vs-dark"
              options={{
                tabSize: 2,
                insertSpaces: true,
              }}
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
