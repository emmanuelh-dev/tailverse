import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginUser } from "@/utils/authUtils";
import { useState } from "react";

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
};

function LoginModal({ open, onClose }: LoginModalProps) {
  const handleSubmit = async (values: { email: string; password: string }) => {
    const login = await loginUser(values);
    if (login) {
      // Si el login también fue exitoso, hacemos algo aquí...
      onClose();
    } else {
      // Si el login falló, hacemos algo aquí...
    }
  };

  return (
    <>
      {open && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen max-sm:bg-semi-black">
          <div className="bg-white dark:bg-semi-black p-6 lg:border border-pink-500 rounded-xl max-w-[18rem]">
            <h2 className="mb-2 text-2xl font-bold text-center dark:text-white">
              Log In
            </h2>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={handleSubmit}
              validate={(values) => {
                const errors: any = {};

                if (!values.email) {
                  errors.email = "Email es requerido";
                } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                  errors.email = "Email inválido";
                }

                if (!values.password) {
                  errors.password = "Contraseña es requerida";
                }

                return errors;
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block mb-2 font-bold dark:text-white"
                    >
                      Mail:
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Mail Address"
                      className="w-full px-3 py-2 leading-tight border-b dark:text-white dark:bg-semi-black focus:outline-none focus:shadow-outline border-neutral-400"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block mb-2 font-bold dark:text-white"
                    >
                      Password:
                    </label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Contraseña"
                      className="w-full px-3 py-2 leading-tight border-b dark:bg-semi-black focus:outline-none focus:shadow-outline border-neutral-400 dark:text-white"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-1/2 px-4 py-2 mr-2 text-sm font-medium text-white bg-[#E54C9E] rounded-md"
                    >
                      cancel
                    </button>
                    <button
                      type="submit"
                      className="w-1/2 px-4 py-2 text-sm font-medium text-white bg-[#4B7FF0] border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      LogIn
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginModal;
