import { type AppType } from "next/app";
import { Poppins, Quicksand, M_PLUS_Rounded_1c } from "next/font/google";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";

// quicksand font integration
const quickSand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quickSand",
});

// poppins font integration
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

// m plus rounded 1c font integration
const mPlusRounded1c = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  variable: "--font-mPlusRounded1c",
  weight: ["500", "700", "800"],
  display: "swap",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className={`${mPlusRounded1c.variable} font-mPlusRounded1c`}>
        <Component {...pageProps} />
        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default MyApp;
