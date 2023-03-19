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
import { useUI } from "../context/UIContext";
import { displayAddress } from "../utils/address";
import { useStarkNetId } from "../hooks/useStarknetId";
import { SearchIcon } from "../shared/icons";

interface LayoutProps {
  leftSideMenu: ReactElement;
  leftSideMenuTitle: string | null;
  rightSideMenu: ReactElement;
  rightSideMenuTitle: string | null;
  main: ReactElement;
}

export default function Layout({
  leftSideMenu,
  leftSideMenuTitle,
  rightSideMenu,
  rightSideMenuTitle,
  main,
}: LayoutProps) {
  const { playSlidingDoorSound, playClickSound } = sounds();
  const {
    isLeftMenuOpen,
    handleLeftDrawerToggler,
    isRightMenuOpen,
    handleRightDrawerToggler,
  } = useUI();

  const { query, pathname, back, push } = useRouter();
  const { pid } = query;
  const titles = pathname.slice(1).split("/");
  const isPage = useCallback(
    (name: string) => name === titles[titles.length - 1],
    [pathname]
  );
  const { starknetId } = useStarkNetId(
    pid?.toString().startsWith("0x") ? pid.toString() : "0x0"
  );
  const title = titles[titles.length - 1];
  const titleWords = title.split("-");
  let pageTitle = "";
  for (let i = 0; i < titleWords.length; i++) {
    let titleWord = capitaliseFirst(titleWords[i]);
    pageTitle += titleWord + " ";
  }
  const formatTitle = pid
    ? pid.toString().startsWith("0x")
      ? starknetId
        ? starknetId
        : displayAddress(pid.toString())
      : capitaliseFirst(pid.toString())
    : pageTitle;

  const isPresent = useIsPresent();

  const [searchValue, setSearchValue] = useState("");

  const searchItems = [1, 2, 3, 4];

  return (
    <>
      <Header />
      <div className={styles.layout}>
        <div
          className={
            isLeftMenuOpen ? styles.left_menu : styles.left_menu_collapsed
          }
        >
          {isLeftMenuOpen ? leftSideMenu : null}
        </div>
        <button
          className={
            isLeftMenuOpen
              ? styles.left_drawer
              : [styles.left_drawer, styles.collapsed].join(" ")
          }
          onClick={() => {
            handleLeftDrawerToggler();
            playSlidingDoorSound();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="currentColor"
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
          <p
            className={
              isLeftMenuOpen
                ? styles.left_drawer_text
                : [styles.left_drawer_text, styles.collapsed].join(" ")
            }
          >
            {leftSideMenuTitle}
          </p>
        </button>
        <div className={styles.main}>
          <div className={styles.main_header_area}>
            <div className={styles.search_box}>
              <div className={styles.search_icon}>
                <SearchIcon />
              </div>
              <input
                placeholder="Search Guilds, Items, Accounts"
                value={searchValue}
                onChange={(e) => setSearchValue(e.currentTarget.value)}
                className={styles.search_input}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    console.log(searchValue);
                    push(`/search?term=${searchValue}`);
                    // <Link href={`/?search=${searchValue}`} passHref />;
                  }
                }}
              />
            </div>
            {searchValue.length >= 3 ? (
              <SearchDropdown searchItems={searchItems} />
            ) : null}
            <div className={styles.header}>
              {titles.length >= 2 ? (
                <div
                  className={styles.back_box}
                  onClick={() => {
                    push(pathname.replace("/" + titles[titles.length - 1], ""));
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
              isLeftMenuOpen && !isRightMenuOpen
                ? [styles.main_container, styles.right_collapsed].join(" ")
                : !isLeftMenuOpen && isRightMenuOpen
                ? [styles.main_container, styles.left_collapsed].join(" ")
                : !isLeftMenuOpen && !isRightMenuOpen
                ? [styles.main_container, styles.both_collapsed].join(" ")
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
            isRightMenuOpen
              ? styles.right_drawer
              : [styles.right_drawer, styles.collapsed].join(" ")
          }
          onClick={() => {
            handleRightDrawerToggler();
            playSlidingDoorSound();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="currentColor"
          >
            <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
          <p
            className={
              isRightMenuOpen
                ? styles.right_drawer_text
                : [styles.right_drawer_text, styles.collapsed].join(" ")
            }
          >
            {rightSideMenuTitle}
          </p>
        </button>
        <div
          className={
            isRightMenuOpen ? styles.right_menu : styles.right_menu_collapsed
          }
        >
          {isRightMenuOpen ? rightSideMenu : null}
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
