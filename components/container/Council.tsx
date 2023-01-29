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
              ? styles.council_title_selected
              : styles.council_title
          }
          onClick={() => setCouncilHeader("Voting Hall")}
        >
          Voting Hall
        </button>
        <button
          className={
            councilHeader == "Guild Tasks"
              ? styles.council_title_selected
              : styles.council_title
          }
          onClick={() => setCouncilHeader("Guild Tasks")}
        >
          Guild Tasks
        </button>
        <button
          className={
            councilHeader == "Proposals"
              ? styles.council_title_selected
              : styles.council_title
          }
          onClick={() => setCouncilHeader("Proposals")}
        >
          Proposals
        </button>
        <button
          className={
            councilHeader == "Funding"
              ? styles.council_title_selected
              : styles.council_title
          }
          onClick={() => setCouncilHeader("Funding")}
        >
          Funding
        </button>
      </div>
      <div className={styles.box}>
        {councilHeader == "Voting Hall" ? <VotingHall /> : null}
      </div>
    </div>
  );
};
