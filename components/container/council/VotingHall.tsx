import styles from "../../../styles/containers/council/VotingHall.module.css";
import Image from "next/image";

export const VotingHall = () => {
  return (
    <div className={styles.votes_list}>
      <div className={styles.vote}>
        <div className={styles.status}>
          <p>Active</p>
        </div>
        <div className={styles.main}>
          <div className={styles.content_details}>
            <Image
              src="/token_symbol.png"
              alt="vote_image"
              width={20}
              height={20}
            />
            <p className={styles.address}></p>
          </div>
          <div className={styles.vote_description}>
            <p>Change permissions</p>
          </div>
          <div className={styles.vote_results}>
            <div className={styles.results_row}>
              <p>Change</p>
              <p>56%</p>
            </div>
            <div className={styles.results_row}>
              <p>Remain</p>
              <p>44%</p>
            </div>
          </div>
          <div className={styles.snapshot}>
            <Image
              src="/snapshot_logo.png"
              alt="snapshot_logo"
              width={30}
              height={30}
            />
            <p className={styles.snapshot_logo}>View on Snapshot</p>
          </div>
        </div>
      </div>
    </div>
  );
};
