import { type AppType } from "next/app";
import { Nunito } from "next/font/google";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className={`${nunito.variable}`}>
        <Component {...pageProps} />
        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default MyApp;