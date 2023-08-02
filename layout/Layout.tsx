import Head from "next/head";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { NextSeo } from "next-seo";
interface Props {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const Layout = ({ title, children, description }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" type="image/png" href="/img/logo.png" />
        <meta name="description" content={description} />

        <meta
          name="keywords"
          content="components, tailwind, web development, CSS"
        />
        <meta name="author" content="Emmanuel Hernandez | Tailverse | BysMax" />
        <meta name="language" content="en" />
        <meta name="robots" content="index,follow" />
      </Head>
      <NextSeo title={title} description={description} />
      <Header />
      <div className=" bg-white dark:bg-black px-4 overflow-hidden">
        <main className="container mx-auto mt-16">
          <div className="py-16">
            <h1 className="mt-1 bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-5xl font-extrabold uppercase tracking-tighter text-transparent sm:text-5xl lg:text-7xl">
              {title}
            </h1>
            <h2 className="order-first dark:text-white font-medium tracking-wide">
              {description}
            </h2>
          </div>
        </main>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
