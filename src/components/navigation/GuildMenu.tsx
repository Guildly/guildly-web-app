import React, { useCallback, useState } from "react";
import styles from "../../styles/navigation/GuildMenu.module.css";
import Image from "next/image";
import { useGuild } from "../../context/GuildContext";
import { sounds } from "../../shared/sounds";
import { Guild } from "../../context/GuildContext";
import Link from "next/link";
import {
  MasterIcon,
  CloseIcon,
  InfoIcon,
  VaultIcon,
  GameIcon,
  UserIcon,
} from "../../shared/icons";

interface GuildMenuProps {
  close: () => void;
}

export const GuildMenu = ({ close }: GuildMenuProps) => {
  const { setGuild, guilds } = useGuild();
  const { playClickSound } = sounds();
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
                      <div className={styles.icon}>
                        <VaultIcon />
                      </div>
                      <p>Items</p>
                    </div>
                  </th>
                  <th>
                    <div className={styles.attribute_header}>
                      <div className={styles.icon}>
                        <UserIcon />
                      </div>
                      <p>Members</p>
                    </div>
                  </th>
                  <th>
                    <div className={styles.attribute_header}>
                      <div className={styles.icon}>
                        <GameIcon />
                      </div>
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
