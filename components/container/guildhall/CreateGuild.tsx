import styles from "../../../styles/containers/guildhall/CreateGuild.module.css";
import { useState } from "react";
import { GuildInfo } from "./createAGuild/GuildInfo";
import { Permissions } from "./createAGuild/Permissions";
import { WhitelistMembers } from "./createAGuild/WhitelistMembers";
import { sounds } from "../../../shared/sounds";

export const CreateGuild = ({ ...props }: any) => {
  const { playClickSound } = sounds();
  const [chainPage, setChainPage] = useState(1);
  const submitTransactions = () => {
    playClickSound();
  };
  return (
    <div className={styles.container}>
      {chainPage == 1 ? (
        <GuildInfo {...props} />
      ) : chainPage == 2 ? (
        <Permissions {...props} />
      ) : (
        <WhitelistMembers {...props} />
      )}
      <div className={styles.buttons}>
        {chainPage == 2 ? (
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
        ) : chainPage == 3 ? (
          <button
            className={styles.next_button}
            onClick={() =>
              props.whitelistedAppend({
                address: "",
                role: "",
              })
            }
          >
            <p>Add Member</p>
          </button>
        ) : null}
        {chainPage == 3 ? (
          <button
            className={styles.next_button}
            onClick={() => submitTransactions()}
          >
            <p>Submit</p>
          </button>
        ) : (
          <button
            className={styles.next_button}
            onClick={() => {
              playClickSound();
              setChainPage(chainPage + 1);
            }}
          >
            <p>Next</p>
          </button>
        )}
      </div>
      <div className={styles.chain}>
        <div
          className={
            chainPage == 1 ? styles.chain_number_active : styles.chain_number
          }
          onClick={() => {
            playClickSound();
            setChainPage(1);
          }}
        >
          <p>1</p>
        </div>
        <div
          className={
            chainPage == 2 ? styles.chain_number_active : styles.chain_number
          }
          onClick={() => {
            playClickSound();
            setChainPage(2);
          }}
        >
          <p>2</p>
        </div>
        <div
          className={
            chainPage == 3 ? styles.chain_number_active : styles.chain_number
          }
          onClick={() => {
            playClickSound();
            setChainPage(3);
          }}
        >
          <p>3</p>
        </div>
      </div>
    </div>
  );
};
