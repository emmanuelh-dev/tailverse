import Head from "next/head";
import { Header } from "@/components/Header";
interface Props {
  title?: string;
  children: React.ReactNode;
}
const Layout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" type="image/png" href="/img/logo.png"/>
      </Head>
      <Header />
      <div className="min-h-screen bg-white dark:bg-black px-4">{children}</div>
    </>
  );
};

export default Layout;
