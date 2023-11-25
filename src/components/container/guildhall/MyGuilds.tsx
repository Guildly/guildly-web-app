import styles from "../../../styles/containers/guildhall/MyGuilds.module.css";
import Image from "next/image";
import {
  UserIcon,
  VaultIcon,
  TrophyIcon,
  GameIcon,
  MasterIcon,
  EllipsisIcon,
  InfoIcon,
} from "../../../shared/icons";
import Link from "next/link";
import { sounds } from "../../../shared/sounds";

export const MyGuilds = () => {
  const { playClickSound } = sounds();
  const guild = { address: "0x0" };
  return (
    <div className={styles.container}>
      <Link
        href={"/guildhall/my-guilds/" + guild.address}
        passHref
        onClick={() => playClickSound()}
        key={1}
        className={styles.link}
      >
        <div className={styles.row}>
          <div className={styles.guild_icon}>
            <Image
              src={"/guildly-logo.png"}
              alt="Guildly_Logo"
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.guild_info}>
            <p className={styles.guild_title}>Core Lords</p>
            <div className={styles.guild_stats}>
              <div className={styles.guild_stat}>
                <div className={styles.stat_header}>
                  <div className={styles.stat_icon}>
                    <UserIcon />
                  </div>
                  <p>Members</p>
                </div>
                <div className={styles.stat_content}>
                  <p>20</p>
                  <div className={styles.master}>
                    <div className={styles.master_icon}>
                      <MasterIcon />
                    </div>
                    <p>bob.stark</p>
                  </div>
                </div>
              </div>
              <div className={styles.guild_stat}>
                <div className={styles.stat_header}>
                  <div className={styles.stat_icon}>
                    <VaultIcon />
                  </div>
                  <p>Items</p>
                </div>
                <div className={styles.stat_content}>
                  <p>20</p>
                  <div className={styles.games}>
                    <div className={styles.item}>
                      <Image
                        color={"white"}
                        src={"/influence_logo.png"}
                        alt="game-image"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className={styles.item}>
                      <Image
                        color={"white"}
                        src={"/eternum_logo.svg"}
                        alt="game-image"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className={styles.item}>
                      <Image
                        color={"white"}
                        src={"/briq_logo.svg"}
                        alt="game-image"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className={styles.ellipsis}>
                      <EllipsisIcon />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.guild_stat}>
                <div className={styles.stat_header}>
                  <div className={styles.stat_icon}>
                    <GameIcon />
                  </div>
                  <p>Games</p>
                </div>
                <div className={styles.stat_content}>
                  <p>20</p>
                  <div className={styles.games}>
                    <div className={styles.game}>
                      <Image
                        color={"white"}
                        src={"/influence_logo.png"}
                        alt="game-image"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className={styles.game}>
                      <Image
                        color={"white"}
                        src={"/eternum_logo.svg"}
                        alt="game-image"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className={styles.game}>
                      <Image
                        color={"white"}
                        src={"/briq_logo.svg"}
                        alt="game-image"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className={styles.ellipsis}>
                      <EllipsisIcon />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.guild_stat}>
                <div className={styles.stat_header}>
                  <div className={styles.stat_icon}>
                    <InfoIcon />
                  </div>
                  <p>Info</p>
                </div>
                <div className={styles.stat_content}>
                  <div className={styles.member_time}>
                    <p className={styles.time_header}>Member for</p>
                    <p className={styles.time}>1w 2d 3h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.main_stat}>
            <p className={styles.main_stat_title}>Your Roles</p>
            <div className={styles.roles_stat_content}>
              <div className={styles.roles}>
                <div className={styles.role_badge}>
                  <div className={styles.role_icon}>
                    <MasterIcon />
                  </div>
                </div>
                <div className={styles.role_badge}>
                  <div className={styles.role_icon}>
                    <UserIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.main_stat}>
            <p className={styles.main_stat_title}>Your Items</p>
            <div className={styles.main_stat_content}>
              <p>12</p>
            </div>
          </div>
          <div className={styles.achievements}>
            <p className={styles.main_stat_title}>Your Actions</p>
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
      </Link>
    </div>
  );
};
