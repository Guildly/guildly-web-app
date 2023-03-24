import styles from "../../../styles/containers/guildhall/CreateGuild.module.css";
import { useState } from "react";
import { GuildInfo } from "./createAGuild/GuildInfo";
import { Permissions } from "./createAGuild/Permissions";
import { WhitelistMembers } from "./createAGuild/WhitelistMembers";
import { sounds } from "../../../shared/sounds";
import { useUI } from "../../../context/UIContext";

export const CreateGuild = ({ ...props }: any) => {
  const { toggleTransactionCart } = useUI();
  const { playClickSound } = sounds();
  const submitTransactions = () => {
    playClickSound();
  };
  return (
    <div className={styles.container}>
      {props.chainPage == 1 ? (
        <GuildInfo {...props} />
      ) : props.chainPage == 2 ? (
        <Permissions {...props} />
      ) : (
        <WhitelistMembers {...props} />
      )}
      <div className={styles.buttons}>
        {props.chainPage == 2 ? (
          <button
            className={styles.next_button}
            onClick={() => {
              props.setPermissionIndex(props.permissionIndex + 1);
              props.permissionsAppend({
                contractAddress: "",
                selectors: [{ selector: "" }],
              });
            }}
          >
            <p>Add Permission</p>
          </button>
        ) : null}
        {props.chainPage == 3 ? (
          <button
            className={styles.submit_button}
            onClick={() => {
              submitTransactions();
              toggleTransactionCart();
            }}
          >
            <p>Submit</p>
          </button>
        ) : (
          <button
            className={styles.next_button}
            onClick={() => {
              playClickSound();
              props.setChainPage(props.chainPage + 1);
            }}
          >
            <p>Next</p>
          </button>
        )}
      </div>
      <div className={styles.chain}>
        <div
          className={
            props.chainPage == 1
              ? styles.chain_number_active
              : styles.chain_number
          }
          onClick={() => {
            playClickSound();
            props.setChainPage(1);
          }}
        >
          <p>1</p>
        </div>
        <div
          className={
            props.chainPage == 2
              ? styles.chain_number_active
              : styles.chain_number
          }
          onClick={() => {
            playClickSound();
            props.setChainPage(2);
          }}
        >
          <p>2</p>
        </div>
        <div
          className={
            props.chainPage == 3
              ? styles.chain_number_active
              : styles.chain_number
          }
          onClick={() => {
            playClickSound();
            props.setChainPage(3);
          }}
        >
          <p>3</p>
        </div>
      </div>
    </div>
  );
};
