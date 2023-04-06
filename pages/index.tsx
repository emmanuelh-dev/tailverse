import Layout from "@/layout/Layout";
const home = () => {
  return (
    <div>
      <Layout title="Open-Source tailwind elements for any project">
        <div className="">
        <div className="flex items-center justify-center min-h-screen max-w-7xl mx-auto ">
          <div>
            <h1 className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold uppercase text-center">
              Open-Source tailwind elements for any project
            </h1>
            <p className="text-3xl text-center py-6 text-black dark:text-white ">
              Create, share, and use beautiful custom elements made with
              tailwindcss.
            </p>
          </div>
        </div>
        </div>
      </Layout>
    </div>
  );
};

export default home;
