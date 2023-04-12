import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CodeBlock from "../components/CodeBlock";
import Layout from "@/layout/Layout";
import Modal from "@/components/Modal";

function ProtectedCode() {
  const router = useRouter();
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const [code, setCode] = useState(`
    <div class="bg-pink-400 p-8">
      <h1 class="text-4xl font-bold">Hello world!</h1>
      <p class="text-xl text-white">This is sample text.</p>
    </div>
  `);

  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const [contentType, setContentType] = useState<string>("");

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
    fetch("http://localhost:3000/components", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        // Procesa la respuesta de la API
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleModalSubmit = (selectedContentType: string) => {
    setContentType(selectedContentType);
    setModalOpen(false);
  };

  // Renderiza el componente CodeBlock y el botón de enviar
  return (
    <Layout>
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
            <Modal
              onClose={() => setModalOpen(false)}
              onSubmit={handleModalSubmit}
              setContentType={setContentType}
              contentType={contentType}
            />
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
