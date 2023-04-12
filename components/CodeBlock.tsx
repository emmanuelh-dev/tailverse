import React, { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import Head from "next/head";
interface Props {
  code: string;
  setCode: any;
}
const CodeBlock = ({ code, setCode }: Props) => {
  return (
    <div className="lg:flex pt-14 h-screen w-screen">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.7/tailwind.min.css"
        />
      </Head>
      <LiveProvider code={code} scope={{}}>
        <div className="w-full h-full overflow-scroll bg-neutral-100 dark:bg-neutral-900 max-h-full flex">
          <LiveEditor onChange={setCode} />
          <LiveError />
        </div>
        <div className="w-full bg-neutral-100 dark:bg-neutral-900 h-full flex items-center justify-center">
          <div>
            <LivePreview />
          </div>
        </div>
      </LiveProvider>
    </div>
  );
};

export default CodeBlock;
