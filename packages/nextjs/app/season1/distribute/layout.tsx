import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { BlockieAvatar } from "~~/components/scaffold-eth";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <RainbowKitProvider avatar={BlockieAvatar}>{children}</RainbowKitProvider>;
};

export default Layout;
