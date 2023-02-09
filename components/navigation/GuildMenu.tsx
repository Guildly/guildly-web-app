import React, { useCallback, useState } from "react";
import styles from "../../styles/navigation/GuildMenu.module.css";
import Image from "next/image";
import { useGuild } from "../../context/GuildContext";
import { sounds } from "../../shared/sounds";
import { Guild } from "../../context/GuildContext";
import Link from "next/link";

interface GuildMenuProps {
  close: () => void;
}

export const GuildMenu = ({ close }: GuildMenuProps) => {
  const { setGuild } = useGuild();
  const { playClickSound } = sounds();
  const guilds: Guild[] = [
    {
      name: "Core Lords",
      address: "0x0",
      emblem: "/emblem-example.png",
    },
    {
      name: "Test Warriors",
      address: "0x0",
      emblem: "/emblem-example.png",
    },
    {
      name: "Core Lords",
      address: "0x0",
      emblem: "/emblem-example.png",
    },
    {
      name: "Test Warriors",
      address: "0x0",
      emblem: "/emblem-example.png",
    },
  ];
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>
          <p>Select Guild</p>
        </div>
        <button
          className={styles.close_button}
          onClick={() => {
            close();
            playClickSound();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            fill="currentColor"
            className={styles.icon}
          >
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
          </svg>
        </button>
      </div>
      <div className={styles.guild_elements}>
        {guilds.map((guild, index) => (
          <div
            className={styles.guildbox}
            onClick={() => {
              setGuild(guild);
              close();
              playClickSound();
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
                    {" "}
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
                </tr>
                <tr className={styles.attribute_stats}>
                  <td>10</td>
                  <td>20</td>
                  <td>30</td>
                  <td>40</td>
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
      <Link
        href="/guildhall/guilds"
        passHref
        onClick={() => playClickSound()}
        className={styles.join_box}
      >
        <p>Join a Guild</p>
      </Link>
      {/* <div className={styles.blur_area} /> */}
    </>
  );
};
