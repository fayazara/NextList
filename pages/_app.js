import { Inter } from "next/font/google";
import "@/styles/globals.css";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
