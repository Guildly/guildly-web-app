import { ENQUEUED_STATUS } from "../constants";
import type { Transaction, TransactionRender } from "../types";
import { renderTransaction as renderMembers } from "./useMembers";

export function getTxRenderConfig(tx: Transaction): TransactionRender {
  const isQueued = tx.status == ENQUEUED_STATUS;

  const metadata = tx.metadata;
  if (metadata.title && metadata.description) {
    return metadata;
  }

  const render = {
    ...renderMembers,
  };

  const renderConfig =
    render[tx.metadata?.action] ||
    function (tx: any, ctx: any) {
      console.error("No render configuration", tx);
      throw new Error(
        "No render configuration defined for transaction metadata:",
        tx.metadata
      );
    };
  return renderConfig(tx, { isQueued });
}
