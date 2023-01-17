import styles from "../../styles/containers/Guildhall.module.css";
import Link from "next/link";

export const Guildhall = () => {
  return (
    <div className={styles.container}>
      <Link href="/guildhall/create-a-guild" passHref>
        <div className={styles.navbox}>
          <p>Create a Guild</p>
        </div>
      </Link>
      <Link href="/guildhall/guilds" passHref>
        <div className={styles.navbox}>
          <p>Guilds</p>
        </div>
      </Link>
      <Link href="/guild/test-guild" passHref>
        <div className={styles.navbox}>
          <p>My Guild</p>
        </div>
      </Link>
      <Link href="/guildhall/guilds" passHref>
        <div className={styles.navbox}>
          <p>Managing</p>
        </div>
      </Link>
      <Link href="/guildhall/guilds" passHref>
        <div className={styles.navbox}>
          <p>Managing</p>
        </div>
      </Link>
      <Link href="/guildhall/guilds" passHref>
        <div className={styles.navbox}>
          <p>Managing</p>
        </div>
      </Link>
    </div>
  );
};
