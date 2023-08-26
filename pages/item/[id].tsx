import React, { useState, useEffect } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "@/layout/LayoutHome";
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
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<string | null | any>("");
  const [form, setForm] = useState(false);
  const [componentName, setComponentName] = useState("");
  const [authorName, setAuthorName] = useState("");

  useEffect(() => {
    setCode(components[0].source);
    try {
      setToken(sessionStorage.getItem("token"));
      setUser(sessionStorage.getItem("user"));
    } catch (error) {
      console.error(error);
    }
  }, [components]);

  const fetchWithAuth = async (url: string, options: object) => {
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Network response was not ok.");
    }
    return res;
  };

  const showForm = () => {
    setForm(!form);
  };

  const handlePostToApi = async () => {
    if (code.includes("w-screen") || code.includes("h-screen")) {
      toast.error("Please remove 'w-screen' or 'h-screen' from the code.");
      return;
    }

    const requestBody = {
      id: components[0].id,
      name: componentName,
      author: user,
      source: code,
      type: components[0].type.toLowerCase(),
    };

    try {
      const response = await fetchWithAuth(
        `${process.env.NEXT_PUBLIC_API_URL}/components/updateComponent`,
        {
          method: "POST",
          body: JSON.stringify(requestBody),
        }
      );
      console.log(response);
      toast.success(
        "Congratulations! The component has been updated in the system!"
      );
      setForm(!form);
    } catch (error) {
      console.log(error);
    }
  };

  const editButtonStyle = user === components[0].author ? "block" : "none";

  return (
    <Layout title="Create a new component">
      <div className="h-screen flex items-center justify-center">
        <div className="static mx-4">
          <CodeBlock code={code} setCode={setCode} />
          {form && (
            <div className="fixed top-0 left-0 w-screen h-screen justify-center z-[100] bg-white dark:bg-black items-center flex">
              <div className="max-w-xl text-white">
                <h1 className="font-bold text-xl pb-8">
                  Before saving your component, there are just a few details
                  left.
                </h1>
                <label
                  htmlFor="name"
                  className="block mb-2 font-bold dark:text-white text-sm w-full"
                >
                  Name:
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Component Name"
                  className="block w-full px-6 py-3 dark:text-white dark:bg-black text-black bg-white border border-neutral-100 rounded-3xl appearance-none placeholder:text-neutral-400 dark:placeholder:text-neutral-100 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  value={componentName}
                  onChange={(e) => setComponentName(e.target.value)}
                />
                <label
                  htmlFor="author"
                  className="block mb-2 font-bold dark:text-white text-sm w-full"
                >
                  Author:
                </label>
                <input
                  id="author"
                  name="author"
                  type="text"
                  placeholder="Author Name"
                  className="block w-full px-6 py-3 dark:text-white dark:bg-black text-black bg-white border border-neutral-100 rounded-3xl appearance-none placeholder:text-neutral-400 dark:placeholder:text-neutral-100 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  value={user}
                  disabled={true}
                />
                <button
                  onClick={handlePostToApi}
                  className="block w-full mt-4 bg-black dark:bg-white text-white dark:text-black z-50 bottom-11 lg:right-14 p-3 rounded-3xl font-bold max-sm:block max-sm:w-full"
                >
                  Submit
                </button>
              </div>
            </div>
          )}

          <button
            onClick={showForm}
            className="fixed bg-black dark:bg-white text-white dark:text-black  z-50 bottom-11 lg:right-14 p-4 rounded-3xl font-bold max-sm:block max-sm:w-full"
            style={{
              display: editButtonStyle,
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

  return { paths, fallback: "blocking" }; // Revalidar cada hora (3600 segundos)
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
    revalidate: 3600,
  };
};
