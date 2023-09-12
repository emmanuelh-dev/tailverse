import { create } from "zustand";

interface NewComponent {
  name: "Input user id 3 RGB mamalon";
  author: string | undefined;
  source: string | undefined;
  type: string | undefined;
  rate: number | undefined;
}

interface UserState {
  user: string | null;
  token: string | null;
  newComponent: NewComponent;
  setInitialData: (user: string | null, token: string | null) => void;
  selectNewComponentType: any
  setComponentSource: any
}

const UserStore = create<UserState>((set) => ({
  user: null,
  token: null,
  newComponent: {
    name: "Input user id 3 RGB mamalon",
    author: "",
    source: "",
    type: "",
    rate: 0,
  },
  setInitialData: (user, token) => {
    set({ user, token });
  },
  selectNewComponentType: (type: string) => {
    set((state) => ({
      newComponent: {
        ...state.newComponent,
        type: type,
      },
    }));
  },
  setComponentSource: (source: string) => {
    set((state) => ({
      newComponent: {
        ...state.newComponent,
        source: source,
      },
    }));
  },
}));

export default UserStore;
