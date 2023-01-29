import styles from "../../styles/containers/Guildhall.module.css";
import Link from "next/link";
import { sounds } from "../../shared/sounds";

export const Guildhall = () => {
  const { playGuildSound, playClickSound } = sounds();
  return (
    <div className={styles.container}>
      <Link
        href="/guildhall/create-a-guild"
        onClick={() => playClickSound()}
        passHref
      >
        <div className={styles.navbox}>
          <p>Create a Guild</p>
        </div>
      </Link>
      <Link href="/guildhall/guilds" onClick={() => playClickSound()} passHref>
        <div className={styles.navbox}>
          <p>Guilds</p>
        </div>
      </Link>
      <Link
        href="/guildhall/my-guild"
        onClick={() => playGuildSound()}
        passHref
      >
        <div className={styles.navbox}>
          <p>My Guild</p>
        </div>
      </Link>
      <Link href="/guildhall/managing" passHref>
        <div className={styles.navbox}>
          <p>Managing</p>
        </div>
      </Link>
      <Link href="/guildhall/leaderboard" passHref>
        <div className={styles.navbox}>
          <p>Leaderboard</p>
        </div>
      </Link>
      <Link href="/guildhall/games" passHref>
        <div className={styles.navbox}>
          <p>Games</p>
        </div>
      </Link>
    </div>
  );
};
