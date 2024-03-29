import styles from "../../../styles/navigation/transactions/TransactionStatus.module.css";
import { useRef, useEffect, useState, ReactElement } from "react";
import useTransactionManager from "../../../hooks/useTransactionManager";
import { getTxRenderConfig } from "../../../hooks/useTxMessage";
import type { ENQUEUED_STATUS } from "../../../constants";
import { storage } from "../../../utils/localStorage";
import type { TransactionStatus } from "starknet";
import { useWaitForTransaction } from "@starknet-react/core";
import {
  ThumbsUpIcon,
  ThumbsDownIcon,
  ExternalIcon,
} from "../../../shared/icons";
import { TransactionParams } from "../../../types";

export interface Metadata {
  description: string;
  title: string;
  action: string;
  multicalls?: any;
}

interface TxStatusItem {
  index: number;
  transaction: TransactionParams;
  status?: TransactionStatus | typeof ENQUEUED_STATUS;
}

const STYLES: any = {
  status: {
    REJECTED: "bg-red-400/20",
    NOT_RECEIVED: "bg-red-200/20",
    RECEIVED: "bg-green-800/40 animate-pulse",
    PENDING: "bg-orange-500/20 animate-pulse",
    ACCEPTED_ON_L2: "bg-green-800/20",
    ACCEPTED_ON_L1: "bg-green-900/20",
    TRANSACTION_RECEIVED: "bg-green-700 animate-pulse",
    ENQUEUED: "  bg-gray-1000/80",
  },
} as const;

const FORMATED_STATUS: any = {
  status: {
    REJECTED: "Rejected",
    NOT_RECEIVED: "No received",
    RECEIVED: "Received",
    PENDING: "Pending",
    ACCEPTED_ON_L2: "Accepted on StarkNet",
    ACCEPTED_ON_L1: "Accepted on Ethereum",
    TRANSACTION_RECEIVED: "Transaction Received",
    ENQUEUED: "ENQUEUED",
  },
} as const;

export const TxStatusItem = (props: TxStatusItem) => {
  // Multicall descriptions are generated by the TransactionQueueContext
  // as array of objects that describe how to render sub-calls.
  const ref = useRef<any>(null);
  const { data } = useWaitForTransaction({
    hash: props.transaction.hash,
    watch: true,
  });

  const multicalls = props.transaction.metadata?.multicalls;
  let title: string;
  let description: string | ReactElement;
  if (multicalls) {
    title = "Actions";
    description = "";
  } else {
    const { title: configTitle, description: configDescription } =
      getTxRenderConfig(props.transaction);
    title = props.transaction.metadata?.method || configTitle;
    description = (
      <span>
        {props.transaction.metadata?.description || configDescription}
      </span>
    );
  }

  return (
    <div ref={ref} className={styles.transaction_status}>
      <div className="flex flex-wrap w-full p-1 rounded bg-gray-1000/19">
        <div className="flex justify-between w-full pb-2 mb-2 border-b border-white/20">
          <h5 className="self-center">
            {FORMATED_STATUS.status[data?.status || 0]}
          </h5>
          <div className="self-center ">
            {props.transaction.hash ? (
              <a
                target={"_blank"}
                rel="noreferrer noopener"
                href={
                  // TODO: use network aware link using @/util/blockExplorer
                  "https://testnet.starkscan.co/tx/" + props.transaction.hash
                }
                className={styles.starkscan_link}
              >
                <p>See on StarkScan</p>
                <svg
                  className={styles.external_icon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            ) : null}
          </div>
        </div>

        <div>
          <h3>{title}</h3>
          {multicalls ? (
            multicalls.map((tx: any, i: any) => {
              const renderConfig = getTxRenderConfig(tx);
              if (renderConfig) {
                return (
                  <div className="py-2" key={`${props.transaction.hash}:${i}`}>
                    <h5 className="uppercase">{renderConfig.title}</h5>
                    <p className="text-lg text-gray-400">
                      {renderConfig.description}
                    </p>
                  </div>
                );
              }
              return <p key={i}>{"Transaction"}</p>;
            })
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
      {/* <span>{props.transaction.lastUpdatedAt}</span> */}
    </div>
  );
};

const TX_HISTORY_STORAGE_KEY = "txHistory";
const CLEAR_STORAGE_FLAG_KEY = "clearStorageFlag";

const TX_HISTORY_LENGTH = 15;

export const TransactionStatusTable = () => {
  const { hashes, transactions } = useTransactionManager();
  const [txHistory, setTxHistory] = useState<any>([]);
  const historyStorage = storage<any>(TX_HISTORY_STORAGE_KEY, []);

  useEffect(() => {
    // fix for tx format breaking changes
    if (!localStorage.getItem(CLEAR_STORAGE_FLAG_KEY)) {
      historyStorage.set([]);
      localStorage.setItem(CLEAR_STORAGE_FLAG_KEY, "true");
    }
    const storageTransactions = historyStorage.get();
    const lastTx = transactions.pop();
    if (lastTx) {
      storageTransactions.push(lastTx);
      historyStorage.set(storageTransactions);
    }
    if (storageTransactions.length > TX_HISTORY_LENGTH) {
      storageTransactions.shift();
    }
    setTxHistory(storageTransactions);
  }, [transactions]);

  const exampleTransactions = [
    {
      status: "Accepted on L1",
      actions: [
        {
          title: "Create guild",
          description: "Create Core Lords Guild",
        },
        {
          title: "Create guild",
          description: "Create Core Lords Guild",
        },
        {
          title: "Create guild",
          description: "Create Core Lords Guild",
        },
      ],
    },
    {
      status: "Rejected",
      actions: [
        {
          title: "Create guild",
          description: "Create Core Lords Guild",
        },
        {
          title: "Create guild",
          description: "Create Core Lords Guild",
        },
      ],
    },
    {
      status: "Pending",
      actions: [
        {
          title: "Create guild",
          description: "Create Core Lords Guild",
        },
      ],
    },
  ];

  return (
    <div className={styles.transaction_status_table}>
      {/* {txHistory.map((a: any, index: any) => {
        return <TxStatusItem index={index} key={index} transaction={a} />;
      })} */}
      {/* Hard code this part for now using list of transactions */}
      {exampleTransactions.map((transaction, index) => (
        <div className={styles.status_box} key={index}>
          <div className={styles.status_header}>
            <p className={styles.status}>{transaction.status}</p>
            <div className={styles.status_icon}>
              <ThumbsUpIcon />
            </div>
            <a
              href="https://testnet.starkscan.co/tx/0x02964e3ac1b8e01a07983dad4e0c8210df9aa6112e888d832e568f617a2b5ce8"
              target="_blank"
              rel="noreferrer"
              className={styles.network_button}
            >
              <p>See on Starkscan</p>
              <div className={styles.external_icon}>
                <ExternalIcon />
              </div>
            </a>
          </div>
          <div className={styles.actions}>
            <p className={styles.action_header}>Actions</p>
            <div className={styles.actions}>
              {transaction.actions.map((action, index) => (
                <div className={styles.action} key={index}>
                  <p className={styles.action_title}>{action.title}</p>
                  <p className={styles.action_description}>
                    {action.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
