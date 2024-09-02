"use client";

import localFont from "@next/font/local";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import "~~/styles/globals.css";

// export const metadata = getMetadata({
//   title: "Smithoors leaderboard",
//   description: "Top 200 Smithoors in the whole GotchiVerse",
// });

const pixelar = localFont({
  src: [
    {
      path: "../public/fonts/pixelar.woff2",
      weight: "normal",
    },
  ],
  variable: "--pixelar",
});

const queryClient = new QueryClient();

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning className={`${pixelar.variable} font-sans `}>
      <body>
        {/* <ThemeProvider enableSystem> */}
        <WagmiProvider config={wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            <div className="flex flex-col min-h-screen justify-center text-lg text-white font-medium bg-gradient-to-t from-[#1a1932] to-[#0e071b]">
              <div className="container-md mx-auto mb-auto pt-10">
                <div className="mx-5">{children}</div>
              </div>
            </div>
          </QueryClientProvider>
        </WagmiProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
