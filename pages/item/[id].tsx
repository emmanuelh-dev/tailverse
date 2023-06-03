import React, { useState, useEffect } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "@/layout/Layout2";
import Head from "next/head";
import CodeBlock from "@/components/CodeBlock";
import { toast } from "react-hot-toast";

interface Component {
  source: string;
  id: number;
  author: string;
  type: string;
}

type Props = {
  components: Component[];
};

type Params = {
  id: string;
};

type StaticProps = {
  props: Props;
};

const Component = ({ components }: Props) => {
  const [code, setCode] = useState<string>("");
  useEffect(() => {
    setCode(components[0].source);
  }, [components]);
  let token: string | null = null;
  let user: string | null = null;
  try {
    token = sessionStorage.getItem("token");
    user = sessionStorage.getItem("user");
  } catch (error) {
    console.error(error);
  }
  const handlePostToApi = () => {
    // Verificar si el código contiene "w-screen" o "h-screen"
    if (code.includes("w-screen") || code.includes("h-screen")) {
      toast.error("Please remove 'w-screen' or 'h-screen' from the code.");
      return;
    }
    const requestBody = {
      id: components[0].id,
      name: "Input user id 3 RGB mamalon",
      author: components[0].author,
      source: code,
      type: components[0].type.toLowerCase(),
    };
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/components/updateComponent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        console.log(response);

        if (response.ok) {
          toast.success(
            "Congratulations! The component has been update to the system!"
          );
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout title="Create a new component">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
        />
      </Head>
      <div className="h-screen flex items-center justify-center">
        <div className="static mx-4">
          <CodeBlock code={code} setCode={setCode} />
          <button
            onClick={handlePostToApi}
            className="fixed bg-black dark:bg-white text-white dark:text-black  z-50 bottom-11 lg:right-14 p-4 rounded-xl font-bold max-sm:block max-sm:w-full"
            style={{
              display: user === components[0].author ? "block" : "none",
            }}
          >
            Edit component
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Component;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/components`);
  const components: Component[] = await res.json();

  const paths = components.map((component) => ({
    params: { id: component.id.toString() },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: params?.id,
    }),
  };

  const componentRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/components/getById`,
    requestOptions
  );
  const components: Component[] = await componentRes.json();

  return {
    props: {
      components,
    },
  };
};
