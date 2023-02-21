import React, { useCallback, useState } from "react";
import styles from "../../styles/navigation/ConnectMenu.module.css";
import { sounds } from "../../shared/sounds";
import Image from "next/image";
import { useAccount, useConnectors } from "@starknet-react/core";

interface ConectMenuProps {
  close: () => void;
}

export const ConnectMenu = ({ close }: ConectMenuProps) => {
  const { status } = useAccount();
  const { connect, connectors, disconnect } = useConnectors();
  const { playClickSound } = sounds();

  return (
    <div className={styles.box}>
      <div className={styles.left_border} />
      <div className={styles.right_border} />
      <div className={styles.content}>
        {status == "disconnected" ? (
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
                    src={connector._wallet ? connector._wallet.icon : ""}
                    alt="wallet-logo"
                    width={30}
                    height={30}
                  />
                  Connect {connector._wallet ? connector._wallet.name : null}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <button
            className={styles.disconnect}
            onClick={() => {
              playClickSound();
              disconnect();
            }}
          >
            <svg
              className={styles.disconnect_icon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <p>Disconnect</p>
          </button>
        )}
      </div>
    </div>
  );
};
