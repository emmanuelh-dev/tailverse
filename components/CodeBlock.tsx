import React, { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import Head from "next/head";
interface Props {
  code?: string;
  setCode?: any;
}
const CodeBlock = ({ code, setCode }: Props) => {
  return (
    <div className="lg:flex h-screen w-screen bg-neutral-100 dark:bg-semi-black">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
        />
      </Head>
      <LiveProvider code={code} scope={{}}>
        <div className="w-full overflow-y-scroll bg-neutral-100 dark:bg-semi-black h-screen">
          <div className="pt-20">
            <LiveEditor onChange={setCode} className="w-full text-sm" />
            <LiveError />
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
