import styles from "../../../styles/containers/guildhall/Games.module.css";
import Image from "next/image";
import { sounds } from "../../../shared/sounds";
import Link from "next/link";

export const Games = () => {
  const { playClickSound } = sounds();
  return (
    <div className={styles.container}>
      <div className={styles.games}>
        <Link href="/guildhall/games/influence" passHref>
          <div className={styles.game_icon} onClick={() => playClickSound()}>
            <Image
              src="/influence_logo.png"
              width={100}
              height={100}
              alt="influence_logo"
            />
          </div>
        </Link>
        <Link href="/guildhall/games/eternum" passHref>
          <div className={styles.game_icon} onClick={() => playClickSound()}>
            <Image
              src="/eternum_logo.svg"
              width={100}
              height={100}
              alt="eternum_logo"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
