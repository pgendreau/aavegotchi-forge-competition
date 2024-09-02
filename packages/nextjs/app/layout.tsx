"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import localFont from '@next/font/local'

// export const metadata = getMetadata({
//   title: "Smithoors leaderboard",
//   description: "Top 200 Smithoors in the whole GotchiVerse",
// });

const pixelar = localFont({
  src: [{
    path: '../public/fonts/pixelar.woff2',
    weight: 'normal',
  }],
  variable: '--pixelar'
})

const queryClient = new QueryClient();

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning className={`${pixelar.variable} font-sans`}>
      <body>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider enableSystem>
            <div className="flex flex-col min-h-screen justify-between bg-purple-950  text-white font-katin font-medium">
              <div className="container mx-auto mb-auto md:pt-20 pt-10">
                <div className="mx-5">{children}</div>
              </div>
            </div>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
