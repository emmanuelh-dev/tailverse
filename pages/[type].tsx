import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Card from "@/components/Card";
import Layout from "@/layout/Layout";

import Script from "next/script";

interface Component {
  source: string;
  id: number;
  author: string;
  type: string;
  rate: number;
}

interface Props {
  components: Component[];
}

const ComponentsPage = ({ components }: Props) => {
  components.sort((a, b) => b.rate - a.rate);
  const title = `Tailwind css ${components[0].type}`;
  const description = `Get started with a large variety of Tailwind CSS ${components[0].type} examples for your web project`;

  return (
    <div>
<Script src="/tailwind.js"></Script>
      <Layout title={title} description={description}>
        <div className="min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {components.map((component) => (
              <Card
                source={component.source}
                key={component.id}
                userName={component.author}
                type={component.type}
                rate={component.rate}
                id={component.id}
              ></Card>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ComponentsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/components/types`
    );
    const types: string[] = await res.json();

    const paths = types.map((type) => ({
      params: { type },
    }));

    return { paths, fallback: "blocking" };
  } catch (error) {
    console.error(error);
    return { paths: [], fallback: "blocking" };
  }
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const type = context.params?.type as string;

  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type }),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/components/getByType`,
      requestOptions
    );
    const components: Component[] = await res.json();

    return {
      props: {
        components,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        components: [],
      },
    };
  }
};
