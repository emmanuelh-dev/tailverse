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

  declare module 'react-hot-toast' {
    export const toast: any;
    export const Toaster: any;
  }