import styles from "../../../styles/containers/guildhall/CreateGuild.module.css";
import { useState } from "react";
import { GuildInfo } from "./GuildInfo";
import { Permissions } from "./Permissions";

export const CreateGuild = () => {
  const [chainPage, setChainPage] = useState(1);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {chainPage == 1 ? (
          <GuildInfo />
        ) : chainPage == 2 ? (
          <Permissions />
        ) : null}
      </div>
      <button
        className={styles.next_button}
        onClick={() => setChainPage(chainPage + 1)}
      >
        <p>Next</p>
      </button>
      <div className={styles.chain}>
        <div
          className={
            chainPage == 1 ? styles.chain_number_active : styles.chain_number
          }
          onClick={() => setChainPage(1)}
        >
          <p>1</p>
        </div>
        <div
          className={
            chainPage == 2 ? styles.chain_number_active : styles.chain_number
          }
          onClick={() => setChainPage(2)}
        >
          <p>2</p>
        </div>
        <div
          className={
            chainPage == 3 ? styles.chain_number_active : styles.chain_number
          }
          onClick={() => setChainPage(3)}
        >
          <p>3</p>
        </div>
      </div>
    </div>
  );
};
