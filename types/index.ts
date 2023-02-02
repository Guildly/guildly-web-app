import type { Call } from '@starknet-react/core';
import { ReactElement } from 'react';

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
  (
    tx: Transaction,
    context: TransactionQueueContext
  ) => TransactionRender
>;