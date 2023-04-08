import React, { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import Head from "next/head";
const CodeBlock = () => {
  const [code, setCode] = useState(`
  <div class="bg-pink-400 p-8">
    <h1 class="text-4xl font-bold">Hello world!</h1>
    <p class="text-xl text-white">This is sample text.</p>
  </div>

  `);

  return (
    <div className="flex pt-14">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.7/tailwind.min.css"
        />
      </Head>
      <LiveProvider code={code} scope={{}}>
        <div className="w-1/2 bg-black">
          <LiveEditor onChange={setCode} className=""/>
          <LiveError />
        </div>
        <div className="w-1/2 bg-black ">
          <LivePreview />
        </div>
      </LiveProvider>
    </div>
  );
};

export default CodeBlock;
