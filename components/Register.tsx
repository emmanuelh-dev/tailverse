import { useState } from "react";
import toast from 'react-hot-toast';

type RegistroModalProps = {
  open: boolean;
  onClose: () => void;
};

function RegistroModal({ open, onClose }: RegistroModalProps) {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(process.env.API_URL)

    const response = await fetch(`http://localhost:3000/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password  }),
    });
    if (response.ok) {
      toast.success('Successfully created!');
      onClose();
    } else {
      toast('Oh no.');
    }
  };

  return (
    <>
      {open && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center">
          <div className="bg-white dark:bg-semi-black p-6 rounded-xl max-w-[18rem]">
            <h2 className="mb-2 font-bold dark:text-white text-center text-2xl">
              Sign up
            </h2>
            <p className="text-lg dark:text-white font-light text-center">
              Create a free account with your email.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block mb-2 dark:text-white font-bold "
                >
                  Username:
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="dark:text-white w-full dark:bg-semi-black border-b py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-neutral-400"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 dark:text-white font-bold "
                >
                  Mail:
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Mail Address"
                  className="dark:text-white w-full dark:bg-semi-black border-b py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-neutral-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block mb-2 dark:text-white font-bold"
                >
                  Password:
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  className="w-full dark:bg-semi-black border-b py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-neutral-400 dark:text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="mr-2 px-4 py-2 text-sm font-medium rounded-md text-white bg-red-600 w-1/2"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-1/2"
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default RegistroModal;
