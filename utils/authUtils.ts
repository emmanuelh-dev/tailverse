import { useEffect } from "react";
import { toast } from "react-hot-toast";

type RegisterUserArgs = {
  username: string;
  email: string;
  password: string;
};

type LoginUserArgs = {
  email: string;
  password: string;
};

type RegisterUserResult = boolean;
type LoginUserResult = boolean;

export const registerUser = async ({
  username,
  email,
  password,
}: RegisterUserArgs): Promise<RegisterUserResult> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });

  if (response.ok) {
    toast.success("Congratulations! The user has been added to the system!");
    return true;
  } else {
    toast("Oh no. Something went wrong.");
    return false;
  }
};

export const loginUser = async ({
  email,
  password,
}: LoginUserArgs): Promise<LoginUserResult> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const data = await response.json();
    const { token, user } = data;

    // Obtener la hora actual en milisegundos
    const currentTime = Date.now();

    // Almacenar la hora actual en que se creó el token
    localStorage.setItem("tokenCreationTime", currentTime.toString());

    localStorage.setItem("token", token);
    localStorage.setItem("user", user.username);

    toast.success(
      "The user has successfully authenticated and is now logged in to the app."
    );
    window.location.reload();
    return true;
  } else {
    toast("Oh no. Something went wrong.");
    return false;
  }
};

export const useTokenObserver = (): void => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const tokenCreationTime = localStorage.getItem("tokenCreationTime");

      if (tokenCreationTime) {
        const currentTime = Date.now();
        const timeSinceCreation = currentTime - parseInt(tokenCreationTime, 10);

        if (timeSinceCreation > 1000 * 60 * 60 * 10) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          localStorage.removeItem("tokenCreationTime");
        }
      }
    }, 1000 * 60 * 60); // Comprueba el token cada hora

    return () => clearInterval(intervalId);
  }, []);
};
