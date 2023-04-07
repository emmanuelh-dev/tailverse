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

  declare module 'react-hot-toast' {
    export const toast: any;
    export const Toaster: any;
  }