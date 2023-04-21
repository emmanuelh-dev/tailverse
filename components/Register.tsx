import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerUser, loginUser } from "@/utils/authUtils";
import { useState } from "react";

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
};

function LoginModal({ open, onClose }: LoginModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (values: {
    username: string;
    email: string;
    password: string;
  }) => {
    const register = await registerUser(values);
    if (register) {
      const login = await loginUser(values);
      onClose();
    } else {
      // Si el register falló, hacemos algo aquí...
    }
  };

  return (
    <>
      {open && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen dark:bg-black bg-white">
          <div className="bg-white dark:bg-black min-w-[20rem]">
            <h2 className="mb-2 text-4xl font-bold text-center dark:text-white">
              Register
            </h2>
            <Formik
              initialValues={{ username: "", email: "", password: "" }}
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
                      htmlFor="username"
                      className="block mb-2 font-bold dark:text-white text-sm w-full"
                    >
                      Name:
                    </label>
                    <Field
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Nickname"
                      className="block w-full px-6 py-3 dark:text-white dark:bg-black text-black bg-white border border-neutral-100 rounded-full appearance-none placeholder:text-neutral-400 dark:placeholder:text-neutral-100 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
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
                      className="block mb-2 font-bold dark:text-white text-sm w-full"
                    >
                      Password:
                    </label>
                    <div className="">
                      <Field
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="block w-full px-6 py-3 dark:text-white dark:bg-black text-black bg-white border border-neutral-100 rounded-full appearance-none placeholder:text-neutral-400 dark:placeholder:text-neutral-100 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                        />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500"
                      />
                      {/* <button
                        className=""
                        onClick={(e) => {
                          e.preventDefault();
                          if (showPassword === false) {
                            setShowPassword(true);
                          } else {
                            setShowPassword(false);
                          }
                        }}
                      >
                        Show
                      </button> */}
                    </div>
                  </div>
                  <div className="">
                    <button
                      type="button"
                      onClick={onClose}
                      className="items-center justify-center w-full px-6 py-2.5  text-center hover:dark:border-neutral-100 dark:text-black hover:dark:text-white  dark:bg-white text-white duration-200 p-3 mb-3 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="items-center justify-center w-full px-6 py-2.5  text-center hover:dark:border-neutral-100 dark:text-black hover:dark:text-white  dark:bg-white text-white duration-200 p-3 mb-3 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                    >
                      Register
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
