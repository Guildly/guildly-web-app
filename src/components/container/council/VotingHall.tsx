import styles from "../../../styles/containers/council/VotingHall.module.css";
import Image from "next/image";
import { displayAddress } from "../../../utils/address";

export const VotingHall = () => {
  const votes = [1, 2];
  return (
    <div className={styles.votes_list}>
      {votes.map((_, index) => (
        <div className={styles.vote} key={index}>
          <div className={styles.status}>
            <p>Active</p>
          </div>
          <div className={styles.main}>
            <div className={styles.details}>
              <div className={styles.content_details}>
                <Image
                  src="/token_symbol.png"
                  alt="vote_image"
                  width={50}
                  height={50}
                />
                <p className={styles.address}>
                  {`Proposed by: ${displayAddress(
                    "0x7642a1c8d575b0c0f9a7ad7cceb5517c02f36e5f3b36b25429cc7c99383ed0a"
                  )}`}
                </p>
              </div>
              <div className={styles.vote_description}>
                <p>Change permissions</p>
              </div>
            </div>
            <div className={styles.vote_results}>
              <div className={styles.results_row}>
                <p>Change</p>
                <p>56%</p>
                <button className={styles.vote_button}>Vote</button>
              </div>
              <div className={styles.results_row}>
                <p>Remain</p>
                <p>44%</p>
                <button className={styles.vote_button}>Vote</button>
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
      ))}
    </div>
  );
};
