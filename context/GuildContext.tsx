import React, { createContext, useContext, useState, useCallback } from "react";

export interface Guild {
  name: string | undefined;
  address: string | undefined;
  emblem: string | undefined;
}

export interface GuildState {
  /** The connected guild object. */
  guild?: Guild;
  /** The emblem image string. */
  setGuild: (guild: Guild) => void;
  guilds: Guild[];
}

const GUILD_INITIAL_STATE: GuildState = {
  guild: undefined,
  setGuild: () => undefined,
  guilds: [],
};

const GuildContext = createContext<GuildState>(GUILD_INITIAL_STATE);

export function useGuild(): GuildState {
  return useContext(GuildContext);
}

export const useGuildContext = () => {
  const [guild, setGuild] = useState<Guild>({
    name: undefined,
    address: undefined,
    emblem: undefined,
  });

  const guilds: Guild[] = [
    {
      name: "Core Lords",
      address: "0x0",
      emblem: "/emblem-example.png",
    },
    {
      name: "Test Warriors",
      address: "0x0",
      emblem: "/emblem-example.png",
    },
    {
      name: "Core Lords",
      address: "0x0",
      emblem: "/emblem-example.png",
    },
    {
      name: "Test Warriors",
      address: "0x0",
      emblem: "/emblem-example.png",
    },
  ];

  return {
    guild,
    setGuild,
    guilds,
  };
};

export function GuildProvider({ children }: { children: React.ReactNode }) {
  const state = useGuildContext();
  return (
    <GuildContext.Provider value={state}>{children}</GuildContext.Provider>
  );
}
