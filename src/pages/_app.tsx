import { type AppType } from "next/app";
import { M_PLUS_Rounded_1c } from "next/font/google";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";

// m plus rounded 1c font integration
const mPlusRounded1c = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  variable: "--font-mPlusRounded1c",
  weight: ["700", "800"],
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
