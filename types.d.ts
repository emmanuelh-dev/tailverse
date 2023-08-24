interface ToastOptions {
  className: string;
  duration: number;
  style: {
    background: string;
    color: string;
  };
  success?: {
    duration?: number;
    theme?: {
      primary: string;
      secondary: string;
    };
  };
}
interface Options {
  title: string | number;
  value: string | boolean | number;
}
interface SelectDropdownProps {
  value: string | number | boolean;
  title: string | number;
  setValue: any;
  setTitle: any;
  options: Options[];
}
interface Component {
  source: string;
  id: number;
  author: string;
  type: string;
  rate: number;
}

type User = {
  username: string;
  name: string;
  email: string;
  id: number;
  component_count: number;
};

type Props = {
  users: User[];
  components: Component[];
};

interface Component {
  source: string;
  id: number;
  author: string;
  type: string;
}

type Props = {
  components: Component[];
};

type Params = {
  id: string;
};

type StaticProps = {
  props: Props;
};


declare module "react-hot-toast" {
  export const toast: any;
  export const Toaster: any;
}
