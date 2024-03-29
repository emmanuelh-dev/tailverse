import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerUser, loginUser } from "@/utils/authUtils";
const INITIAL_VALUES = {
  username: "",
  email: "",
  password: "",
};
const Register = () => {
  const [register, setRegister] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  1;
  async function onSubmit(values: {
    username: string;
    email: string;
    password: string;
  }) {
    const register =  await registerUser(values)
    if (register) {
      
    } else {
      // Si el register falló, hacemos algo aquí...
    }
  }

  const handleCheckbox = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <button
        onClick={() => setRegister(!register)}
        className="bg-black text-white hover:dark:bg-black hover:dark:text-white border-2 border-black dark:border-white hover:text-black hover:bg-white dark:bg-white dark:text-black px-4 py-2.5 rounded-3xl  text-sm max-sm:w-full max-sm:text-center"
      >
        Sign up
      </button>
      {register && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen dark:bg-black bg-white">
          <div className="bg-white dark:bg-black min-w-[20rem]">
            <h2 className="mb-2 text-4xl font-bold text-center dark:text-white">
              Register
            </h2>
            <Formik
              initialValues={INITIAL_VALUES}
              onSubmit={onSubmit}
              validate={(values) => {
                const errors: any = {};

                if (!values.email) {
                  errors.email = "Email is required";
                } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                  errors.email = "Email inválido";
                }

                if (!values.password) {
                  errors.password = "Email is required";
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
                      className="block w-full px-6 py-3 dark:text-white dark:bg-black text-black bg-white border border-neutral-100 rounded-3xl appearance-none placeholder:text-neutral-400 dark:placeholder:text-neutral-100 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
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
                      className="block w-full px-6 py-3 dark:text-white dark:bg-black text-black bg-white border border-neutral-100 rounded-3xl appearance-none placeholder:text-neutral-400 dark:placeholder:text-neutral-100 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
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
                        className="block w-full px-6 py-3 dark:text-white dark:bg-black text-black bg-white border border-neutral-100 rounded-3xl appearance-none placeholder:text-neutral-400 dark:placeholder:text-neutral-100 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500"
                      />
                      <div className="flex mt-3">
                        <input
                          id="showPassword"
                          type="checkbox"
                          className="h-5 w-5 text-white rounded-3xl checked:bg-black border-black dark:bg-black dark:border-white dark:checked:bg-white"
                          onChange={handleCheckbox}
                        />
                        <label
                          className="ml-2 text-black dark:text-white"
                          htmlFor="showPassword"
                        >
                          Show password
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <button
                      type="button"
                      onClick={() => setRegister(!register)}
                      className="items-center justify-center w-full px-6 py-2.5  text-center hover:dark:border-neutral-100 dark:text-black hover:dark:text-white  dark:bg-white text-white duration-200 p-3 mb-3 bg-black border-2 border-black rounded-3xl nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="items-center justify-center w-full px-6 py-2.5  text-center hover:dark:border-neutral-100 dark:text-black hover:dark:text-white  dark:bg-white text-white duration-200 p-3 mb-3 bg-black border-2 border-black rounded-3xl nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black "
                      data-sitekey="6LdJHo8nAAAAAEdfnFJucPDjxyOF-Cwf7LchjwQs"
                      data-callback={onSubmit}
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
    </div>
  );
};

export default Register;
