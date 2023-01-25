import React, { useCallback, useState } from "react";
import styles from "../../styles/navigation/ConnectMenu.module.css";
import { useConnectors } from "@starknet-react/core";
import { sounds } from "../../shared/sounds";

interface ConectMenuProps {
  close: () => void;
}

export const ConnectMenu = ({ close }: ConectMenuProps) => {
  const { connect, connectors } = useConnectors();
  const { playClickSound } = sounds();
  console.log(connectors);

  return (
    <>
      <div className={styles.wallets_list}>
        {connectors.map((connector) => (
          <div className={styles.wallet} key={connector.id()}>
            <button
              className={styles.wallet_box}
              onClick={() => {
                connect(connector);
                close();
                playClickSound();
              }}
            >
              Connect {connector.id()}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
