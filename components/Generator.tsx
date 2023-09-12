import React from "react";
import Head from "next/head";

interface Props {
  generatedCode: any;
}

const Generator = ({ generatedCode }: Props) => (
  <div dangerouslySetInnerHTML={{ __html: generatedCode }}></div>
);

export default Generator;
