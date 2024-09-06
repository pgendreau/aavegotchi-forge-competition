import localFont from "@next/font/local";
import "@rainbow-me/rainbowkit/styles.css";
import { Footer } from "~~/components/layout/Footer";
import { InjectProviders } from "~~/components/layout/HOC/InjectProviders";
import { Header } from "~~/components/layout/Header";
import { NavBar } from "~~/components/layout/Navbar";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Aavegotchi Forge Leaderboard",
  description: "'Check your aavegotchi's blacksmithing rank and compete to win prizes",
  imageRelativePath: "/images/header.jpg",
});

const pixelar = localFont({
  src: [
    {
      path: "../public/fonts/pixelar.woff2",
      weight: "normal",
    },
  ],
  variable: "--pixelar",
});

declare global {
  interface BigInt {
    toJSON(): string;
  }
}

BigInt.prototype.toJSON = function () {
  return this.toString();
};



const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning className={`${pixelar.variable} font-sans `}>
      <body>
        <InjectProviders>
          <div className="flex flex-col min-h-screen justify-center text-xl text-white font-medium bg-gradient-to-t from-[#1a1932] to-[#0e071b]">
            <div className="container-lg mb-auto pt-10 mx-auto">
              <div className="mx-5">
                <Header />
                <NavBar />
                {children}
                <Footer />
              </div>
            </div>
          </div>
        </InjectProviders>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
