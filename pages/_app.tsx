import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { StarknetConfig, InjectedConnector } from "@starknet-react/core";
import { GuildProvider } from "../context/GuildContext";

export default function App({ Component, pageProps }: AppProps) {
  const connectors = [
    new InjectedConnector({ options: { id: "argentX" } }),
    new InjectedConnector({ options: { id: "braavos" } }),
  ];
  return (
    <AnimatePresence mode="wait" initial={false}>
      <StarknetConfig connectors={connectors}>
        <GuildProvider>
          <Component {...pageProps} />
        </GuildProvider>
      </StarknetConfig>
    </AnimatePresence>
  );
}
