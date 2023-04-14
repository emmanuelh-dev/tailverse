import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CodeBlock from "../components/CodeBlock";
import Layout from "@/layout/Layout";
import Modal from "@/components/Modal";

function ProtectedCode() {
  const router = useRouter();
  let token: string | null = null;
  let user: string | null = null;
  try {
    token = localStorage.getItem("token");
    user = localStorage.getItem("user");
  } catch (error) {
    console.error(error);
  }
  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const [contentType, setContentType] = useState<string>("");
  const [code, setCode] = useState<string>(`
    <div class="bg-pink-400 p-8">
      <h1 class="text-4xl font-bold">Hello world!</h1>
      <p class="text-xl text-white">This is sample text.</p>
    </div>
  `);

  useEffect(() => {
    if (!token) {
      // Si no hay un token en localStorage, redirige al usuario a la página de inicio de sesión
      router.push("/");
    }
  }, [router, token]);

  const handlePostToApi = () => {
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
        // Procesa la respuesta de la API
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // setModalOpen(false);

  // Renderiza el componente CodeBlock y el botón de enviar
  return (
    <Layout title="Create a new component">
      <div className="max-h-screen flex items-center justify-center">
        <div className="static">
          <CodeBlock code={code} setCode={setCode} />
          <button
            onClick={() => setModalOpen(true)}
            className="fixed bg-black dark:bg-white z-50 bottom-11 right-14 p-4 rounded-xl font-bold"
          >
            Seleccionar tipo de contenido
          </button>
          {!contentType && modalOpen && (
            <Modal setContentType={setContentType} contentType={contentType} />
          )}

          <button
            onClick={handlePostToApi}
            className="fixed bg-black dark:bg-white z-50 bottom-11 left-14 p-4 rounded-xl font-bold"
          >
            Enviar a API
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default ProtectedCode;
