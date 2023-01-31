import React, { useCallback, useState } from "react";
import styles from "../../styles/navigation/ConnectMenu.module.css";
import { useConnectors } from "@starknet-react/core";
import { sounds } from "../../shared/sounds";
import Image from "next/image";

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
        {connectors.map((connector: any) => (
          <div className={styles.wallet} key={connector.id()}>
            <button
              className={styles.wallet_box}
              onClick={() => {
                connect(connector);
                close();
                playClickSound();
              }}
            >
              <Image
                src={connector._wallet.icon}
                alt="wallet-logo"
                width={30}
                height={30}
              />
              Connect {connector._wallet.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
