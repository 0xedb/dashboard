import type { AppProps } from "next/app";
import { GeistProvider, CssBaseline } from "@geist-ui/react";

function DashboardApp({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}

export default DashboardApp;
