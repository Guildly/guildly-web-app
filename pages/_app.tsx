import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { StarknetConfig, InjectedConnector } from "@starknet-react/core";
import { GuildProvider } from "../context/GuildContext";
import { SoundProvider } from "../context/SoundContext";
import { TransactionsProvider } from "../context/TransactionsContext";
import { UIProvider } from "../context/UIContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App({ Component, pageProps }: AppProps) {
  const connectors = [
    new InjectedConnector({ options: { id: "argentX" } }),
    new InjectedConnector({ options: { id: "braavos" } }),
  ];
  return (
    <AnimatePresence mode="wait" initial={false}>
      <StarknetConfig connectors={connectors}>
        <GuildProvider>
          <SoundProvider>
            <DndProvider backend={HTML5Backend}>
              <TransactionsProvider>
                <UIProvider>
                  <Component {...pageProps} />
                </UIProvider>
              </TransactionsProvider>
            </DndProvider>
          </SoundProvider>
        </GuildProvider>
      </StarknetConfig>
    </AnimatePresence>
  );
}
