import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CodeBlock from "../components/CodeBlock";
import Layout from "@/layout/LayoutHome";
import Modal from "@/components/Modal";
import { toast } from "react-hot-toast";
import UserStore from "@/store/user";
import Script from "next/script";


function ProtectedCode() {
  const router = useRouter();
  const [user, token] = UserStore((state) => [state.user, state.token]);
  const setComponentSource = UserStore((state) => state.setComponentSource);
  const newComponent = UserStore((state) => state.newComponent);
  const { source } = newComponent;
  const handlePostToApi = () => {
    // Verificar si el código contiene "w-screen" o "h-screen"
   
    const requestBody = { ...newComponent };
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/components`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        toast.success(
          "Congratulations! The component has been added to the system!"
        );
      })
      .catch((error) => {
        console.error(error);
        toast("Oh no. Something went wrong.");
        return false;
      });
  };
  function SubmitButton() {
    return (
      <button
        onClick={handlePostToApi}
        className="fixed bg-black dark:bg-white text-white dark:text-black  z-50 bottom-11 lg:right-14 p-4 rounded-3xl font-bold max-sm:block max-sm:w-full"
      >
        Add component
      </button>
    );
  }
  
  useEffect(() => {
    if (!token) {
      // Si no hay un token en localStorage, redirige al usuario a la página de inicio de sesión
      router.push("/");
    }
  }, [router, token, user, source]);

  return (
    <Layout title="Create a new component">
      <Script src="https://cdn.tailwindcss.com"></Script>

      <div className="max-h-screen flex items-center justify-center">
        <div className="static mx-4">
          <CodeBlock code={source} setCode={setComponentSource} />
          <Modal />
          <SubmitButton />
        </div>
      </div>
    </Layout>
  );
}

export default ProtectedCode;
