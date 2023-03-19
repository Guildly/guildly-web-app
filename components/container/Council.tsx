import styles from "../../styles/containers/Council.module.css";
import { useState } from "react";
import { VotingHall } from "./council/VotingHall";

export const Council = () => {
  const [councilHeader, setCouncilHeader] = useState("Voting Hall");
  return (
    <div className={styles.container}>
      <div className={styles.council_header}>
        <button
          className={
            councilHeader == "Voting Hall"
              ? [styles.council_title, styles.selected].join(" ")
              : styles.council_title
          }
          onClick={() => setCouncilHeader("Voting Hall")}
        >
          <p>Voting Hall</p>
        </button>
        <button
          className={
            councilHeader == "Guild Tasks"
              ? [styles.council_title, styles.selected].join(" ")
              : styles.council_title
          }
          onClick={() => setCouncilHeader("Guild Tasks")}
        >
          <p>Guild Tasks</p>
        </button>
        <button
          className={
            councilHeader == "Proposals"
              ? [styles.council_title, styles.selected].join(" ")
              : styles.council_title
          }
          onClick={() => setCouncilHeader("Proposals")}
        >
          <p>Proposals</p>
        </button>
        <button
          className={
            councilHeader == "Funding"
              ? [styles.council_title, styles.selected].join(" ")
              : styles.council_title
          }
          onClick={() => setCouncilHeader("Funding")}
        >
          <p>Funding</p>
        </button>
      </div>
      <div className={styles.box}>
        {councilHeader == "Voting Hall" ? <VotingHall /> : null}
      </div>
    </div>
  );
};
