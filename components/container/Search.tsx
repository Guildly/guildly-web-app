import styles from "../../styles/containers/Search.module.css";

export const Search = () => {
  return (
    <>
      <div className={styles.search_header}>
        <div className={styles.search_title}>
          <p>Example</p>
        </div>
      </div>
      <div className={styles.container}></div>
    </>
  );
};
