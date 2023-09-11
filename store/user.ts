import { create } from "zustand";
interface UserState {
  user: string | null;
  token: string | null;
  setInitialData: (user: string | null, token: string | null) => void;
}

const UserStore = create<UserState>((set) => ({
  user: null,
  token: null,
  setInitialData: (user, token) => {
    set({ user, token });
  },
}));

export default UserStore;
