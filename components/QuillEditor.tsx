import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import 'tailwindcss/dist/tailwind.min.css';

const CodeBlock = () => {
  const [code, setCode] = useState(`
    <div class="bg-blue-200 p-8">
      <h1 class="text-4xl font-bold">Hello world!</h1>
      <p class="text-xl">This is some example text.</p>
    </div>
  `);

  return (
    <div className="flex">
      <LiveProvider code={code} scope={{}}>
        <div style={{ width: '50%' }}>
          <LiveEditor onChange={setCode} />
          <LiveError />
        </div>
        <div style={{ width: '50%' }}>
          <LivePreview />
        </div>
      </LiveProvider>
    </div>
  );
};

export default CodeBlock;
