import styles from "../styles/components/GuildsScroll.module.css";
import Image from "next/image";
import { VaultIcon, UserIcon, TrophyIcon, MasterIcon } from "../shared/icons";
import Link from "next/link";
import { sounds } from "../shared/sounds";

interface GuildsProps {
  guilds: any[];
}

export const Guilds = ({ guilds }: GuildsProps) => {
  const { playClickSound } = sounds();
  return (
    <div className={styles.guilds_area}>
      {guilds.map((guild, index) => (
        <div
          className={styles.guild}
          key={index}
          onClick={() => playClickSound()}
        >
          <Link href="/guildhall/guilds/0x0" passHref>
            <div className={styles.guild_header}>
              <div className={styles.guild_image}>
                <Image
                  src={guild.guild_image}
                  alt="guild_icon"
                  fill={true}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p>{guild.guild}</p>
            </div>
            <div className={styles.guild_stats}>
              <div className={styles.guild_stat}>
                <div className={styles.guild_stat_header}>
                  <div className={styles.guild_stat_icon}>
                    <VaultIcon />
                  </div>
                  <p>Items</p>
                </div>
                <p className={styles.stat_text}>100</p>
              </div>
              <div className={styles.guild_stat}>
                <div className={styles.guild_stat_header}>
                  <div className={styles.guild_stat_icon}>
                    <UserIcon />
                  </div>
                  <p>Members</p>
                </div>
                <div className={styles.guild_master}>
                  <div className={styles.guild_master_icon}>
                    <MasterIcon />
                  </div>
                  <p className={styles.master_text}>bob.stark</p>
                </div>
                <p className={styles.stat_text}>20</p>
              </div>
              <div className={styles.guild_stat}>
                <div className={styles.guild_stat_header}>
                  <div className={styles.guild_stat_icon}>
                    <TrophyIcon />
                  </div>
                  <p>Rank</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
