"use client";
import React from "react";

import { goerli, mainnet } from "@starknet-react/chains";
import {
  StarknetConfig,
  argent,
  braavos,
  useInjectedConnectors,
  alchemyProvider,
} from "@starknet-react/core";

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [argent(), braavos()],
    // Hide recommended connectors if the user has any connector installed.
    includeRecommended: "onlyIfNoConnectors",
    // Randomize the order of the connectors.
    order: "random",
  });

  const apiKey = process.env.NEXT_PUBLIC_API_KEY!;
  const onMainnet = process.env.NEXT_PUBLIC_NETWORK === "mainnet";
  const chains = onMainnet ? [mainnet] : [goerli];

  return (
    <StarknetConfig
      chains={[mainnet, goerli]}
      provider={alchemyProvider({ apiKey })}
      connectors={connectors}
    >
      {children}
    </StarknetConfig>
  );
}
