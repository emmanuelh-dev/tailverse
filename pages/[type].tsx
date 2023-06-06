import Layout from "@/layout/Layout";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Card from "@/components/Card";

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
  const title: string = `Tailwind css ${components[0].type} | tailvese`;
  const description: string = `Get started with a large variety of Tailwind CSS ${components[0].type} examples for your web project`;

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
        />
      </Head>
      <Layout title={title} description={description}>
        <div className="pt-20 container mx-auto min-h-screen">
          <div className="py-2 dark:text-white">
            <h1 className="py-4 dark:text-white font-bold lg:text-4xl">
              {title}
            </h1>
            <p>{description}</p>
          </div>
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

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const type = context.params?.type; // or context.query.type if using query string

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
    const components = await res.json();

    return {
      props: {
        components,
      },
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
