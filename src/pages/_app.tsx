import "../globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { GuildProvider } from "../context/GuildContext";
import { SoundProvider } from "../context/SoundContext";
import { TransactionsProvider } from "../context/TransactionsContext";
import { UIProvider } from "../context/UIContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { StarknetProvider } from "../components/provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <StarknetProvider>
        <GuildProvider>
          <UIProvider>
            <SoundProvider>
              <DndProvider backend={HTML5Backend}>
                <TransactionsProvider>
                  <Component {...pageProps} />
                </TransactionsProvider>
              </DndProvider>
            </SoundProvider>
          </UIProvider>
        </GuildProvider>
      </StarknetProvider>
    </AnimatePresence>
  );
}
