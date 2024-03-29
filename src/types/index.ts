import type { Call } from "starknet";
import { ReactElement } from "react";

export const dndTypes = {
  TX: "tx",
};

export interface CallAndMetadata extends Call {
  metadata: { title: string; description: string } | any;
}

export type Transaction = { status?: string; metadata?: any };

export interface TransactionQueueContext {
  isQueued: boolean;
}

export interface TransactionRender {
  title: string;
  description: string | ReactElement;
}

export type TransactionRenderConfig = Record<
  string,
  (tx: Transaction, context: TransactionQueueContext) => TransactionRender
>;

export interface Token {
  tokenStandard: string;
  tokenAddress: string;
  tokenId: number | null;
  amount: number;
}

export interface SelectOption {
  text: string;
  icon: ReactElement;
}

export interface Metadata {
  method?: string; // Method of the transaction
  description?: string; // Description of the transaction
  multicalls?: any;
}

export interface TransactionParams {
  hash: string;
  metadata?: Metadata;
}
