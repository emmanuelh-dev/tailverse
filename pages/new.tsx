import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CodeBlock from "../components/CodeBlock";
import Layout from "@/layout/LayoutHome";
import Modal from "@/components/Modal";
import { toast } from "react-hot-toast";
import UserStore from "@/store/user";
import Script from "next/script";

function ProtectedCode() {
  const [user, token] = UserStore(state => [state.user, state.token]);
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const [contentType, setContentType] = useState<string>("");
  const [code, setCode] = useState<string>(`
    <div class="bg-pink-400 p-8">
      <h1 class="text-4xl font-bold">Hello world!</h1>
      <p class="text-xl text-white">This is sample text.</p>
    </div>
  `);

  const handlePostToApi = () => {
    // Verificar si el código contiene "w-screen" o "h-screen"
    if (code.includes("w-screen") || code.includes("h-screen")) {
      toast.error("Please remove 'w-screen' or 'h-screen' from the code.");
      return;
    } else if (code.includes("type=")) {
      toast.error("Please use 'typeof' instead");
      return;
    }
    const requestBody = {
      name: "Input user id 3 RGB mamalon",
      author: user,
      source: code,
      type: contentType,
      rate: 0,
    };
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

  useEffect(() => {
    if (!token) {
      // Si no hay un token en localStorage, redirige al usuario a la página de inicio de sesión
      router.push("/");
    }
  }, [router, token, user, code, contentType]);

  return (
    <Layout title="Create a new component">
                  <Script src="https://cdn.tailwindcss.com"></Script>

      <div className="max-h-screen flex items-center justify-center">
        <div className="static mx-4">
          <CodeBlock code={code} setCode={setCode} />
          {!contentType && modalOpen && (
            <Modal
              setContentType={setContentType}
              contentType={contentType}
              setCode={setCode}
            />
          )}

          <button
            onClick={handlePostToApi}
            className="fixed bg-black dark:bg-white text-white dark:text-black  z-50 bottom-11 lg:right-14 p-4 rounded-3xl font-bold max-sm:block max-sm:w-full"
          >
            Add component
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default ProtectedCode;
