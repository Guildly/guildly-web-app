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
              <div className={styles.search_dropdown}>
                <div className={styles.search_section}>
                  <div className={styles.section_header}>
                    <p>Guilds</p>
                  </div>
                  <div className={styles.search_list}>
                    {searchItems.map((_, index) => (
                      <Link key={index} href="/guildhall/guilds/0x0" passHref>
                        <div
                          className={styles.search_item}
                          onClick={() => playClickSound()}
                        >
                          <Image
                            src={"/emblem-example.png"}
                            alt="guild-icon"
                            width={30}
                            height={30}
                            className={styles.search_icon}
                          />
                          <div className={styles.search_content}>
                            <p>Core Lords</p>
                            <div className={styles.item_attributes}>
                              <div className={styles.attribute}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                  className={styles.attribute_icon}
                                  fill="currentColor"
                                >
                                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                                </svg>
                                <p>90</p>
                                <p>Members</p>
                              </div>
                              <div className={styles.attribute}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  className={styles.attribute_icon}
                                  fill="currentColor"
                                >
                                  <path d="M64 0C28.7 0 0 28.7 0 64V416c0 35.3 28.7 64 64 64H80l16 32h64l16-32H400l16 32h64l16-32h16c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM224 320c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80zm0 80c-88.4 0-160-71.6-160-160s71.6-160 160-160s160 71.6 160 160s-71.6 160-160 160zM480 221.3V336c0 8.8-7.2 16-16 16s-16-7.2-16-16V221.3c-18.6-6.6-32-24.4-32-45.3c0-26.5 21.5-48 48-48s48 21.5 48 48c0 20.9-13.4 38.7-32 45.3z" />
                                </svg>
                                <p>90</p>
                                <p>Items</p>
                              </div>
                              <div className={styles.attribute}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 640 512"
                                  className={styles.attribute_icon}
                                  fill="currentColor"
                                >
                                  <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 248c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40zm-24 56c0 22.1-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z" />
                                </svg>
                                <p>90</p>
                                <p>Games</p>
                              </div>
                              <div className={styles.attribute}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  className={styles.attribute_icon}
                                  fill="currentColor"
                                >
                                  <path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z" />
                                </svg>
                                <p>95th</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className={styles.search_section}>
                  <div className={styles.section_header}>
                    <p>Accounts</p>
                  </div>
                  {searchItems.map((_, index) => (
                    <Link key={index} href="/guildhall/accounts/0x0" passHref>
                      <div
                        className={styles.search_item}
                        onClick={() => playClickSound()}
                      >
                        <Image
                          src={""}
                          alt="guild-icon"
                          width={30}
                          height={30}
                        />
                        <div className={styles.search_content}>
                          <p>Core Lords</p>
                          <div className={styles.item_attributes}></div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className={styles.search_section}>
                  <div className={styles.section_header}>
                    <p>Items</p>
                  </div>
                  {searchItems.map((_, index) => (
                    <div
                      className={styles.search_item}
                      key={index}
                      onClick={() => playClickSound()}
                    >
                      <Image src={""} alt="guild-icon" width={30} height={30} />
                      <div className={styles.search_content}>
                        <p>Core Lords</p>
                        <div className={styles.item_attributes}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
              ? styles.guildhall_screen
              : isPage("bank")
              ? styles.bank_screen
              : isPage("market")
              ? styles.market_screen
              : isPage("council")
              ? styles.council_screen
              : styles.council_screen
          }
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
            className={
              isPage("guildhall")
                ? styles.guildhall_background
                : isPage("bank")
                ? styles.bank_background
                : isPage("market")
                ? styles.market_background
                : styles.council_background
            }
          />
        </motion.div>
      ) : null}
    </>
  );
}
