import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Card from "@/components/Card";
import Layout from "@/layout/Layout";

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
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
        />
      </Head>
      <Layout title={title} description={description}>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto flex max-w-4xl flex-col pt-16">
          <h1 className="mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-5xl font-extrabold uppercase tracking-tighter text-transparent sm:text-5xl lg:text-7xl">
          {title}
          </h1>
          <h2 className="order-first bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-medium tracking-wide text-transparent">
          {description}
          </h2>
        </div>
      </div>
        <div className="pt-20 container mx-auto min-h-screen">
          <div className="flex flex-wrap">
            {components.map((component) => (
              <Card
                source={component.source}
                key={component.id}
                userName={component.author}
                type={component.type}
                rate={component.rate}
                id={component.id}
              />
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/components/types`);
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
