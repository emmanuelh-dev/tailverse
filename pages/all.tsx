import Layout from "@/layout/Layout";
import { GetStaticProps } from "next";
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

const All = ({ components }: Props) => {
  components.sort((a, b) => b.rate - a.rate);
  const title: string = `Tailwind CSS Components - 600+ Free examples ready to be used`;
  const description: string = `Tailverse is a gallery of ready-to-use components created with TailwindCSS. With Tailverse, you can easily incorporate pre-designed components into your web projects by simply copying, pasting, and customizing to fit your needs. Say goodbye to time-consuming coding and hello to a faster, more efficient web development experience.`;

  return (
    <div>
      <Layout title={title} description={description}>
      <div className="container mx-auto min-h-screen">
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/components`);
    const components = await res.json();
    return {
      props: {
        components,
      },
      revalidate: 3600, // Volver a generar la página cada 1 hora (3600 segundos)
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
