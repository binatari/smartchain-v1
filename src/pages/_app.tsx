import HomeLayout from "@/components/layouts/HomeLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  );
}
