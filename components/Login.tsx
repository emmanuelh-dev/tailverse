import { useState } from "react";
import toast from 'react-hot-toast';

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
};

function LoginModal({ open, onClose }: LoginModalProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(process.env.API_URL)

    const response = await fetch(`http://localhost:3000/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password  }),
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
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen">
          <div className="bg-white dark:bg-semi-black p-6 border border-[#E54C9E] rounded-xl max-w-[18rem]">
            <h2 className="mb-2 text-2xl font-bold text-center dark:text-white">
              Log In
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 font-bold dark:text-white "
                >
                  Mail:
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Mail Address"
                  className="w-full px-3 py-2 leading-tight border-b dark:text-white dark:bg-semi-black focus:outline-none focus:shadow-outline border-neutral-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block mb-2 font-bold dark:text-white"
                >
                  Password:
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  className="w-full px-3 py-2 leading-tight border-b dark:bg-semi-black focus:outline-none focus:shadow-outline border-neutral-400 dark:text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 px-4 py-2 mr-2 text-sm font-medium text-white bg-[#E54C9E] rounded-md"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="w-1/2 px-4 py-2 text-sm font-medium text-white bg-[#4B7FF0] border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  LogIn
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginModal;
