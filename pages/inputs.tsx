import Layout from "@/layout/Layout";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Card from "@/components/Card";
interface Component {
  source: string;
  id: number;
  author: string;
  type:string;
  rate:number;
}
interface Props {
  components: Component[];
}

const inputs = ({ components }: Props) => {
  components.sort((a, b) => b.rate - a.rate);
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
        />
      </Head>
      <Layout title="Tailverse Inputs">
        <div className="pt-14 container mx-auto min-h-screen">
          <h1>Todos los componentes</h1>
          <div className="flex flex-wrap">
            {components.map((component) => (
              <Card source={component.source} key={component.id} userName={component.author} type={component.type} rate={component.rate} id={component.id}/>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default inputs;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "inputs" }),
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
