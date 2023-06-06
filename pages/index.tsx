import Layout from "@/layout/Layout";
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import CardUser from "@/components/CardUser";
import Image from "next/image";
import Link from "next/link";
interface Component {
  source: string;
  id: number;
  author: string;
  type: string;
  rate: number;
}

type User = {
  username: string;
  name: string;
  email: string;
  id: number;
  component_count: number;
};

type Props = {
  users: User[];
  components: Component[];
};

const index = ({ components, users }: Props) => {
  const totalComponents = components.length;
  const totalUsers = users.length;
  // Función de comparación
  // Función de comparación
  function compararPorComponentCount(a: User, b: User) {
    return b.component_count - a.component_count;
  }

  // Ordenamiento
  users.sort(compararPorComponentCount);

  // Imprimir el arreglo ordenado
  console.log(users);

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
        />
      </Head>
      <Layout title="Free and Premium UI components ready to built with Tailwind CSS.">
        <div className="pt-20 px-4 container mx-auto min-h-screen">
          <div className="">
            <div className="flex items-center justify-center min-h-screen mx-auto max-w-5xl ">
              <div>
                <h1 className="text-5xl lg:text-6xl font-extrabold text-center text-black dark:text-white">
                  Open-Source Tailwind Components for Any Project
                </h1>
                <p className="text-xl text-center font-light text-neutral-400 border-dashed border border-neutral-500 my-10 py-2 w-full">
                  Create, Share, and Use Beautiful Custom Elements Built with
                  Tailwind CSS.
                </p>
                <div className="grid md:grid-cols-3 gap-2 max-w-5xl mx-auto">
                  <div className="pt-10 rounded-3xl dark:text-white justify-center text-center py-2 text-3xl">
                    <span className="font-bold text-6xl">
                      {totalComponents}
                    </span>
                    <p className="py-6 text-xl text-center font-light text-neutral-400">
                      Community-Crafted UI Elements
                    </p>
                  </div>
                  <div className="pt-10 rounded-3xl dark:text-white justify-center text-center py-2 text-3xl">
                    <span className="font-bold text-6xl">{totalUsers}</span>
                    <p className="py-6 text-xl text-center font-light text-neutral-400">
                      Contributors
                    </p>
                  </div>
                  <div className="pt-10 rounded-3xl dark:text-white justify-center text-center py-2 text-3xl">
                    <span className="font-bold text-6xl">100%</span>
                    <p className="py-6 text-xl text-center font-light text-neutral-400">
                      Free for Personal and Commercial Use
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section>
            <div className="max-w-6xl mx-auto px-4 py-10">
              <h2 className="dark:text-white font-bold text-center text-6xl py-10">
                Key Features
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-500 mb-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm1 2h10v10H5V4zm1 1v8h8V5H6zm3 3v2h2V8h-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold text-neutral-800 dark:text-white mb-2">
                    Easy to Use
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-300 text-center">
                    Utilize our ready-to-use components with ease, saving
                    development time and effort.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-500 mb-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm1-8a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0v1zm0 2a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0v1zm0 2a1 1 0 0 1-2 0v-1a1 1 0 0 1 2 0v1zm2-4a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1zm-4 0a1 1 0 0 1-1 1H7a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold text-neutral-800 dark:text-white mb-2">
                    Customizable
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-300 text-center">
                    Tailor the components to match your projects design with
                    easy-to-use customization options.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-500 mb-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2a2 2 0 0 1 2 2v4.586l1.707-1.707a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-8-8A1 1 0 0 1 6 1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2zm-4 7V4h3l.001 3H15a1 1 0 0 1 1 1v7h-2v-3H8v3H6v-7a1 1 0 0 1 1-1h3.001L10 4h3v5h-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold text-neutral-800 dark:text-white mb-2">
                    Responsive Design
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-300 text-center">
                    Create responsive layouts with ease using our components
                    that adapt to various screen sizes.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="max-w-6xl mx-auto px-4 py-10">
              <div className="py-10">
                <h2 className="dark:text-white font-bold text-center text-5xl md:text-6xl ">
                  Meet our Contributors
                </h2>
                <p className="text-center text-xl text-neutral-400">
                  Discover the talented individuals who have contributed to our
                  project.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-2">
                {users.slice(0, 6).map((user) => (
                  <CardUser
                    key={user.id}
                    username={user.username}
                    totalPosts={user.component_count}
                    profileLink={user.username}
                  />
                ))}
              </div>
              <p className="text-center mt-8 text-neutral-500">
                Join our community and become a contributor too!
              </p>
            </div>
          </section>
          <section className="py-10">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <h2 className="text-5xl lg:text-6xl font-bold text-neutral-800 dark:text-white mb-4">
                  Need a more professional service?
                </h2>
                <p className="text-xl text-neutral-600 dark:text-neutral-400">
                  Contact us for all your professional needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-3xl shadow-lg transition-colors duration-300 my-10"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex flex-wrap gap-10 justify-evenly">
                <div className="md:max-w-[250px] flex flex-col h-full bg-black rounded-3xl dark:border-white border">
                  <div className="px-6 py-8 sm:p-10 sm:pb-6">
                    <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                      <div className="">
                        <h2 className="text-lg font-medium tracking-tighter text-white lg:text-3xl">
                          Starter
                        </h2>
                        <p className="mt-2 text-sm text-neutral-100">
                          Tailor-made landing page design using Tailwind.
                        </p>
                      </div>
                      <div className="mt-6">
                        <p>
                          <span className="text-5xl font-light tracking-tight text-white">
                            $100
                          </span>
                          <span className="text-base font-medium text-white">
                            /mo
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex px-6 pb-8 sm:px-8">
                    <Link
                      href="/contact"
                      className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-3xl nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white"
                      aria-describedby="tier-starter"
                    >
                      Get started
                    </Link>
                  </div>
                </div>

                <div className="md:max-w-[250px] flex flex-col h-full bg-white rounded-3xl border-black border">
                  <div className="px-6 py-8 sm:p-10 sm:pb-6">
                    <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                      <div className="">
                        <h2 className="text-lg font-medium tracking-tighter text-neutral-600 lg:text-3xl">
                          Starter
                        </h2>
                        <p className="mt-2 text-sm text-neutral-500">
                          Complete website design and development using
                          Tailwind.
                        </p>
                      </div>
                      <div className="mt-6">
                        <p>
                          <span className="text-5xl font-light tracking-tight text-black">
                            $150
                          </span>
                          <span className="text-base font-medium text-neutral-500">
                            /mo
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex px-6 pb-8 sm:px-8">
                    <Link
                      href="/contact"
                      className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-3xl nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                      aria-describedby="tier-company"
                    >
                      Get started
                    </Link>
                  </div>
                </div>

                <div className="md:max-w-[250px] flex flex-col h-full bg-black rounded-3xl dark:border-white border">
                  <div className="px-6 py-8 sm:p-10 sm:pb-6">
                    <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                      <div className="">
                        <h2 className="text-lg font-medium tracking-tighter text-white lg:text-3xl">
                          Corporate
                        </h2>
                        <p className="mt-2 text-sm text-neutral-100">
                          Comprehensive Tailwind-based web application
                          development.
                        </p>
                      </div>
                      <div className="mt-6">
                        <p>
                          <span className="text-5xl font-light tracking-tight text-white">
                            $250
                          </span>
                          <span className="text-base font-medium text-white">
                            /mo
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex px-6 pb-8 sm:px-8">
                    <Link
                      href="/contact"
                      className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-3xl nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white"
                      aria-describedby="tier-starter"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="max-w-6xl mx-auto px-4 py-10">
              <h2 className="dark:text-white font-bold text-center text-5xl md:text-6xl py-10">
                Testimonials
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Image
                    width={300}
                    height={300}
                    src="/images/testimonial1.jpg"
                    alt="Testimonial 1"
                    className="w-24 h-24 rounded-3xl object-cover mb-4"
                  />
                  <h3 className="text-2xl font-bold text-neutral-800 dark:text-white mb-2">
                    John Doe
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-300 text-center">
                    &ldquo;The Tailwind components have greatly improved the
                    efficiency and aesthetics of our web projects. Highly
                    recommended!&ldquo;
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    width={300}
                    height={300}
                    src="/images/testimonial2.jpg"
                    alt="Testimonial 2"
                    className="w-24 h-24 rounded-3xl object-cover mb-4"
                  />
                  <h3 className="text-2xl font-bold text-neutral-800 dark:text-white mb-2">
                    Jane Smith
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-300 text-center">
                    &ldquo;As a developer, I love the flexibility and
                    time-saving aspects of using the Tailwind components.
                    They&apos;ve become an essential part of my toolkit.&ldquo;
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    width={300}
                    height={300}
                    src="/images/testimonial3.jpg"
                    alt="Testimonial 3"
                    className="w-24 h-24 rounded-3xl object-cover mb-4"
                  />
                  <h3 className="text-2xl font-bold text-neutral-800 dark:text-white mb-2">
                    Sarah Johnson
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-300 text-center">
                    &ldquo;The Tailwind components have allowed us to rapidly
                    develop and launch beautiful websites. The clean code and
                    extensive documentation are a developer&apos;s dream.&ldquo;
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/getUsers`);
  const users = await res.json();

  const componentRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/components`
  );
  const components = await componentRes.json();

  return {
    props: {
      users,
      components,
    },
  };
}
