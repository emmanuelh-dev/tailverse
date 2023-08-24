import { toast } from "react-hot-toast";

function createBaseConfig(method : string) {
  const token = sessionStorage.getItem("token");

  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
}
export async function postLikeAction(id: number, newRates: number, newLiked: boolean) {
  try {
    const baseConfig = createBaseConfig("POST");

    const config = {
      ...baseConfig,
      body: JSON.stringify({ id: id, rate: newRates }),
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/components/updateComponentRate`,
      config
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    toast.success(newLiked ? "Liked" : "Unliked");
  } catch (error) {
    console.error("Error:", error);
    toast.error(
      newLiked ? "Could not like the item" : "Could not unlike the item"
    );
  }
}

export async function deleteCompoent(id:number) {
  const confirmed = window.confirm(
    "Are you sure you want to delete this component?"
  );

  if (confirmed) {
    try {
      const baseConfig = createBaseConfig("DELETE");
      const config = {
        ...baseConfig,
        body: JSON.stringify({ id: id }),
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/components/deleteComponent`,
        config
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast.success("Component deleted"); // Make sure 'toast' is defined
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Could not delete component"); // Make sure 'toast' is defined
    }
  }
}
