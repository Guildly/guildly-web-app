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
              <div className={styles.guild_attributes}>
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
              </div>
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
