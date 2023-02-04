import type { CallAndMetadata, TransactionRenderConfig, Token } from "../types";
import { GuildEmblem } from "../shared/icons/GuildEmblem";
import { BigNumber } from "ethers";
import { useTransactions } from "../context/TransactionsContext";

export const Entrypoints = {
  deposit: "deposit",
  withdraw: "withdraw",
};

export const createCall: Record<string, (args: any) => CallAndMetadata> = {
  deposit: (args: { token: Token; guildAddress: string }) => ({
    contractAddress: args.guildAddress,
    entrypoint: Entrypoints.deposit,
    calldata: [args.token],
    metadata: {
      ...args,
      action: Entrypoints.deposit,
    },
  }),
  withdraw: (args: { token: Token; guildAddress: string }) => ({
    contractAddress: args.guildAddress,
    entrypoint: Entrypoints.withdraw,
    calldata: [args.token],
    metadata: {
      ...args,
      action: Entrypoints.withdraw,
    },
  }),
};

export const CartItem = ({ guildAddress }: any) => {
  return <GuildEmblem address={guildAddress} />;
};

export const renderTransaction: TransactionRenderConfig = {
  [Entrypoints.deposit]: ({ metadata }, { isQueued }) => ({
    title: "Deposit Item",
    description: [
      `${isQueued ? "Deposit" : "Depositing"} ${metadata.token.name ?? ""} to ${
        metadata.guildName
      }.`,
      <div className="flex flex-wrap mt-4">
        <CartItem guildAddress={metadata.guildAddress} />
      </div>,
    ] as any,
  }),
  [Entrypoints.withdraw]: ({ metadata }, { isQueued }) => ({
    title: "Withdraw Item",
    description: [
      `${isQueued ? "Withdraw" : "Withdrawing"} ${
        metadata.token.name ?? ""
      } from ${metadata.guildName}.`,
      <div key="icons" className="flex flex-wrap mt-4">
        <CartItem guildAddress={metadata.guildAddress} />
      </div>,
    ] as any,
  }),
};

export const useDeposit = () => {
  const txQueue = useTransactions();

  return {
    deposit: (token: Token, guildAddress: string) => {
      txQueue.add(
        createCall.deposit({
          token,
          guildAddress,
        })
      );
    },
  };
};

export const useWithdraw = () => {
  const txQueue = useTransactions();

  return {
    withdraw: (token: Token, guildAddress: string) => {
      txQueue.add(
        createCall.withdraw({
          token,
          guildAddress,
        })
      );
    },
  };
};
