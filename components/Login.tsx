import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginUser, useTokenObserver } from "@/utils/authUtils";
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
  useTokenObserver();
  return (
    <>
      {open && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen dark:bg-black bg-white">
          <div className="bg-white dark:bg-black min-w-[20rem]">
            <h2 className="mb-2 text-4xl font-bold text-center dark:text-white">
              Log In
            </h2>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={handleSubmit}
              validate={(values) => {
                const errors: any = {};

                if (!values.email) {
                  errors.email = "Email is required";
                } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                  errors.email = "Invalid email";
                }

                if (!values.password) {
                  errors.password = "Password is required";
                }

                return errors;
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block mb-2 font-bold dark:text-white text-sm w-full"
                    >
                      Mail:
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Mail Address"
                      className="block w-full px-6 py-3 dark:text-white dark:bg-black text-black bg-white border border-neutral-100 rounded-full appearance-none placeholder:text-neutral-400 dark:placeholder:text-neutral-100 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
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
                      className="block mb-2 font-bold dark:text-white text-sm"
                    >
                      Password:
                    </label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Contraseña"
                      className="block w-full px-6 py-3 dark:text-white dark:bg-black text-black bg-white border border-neutral-100 rounded-full appearance-none placeholder:text-neutral-400 dark:placeholder:text-neutral-100 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={onClose}
                      className="items-center justify-center w-full px-6 py-2.5  text-center hover:dark:border-neutral-100 dark:text-black hover:dark:text-white  dark:bg-white text-white duration-200 p-3 mb-3 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                    >
                      cancel
                    </button>
                    <button
                      type="submit"
                      className="items-center justify-center w-full px-6 py-2.5  text-center hover:dark:border-neutral-100 dark:text-black hover:dark:text-white  dark:bg-white text-white duration-200 p-3 mb-3 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
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
