import type { ReactElement } from "react";
import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { Header } from "./navigation/Header";
import styles from "../styles/components/Layout.module.css";
import { motion, useIsPresent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { sounds } from "../shared/sounds";
import { capitaliseFirst } from "../utils/format";
import { SearchDropdown } from "./dropdowns";

export default function Layout({
  leftSideMenu,
  rightSideMenu,
  main,
}: {
  leftSideMenu: ReactElement;
  rightSideMenu: ReactElement;
  main: ReactElement;
}) {
  const { playSlidingDoorSound, playClickSound } = sounds();

  const { query, pathname, back } = useRouter();
  const titles = pathname.slice(1).split("/");
  const isPage = useCallback(
    (name: string) => name === titles[titles.length - 1],
    [pathname]
  );
  const title = titles[titles.length - 1];
  const titleWords = title.split("-");
  let formatTitle = "";
  for (let i = 0; i < titleWords.length; i++) {
    let titleWord = capitaliseFirst(titleWords[i]);
    formatTitle += titleWord + " ";
  }

  const [isLeftDrawerExpanded, setIsLeftDrawerExpanded] = useState(true);
  const [isRightDrawerExpanded, setIsRightDrawerExpanded] = useState(true);

  const handleLeftDrawerToggler = () => {
    if (isLeftDrawerExpanded) {
      setIsLeftDrawerExpanded(false);
    } else {
      setIsLeftDrawerExpanded(true);
    }
  };

  const handleRightDrawerToggler = () => {
    if (isRightDrawerExpanded) {
      setIsRightDrawerExpanded(false);
    } else {
      setIsRightDrawerExpanded(true);
    }
  };

  const isPresent = useIsPresent();

  const [searchValue, setSearchValue] = useState("");

  const searchItems = [1, 2, 3, 4];

  return (
    <>
      <Header />
      <div className={styles.layout}>
        <div
          className={
            isLeftDrawerExpanded ? styles.left_menu : styles.left_menu_collapsed
          }
        >
          {isLeftDrawerExpanded ? leftSideMenu : null}
        </div>
        <button
          className={
            isLeftDrawerExpanded
              ? styles.left_drawer
              : styles.left_drawer_collapsed
          }
          onClick={() => {
            handleLeftDrawerToggler();
            playSlidingDoorSound();
          }}
        >
          {isLeftDrawerExpanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="currentColor"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="currentColor"
            >
              <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          )}
        </button>
        <div className={styles.main}>
          <div className={styles.main_header_area}>
            <div className={styles.search_box}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className={styles.search_icon}
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
              </svg>
              <input
                placeholder="Search Guilds, Items, Accounts"
                value={searchValue}
                onChange={(e) => setSearchValue(e.currentTarget.value)}
                className={styles.search_input}
              ></input>
            </div>
            {searchValue.length >= 3 ? (
              <SearchDropdown searchItems={searchItems} />
            ) : null}
            <div className={styles.header}>
              {titles.length >= 2 ? (
                <div
                  className={styles.back_box}
                  onClick={() => {
                    back();
                    playClickSound();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                    className={styles.back_icon}
                  >
                    <path d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480v32h32 64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z" />
                  </svg>
                  <p>Back to {capitaliseFirst(titles[titles.length - 2])}</p>
                </div>
              ) : null}
              <div className={styles.page_title}>
                <p>{formatTitle}</p>
              </div>
            </div>
          </div>
          <motion.div
            className={
              isLeftDrawerExpanded && !isRightDrawerExpanded
                ? styles.main_container_right_collapsed
                : !isLeftDrawerExpanded && isRightDrawerExpanded
                ? styles.main_container_left_collapsed
                : !isLeftDrawerExpanded && !isRightDrawerExpanded
                ? styles.main_container_both_collapsed
                : styles.main_container
            }
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0,
                duration: 0.5,
                ease: [1, 1, 0.5, 1],
              },
            }}
          >
            {main}
          </motion.div>
        </div>
        <button
          className={
            isRightDrawerExpanded
              ? styles.right_drawer
              : styles.right_drawer_collapsed
          }
          onClick={() => {
            handleRightDrawerToggler();
            playSlidingDoorSound();
          }}
        >
          {isRightDrawerExpanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="currentColor"
            >
              <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="currentColor"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          )}
        </button>
        <div
          className={
            isRightDrawerExpanded
              ? styles.right_menu
              : styles.right_menu_collapsed
          }
        >
          {isRightDrawerExpanded ? rightSideMenu : null}
        </div>
      </div>
      {isPage("guild") ? (
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{
            scaleX: 0,
            transition: { duration: 1.5, ease: [1, 0, 0.13, 1] },
          }}
          style={{ originX: isPresent ? 0 : 1 }}
        >
          <motion.div
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
              transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [1, 1, 0.5, 0],
              },
            }}
          >
            <Image
              src={"/token_symbol.png"}
              height={200}
              width={200}
              alt="Guild Image"
            />
          </motion.div>
        </motion.div>
      ) : null}
      {titles.length == 1 || isPage("my-guild") ? (
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{
            scaleX: 0,
            transition: { duration: 1.5, ease: [1, 0, 0.13, 1] },
          }}
          style={{ originX: isPresent ? 0 : 1 }}
          className={
            isPage("guildhall")
              ? styles.guild_screen
              : isPage("bank")
              ? styles.guild_screen
              : isPage("market")
              ? styles.guild_screen
              : isPage("council")
              ? styles.guild_screen
              : styles.guild_screen
          }
        >
          {/* <motion.div
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
              transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [1, 1, 0.5, 0],
              },
            }}
            className={
              isPage("guildhall")
                ? styles.guild_background
                : isPage("bank")
                ? styles.guild_background
                : isPage("market")
                ? styles.guild_background
                : styles.guild_background
            }
          /> */}
        </motion.div>
      ) : null}
    </>
  );
}
