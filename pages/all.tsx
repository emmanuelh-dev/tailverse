import Layout from "@/layout/Layout";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Card from "@/components/Card";
interface Component {
  source: string;
  id: number;
  author: string;
  type: string;
  rate:number;
}
interface Props {
  components: Component[];
}

const All = ({ components }: Props) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
        />
      </Head>
      <Layout title="All Tailverse components">
        <div className="pt-14 container mx-auto min-h-screen">
          <h1>All components</h1>
          <div className="flex flex-wrap">
            {components.map((component) => (
              <Card
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
