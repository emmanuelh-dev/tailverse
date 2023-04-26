import Layout from "@/layout/Layout";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Card from "@/components/Card";
import { Inter } from 'next/font/google'
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

const All = ({ components }: Props) => {
  components.sort((a, b) => b.rate - a.rate);
  const title: string = `Tailwind CSS Components - 600+ Free examples ready to be used`;
  const description: string = `Tailverse is a gallery of ready-to-use components created with TailwindCSS. With Tailverse, you can easily incorporate pre-designed components into your web projects by simply copying, pasting, and customizing to fit your needs. Say goodbye to time-consuming coding and hello to a faster, more efficient web development experience.`;

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
        />
      </Head>
      <Layout title={title} description={description}>
        <div className="pt-14 container mx-auto min-h-screen">
        <div className="py-2 dark:text-white">
            <h1 className="py-4 dark:text-white font-bold lg:text-4xl">
              {title}
            </h1>
            <p>{description}</p>
          </div>
          <div className="flex flex-wrap">
            {components.map((component) => (
              <Card
                id={component.id}
                source={component.source}
                key={component.id}
                userName={component.author}
                type={component.type}
                rate={component.rate}
              />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/components`);
    const components = await res.json();
    return {
      props: {
        components,
      },
    };
  } catch (error) {
    console.error("Error fetching components:", error);
    return {
      props: {
        components: [],
      },
    };
  }
};

export default All;
