import styles from "../../styles/components/panels/DepositDialog.module.css";
import { sounds } from "../../shared/sounds";
import { MasterIcon, CloseIcon, InfoIcon } from "../../shared/icons";
import { useGuild } from "../../context/GuildContext";
import { useUI } from "../../context/UIContext";
import Image from "next/image";

interface DepositDialogProps {
  close: () => void;
  isOpen: boolean | undefined;
}

export const DepositDialog = ({ close, isOpen }: DepositDialogProps) => {
  const { playClickSound } = sounds();
  const { toggleTransactionCart } = useUI();
  const { guilds } = useGuild();
  return (
    <>
      <div
        className={
          isOpen
            ? [styles.selected_background, styles.active].join(" ")
            : styles.selected_background
        }
      />
      <div
        className={
          isOpen
            ? [styles.deposit_container, styles.open].join(" ")
            : styles.deposit_container
        }
      >
        <div className={styles.header}>
          <div className={styles.title}>
            <p>Deposit</p>
          </div>
          <button
            className={styles.close_button}
            onClick={() => {
              playClickSound();
              close();
            }}
          >
            <div className={styles.close_icon}>
              <CloseIcon />
            </div>
          </button>
        </div>
        <div className={styles.guild_elements}>
          {guilds.map((guild, index) => (
            <div
              className={styles.guildbox}
              onClick={() => {
                playClickSound();
                toggleTransactionCart();
                close();
              }}
              key={index}
            >
              <div className={styles.guild_icon}>
                <Image
                  width={50}
                  height={50}
                  alt="Test Image"
                  src={guild.emblem ? guild.emblem : "/placeholder-image.png"}
                />
              </div>
              <div className={styles.guild_content}>
                <div className={styles.guild_name}>
                  <p>{guild.name}</p>
                </div>
                <table>
                  <tr className={styles.guild_attributes}>
                    <th>
                      <div className={styles.attribute_header}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          fill="currentColor"
                          className={styles.icon}
                        >
                          <path d="M64 0C28.7 0 0 28.7 0 64V416c0 35.3 28.7 64 64 64H80l16 32h64l16-32H400l16 32h64l16-32h16c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM224 320a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-240a160 160 0 1 1 0 320 160 160 0 1 1 0-320zM480 221.3V336c0 8.8-7.2 16-16 16s-16-7.2-16-16V221.3c-18.6-6.6-32-24.4-32-45.3c0-26.5 21.5-48 48-48s48 21.5 48 48c0 20.9-13.4 38.7-32 45.3z" />
                        </svg>
                        <p>Items</p>
                      </div>
                    </th>
                    <th>
                      <div className={styles.attribute_header}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                          className={styles.icon}
                        >
                          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                        </svg>
                        <p>Members</p>
                      </div>
                    </th>
                    <th>
                      <div className={styles.attribute_header}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          fill="currentColor"
                          className={styles.icon}
                        >
                          <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 248c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40zm-24 56c0 22.1-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z" />
                        </svg>
                        <p>Games</p>
                      </div>
                    </th>
                    <th>
                      <div className={styles.attribute_header}>
                        <div className={styles.icon}>
                          <InfoIcon />
                        </div>
                        <p>Info</p>
                      </div>
                    </th>
                  </tr>
                  <tr className={styles.attribute_stats}>
                    <td className={styles.attribute}>100</td>
                    <td>
                      <div className={styles.members}>
                        <div className={styles.master}>
                          <div className={styles.master_icon}>
                            <MasterIcon />
                          </div>
                          <p>bob.stark</p>
                        </div>
                        <p>20</p>
                      </div>
                    </td>
                    <td>
                      <div className={styles.games}>
                        <img
                          src="/influence_logo.png"
                          alt="game-logo"
                          className={styles.game}
                        />
                        <img
                          src="/eternum_logo.svg"
                          alt="game-logo"
                          className={styles.game}
                        />
                        <img
                          src="/briq_logo.svg"
                          alt="game-logo"
                          className={styles.game}
                        />
                      </div>
                    </td>
                    <td>
                      <div className={styles.member_time}>
                        <p className={styles.time_header}>Member for</p>
                        <p className={styles.time}>1w 2d 3h</p>
                      </div>
                    </td>
                  </tr>
                </table>
                {/* <div className={styles.guild_attributes}>
          <p>Items</p>
          <p>Members</p>
          <p>Permissions</p>
          <p>Games</p>
        </div>
        <div className={styles.attribute_stats}>
          <p>10</p>
          <p>20</p>
          <p>30</p>
          <p>40</p>
        </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
