import { useContractWrite } from "@starknet-react/core";
import useTransactionManager from "../hooks/useTransactionManager";
import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";
import type { InvokeFunctionResponse } from "starknet";
import { TransactionIcon } from "../shared/icons";
import { getTxRenderConfig } from "../hooks/useTxMessage";
import { ENQUEUED_STATUS } from "../constants";
import type { CallAndMetadata, Transaction } from "../types";

type Call = CallAndMetadata;
export type Tx = Call & { status: typeof ENQUEUED_STATUS; keyId?: string };

interface Transactions {
  add: (tx: Call | Call[]) => void;
  transactions: Tx[];
  remove: (tx: Tx) => void;
  empty: () => void;
  reorderQueue: (dragIndex: number, hoverIndex: number) => void;
  executeMulticall: (transactions: Tx[]) => Promise<InvokeFunctionResponse>;
}

export const TransactionsContext = createContext<Transactions | undefined>(
  undefined
);

export const TransactionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [txs, setTx] = useState<Tx[]>([]);
  const { addTransaction } = useTransactionManager();
  const { writeAsync } = useContractWrite({ calls: txs });

  const add = (tx: Call[] | Call, insertFirst = false) => {
    const { title: configTitle } = getTxRenderConfig(tx as Transaction);
    const transactionIcon = <TransactionIcon />;

    if (Array.isArray(tx)) {
      toast(`${tx.length} Command(s) Queued`, {
        icon: transactionIcon,
      });
      setTx((prev) =>
        insertFirst
          ? ([...tx, ...prev] as any)
          : prev.concat(
              tx.map((t) => ({
                ...t,
                status: ENQUEUED_STATUS,
                keyId: Math.random().toString(16).slice(2),
              }))
            )
      );
    } else {
      toast("Command Queued: " + configTitle, {
        icon: transactionIcon,
      });
      setTx((prev) =>
        insertFirst
          ? ([tx, ...prev] as any)
          : prev.concat({
              ...tx,
              status: ENQUEUED_STATUS,
              keyId: Math.random().toString(16).slice(2),
            })
      );
    }
  };

  const remove = (tx: Tx) => {
    const i = txs.indexOf(tx);
    setTx((prev) => {
      const next = [...prev];
      next.splice(i, 1);
      return next;
    });
  };

  const reorderQueue = (dragIndex: number, hoverIndex: number) => {
    setTx((prev) => {
      const next = [...prev];
      next.splice(hoverIndex, 0, ...next.splice(dragIndex, 1));
      return next;
    });
  };

  const empty = () => {
    setTx([]);
  };

  const executeMulticall = async (inline?: Tx[]) => {
    setTx((prev) => {
      if (inline) {
        return prev.concat(
          inline.map((t) => ({ ...t, status: ENQUEUED_STATUS }))
        );
      } else {
        return prev;
      }
    });

    const resp = await writeAsync();

    addTransaction({
      ...resp,
      hash: resp.transaction_hash,
      metadata: {
        multicalls: txs.map((tt) => ({
          ...tt,
          status: "TRANSACTION_RECEIVED",
        })),
      },
    });
    setTx([]);
    return resp;
  };

  return (
    <TransactionsContext.Provider
      value={{
        add,
        remove,
        empty,
        reorderQueue,
        transactions: txs,
        executeMulticall,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  const txContext = useContext(TransactionsContext);
  if (txContext == undefined) {
    throw new Error("useCommandList must be used within a CommandListProvider");
  }
  return txContext;
};
