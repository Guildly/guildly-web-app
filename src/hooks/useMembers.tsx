import type { CallAndMetadata, TransactionRenderConfig } from "../types";
import { GuildEmblem } from "../shared/icons/GuildEmblem";
import { BigNumber } from "ethers";
import { useTransactions } from "../context/TransactionsContext";

export const Entrypoints = {
  whitelistMember: "whitelist_member",
  removeMember: "remove_member",
  join: "join",
};

export const createCall: Record<string, (args: any) => CallAndMetadata> = {
  whitelistMember: (args: {
    address: BigNumber;
    role: number;
    guildAddress: string;
  }) => ({
    contractAddress: args.guildAddress,
    entrypoint: Entrypoints.whitelistMember,
    calldata: [args.address, args.role],
    metadata: {
      ...args,
      action: Entrypoints.whitelistMember,
    },
  }),
  removeMember: (args: { address: BigNumber; guildAddress: string }) => ({
    contractAddress: args.guildAddress,
    entrypoint: Entrypoints.removeMember,
    calldata: [args.address],
    metadata: {
      ...args,
      action: Entrypoints.removeMember,
    },
  }),
  join: (args: { guildAddress: string }) => ({
    contractAddress: args.guildAddress,
    entrypoint: Entrypoints.join,
    calldata: [],
    metadata: {
      ...args,
      action: Entrypoints.join,
    },
  }),
};

export const CartMember = ({ guildAddress }: any) => {
  return <GuildEmblem address={guildAddress} />;
};

export const renderTransaction: TransactionRenderConfig = {
  [Entrypoints.whitelistMember]: ({ metadata }, { isQueued }) => ({
    title: "Whitelist Member",
    description: [
      `${isQueued ? "Whitelist" : "Whitelisting"} ${
        metadata.address ?? ""
      } to ${metadata.guildName}.`,
      <div className="flex flex-wrap mt-4">
        <CartMember guildAddress={metadata.guildAddress} />
      </div>,
    ] as any,
  }),
  [Entrypoints.removeMember]: ({ metadata }, { isQueued }) => ({
    title: "Remove Member",
    description: [
      `${isQueued ? "Remove" : "Removing"} ${metadata.address ?? ""} from ${
        metadata.guildName
      }.`,
      <div key="icons" className="flex flex-wrap mt-4">
        <CartMember guildAddress={metadata.guildAddress} />
      </div>,
    ] as any,
  }),
};

export const useWhitelistMember = () => {
  const txQueue = useTransactions();

  return {
    whitelistMember: (
      memberAddress: string,
      role: number,
      guildAddress: string
    ) => {
      txQueue.add(
        createCall.whitelist_member({
          memberAddress,
          role,
          guildAddress,
        })
      );
    },
  };
};

export const useRemoveMember = () => {
  const txQueue = useTransactions();

  return {
    removeMember: (memberAddress: string, guildAddress: string) => {
      txQueue.add(
        createCall.remove_member({
          memberAddress,
          guildAddress,
        })
      );
    },
  };
};

export const useJoin = () => {
  const txQueue = useTransactions();

  return {
    join: (guildAddress: string) => {
      txQueue.add(
        createCall.join({
          guildAddress,
        })
      );
    },
  };
};
