import styles from "../../../styles/navigation/transactions/TransactionList.module.css";
import { useRef, useState, useEffect, useCallback } from "react";
import { getTxRenderConfig } from "../../../hooks/useTxMessage";
import { CallAndMetadata } from "../../../types";
import type { ENQUEUED_STATUS } from "../../../constants";
import { useDrag, useDrop } from "react-dnd";
import type { Identifier, XYCoord } from "dnd-core";
import { dndTypes } from "../../../types";
import { useTransactions } from "../../../context/TransactionsContext";
import { sounds } from "../../../shared/sounds";
import { Tx } from "../../../context/TransactionsContext";

type Prop = {
  onSubmit?: () => void;
};

interface ActionListItem {
  index: number;
  call: CallAndMetadata;
  status?: typeof ENQUEUED_STATUS;
  onRemove?: () => void;
  onReorder?: (dragIndex: number, hoverIndex: number) => void;
}
interface DragTx {
  index: number;
  transactionHash: string;
  type: string;
}

export const ActionItem = (props: ActionListItem) => {
  // Multicall descriptions are generated by the TransactionQueueContext
  // as array of objects that describe how to render sub-calls.
  const ref = useRef<any>(null);

  const multicalls = props.call.metadata?.multicalls;

  const { title: configTitle, description: configDescription } =
    getTxRenderConfig(props.call);
  const title = props.call.metadata?.title || configTitle;
  const description = (
    <span>{props.call.metadata?.description || configDescription}</span>
  );

  const [{ handlerId }, drop] = useDrop<
    DragTx,
    void,
    { handlerId: Identifier | null }
  >({
    accept: dndTypes.TX,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragTx, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = props.index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      props.onReorder && props.onReorder(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: dndTypes.TX,
    item: () => {
      return {
        index: props.index,
      };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // no dnd if tx is in status tab
  props.onRemove && drag(drop(ref));

  return (
    <div className={styles.transaction}>
      <div className={styles.drag_icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          fill="currentColor"
        >
          <path d="M40 352c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0zm192 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0zM40 320l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40zM232 192c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0zM40 160l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40L40 32C17.9 32 0 49.9 0 72l0 48c0 22.1 17.9 40 40 40zM232 32c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0z" />
        </svg>
      </div>
      <div className={styles.transaction_content}>
        <div className={styles.header}>
          <div className={styles.title}>
            <p>{title}</p>
          </div>
          <button className={styles.remove_button}>
            <p>Remove</p>
          </button>
        </div>
        <div className={styles.dividor} />
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export const ActionList: React.FC<Prop> = (props) => {
  const txQueue = useTransactions();
  const [waitingForBatchAdding, setWaitingForBatchAdding] = useState(false);
  const { playGuildSound } = sounds();

  const reorderCards = useCallback((dragIndex: number, hoverIndex: number) => {
    txQueue.reorderQueue(dragIndex, hoverIndex);
  }, []);

  const signDecree = () => {
    playGuildSound();
    txQueue
      .executeMulticall([])
      .then((_txResp) => {
        props.onSubmit && props.onSubmit();
      })
      .catch((err) => {
        console.log(err);
        // TODO: Handle error
      });
  };

  const { playClickSound } = sounds();
  const [isTransactionsSelected, setIsTransactionsSelected] = useState(true);
  const [isScrollSelected, setIsScrollSelected] = useState(false);

  const transactions: Tx[] = [
    {
      contractAddress: "0x...",
      entrypoint: "deploy_guild",
      calldata: ["Core Lords"],
      metadata: {
        title: "Create a Guild",
        description: "Create Core Lords guild",
      },
      status: "ENQUEUED",
      keyId: "1",
    },
    {
      contractAddress: "0x...",
      entrypoint: "deposit",
      calldata: ["Hello world"],
      metadata: {
        title: "Deposit Realm",
        description: "Depsoit Realm ID 400 into Core Lords",
      },
      status: "ENQUEUED",
      keyId: "1",
    },
  ];

  return (
    <div className={styles.transaction_area}>
      <div className={styles.transaction_box}>
        <div className={styles.buttons}>
          <div className={styles.submit_button}>
            <p>Submit</p>
          </div>
          <div className={styles.clear_button}>
            <p>Clear</p>
          </div>
        </div>
        {transactions.map((t, i) => (
          <ActionItem
            key={`${t.contractAddress}:${t.entrypoint}::${t.calldata
              ?.map((bignum: any) => bignum?.toString())
              .join(":")}`}
            call={t}
            index={i}
            onReorder={reorderCards}
            onRemove={() => txQueue.remove(t)}
          />
        ))}
      </div>
    </div>
  );
};
