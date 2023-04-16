import React, { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import Head from "next/head";
interface Props {
  code: string;
  setCode: any;
}
const CodeBlock = ({ code, setCode }: Props) => {
  return (
    <div className="lg:flex h-screen w-screen bg-neutral-100 dark:bg-neutral-950">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.7/tailwind.min.css"
        />
      </Head>
      <LiveProvider code={code} scope={{}}>
        <div className="w-full overflow-y-scroll bg-neutral-100 dark:bg-neutral-950 h-screen">
          <div className="pt-16">
            <LiveEditor onChange={setCode} className="w-full" />
            <LiveError />
          </div>
        </div>
        <div className="w-full bg-neutral-100 dark:bg-neutral-950 h-full flex items-center justify-center">
          <div>
            <LivePreview />
          </div>
        </div>
      </LiveProvider>
    </div>
  );
};

export default CodeBlock;
