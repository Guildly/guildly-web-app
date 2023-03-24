import styles from "../../../styles/containers/guildhall/Leaderboard.module.css";
import Image from "next/image";

export const Leaderboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.guild_icon}></div>
        <div className={styles.guild_info}>
          <p className={styles.guild_title}>Core Lords</p>
          <div className={styles.guild_stats}>
            <div className={styles.guild_stat}>
              <img className={styles.stat_icon} />
              <p>9000 Members</p>
            </div>
            <div className={styles.guild_stat}>
              <img className={styles.stat_icon} />
              <p>12,000 Items</p>
            </div>
            <div className={styles.guild_stat}>
              <img className={styles.stat_icon} />
              <p>100 Games</p>
            </div>
            <div className={styles.guild_stat}>
              <img className={styles.stat_icon} />
              <p>1</p>
            </div>
          </div>
        </div>
        <div className={styles.main_stat}>
          <p className={styles.main_stat_title}>Permissions</p>
          <div className={styles.main_stat_content}>
            <p>12</p>
          </div>
        </div>
        <div className={styles.main_stat}>
          <p className={styles.main_stat_title}>Admins</p>
          <div className={styles.main_stat_content}>
            <p>12</p>
          </div>
        </div>
        <div className={styles.achievements}>
          <p className={styles.main_stat_title}>Achievements</p>
          <a
            className={styles.logo}
            href="https://cartridge.gg/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={"/cartridge_logo.webp"}
              alt="Cartridge_Logo"
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
