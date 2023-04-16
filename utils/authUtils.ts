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
    localStorage.setItem("token", token);
    localStorage.setItem("user", user.username);

    toast.success(
      "The user has successfully authenticated and is now logged in to the app."
    );
    return true;
  } else {
    toast("Oh no. Something went wrong.");
    return false;
  }
};
