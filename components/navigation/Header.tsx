import { useCallback, useState, useEffect, useRef, use } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/components/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { GuildMenu } from "./GuildMenu";
import { ConnectMenu } from "./ConnectMenu";
import { TransactionPanel } from "./transactions/TransactionPanel";
import { useAccount } from "@starknet-react/core";
import { useGuild } from "../../context/GuildContext";
import { displayAddress } from "../../utils/address";
import { sounds } from "../../shared/sounds";
import { useStarkNetId } from "../../hooks/useStarknetId";
import { useSound } from "../../context/SoundContext";

export const Header = () => {
  const { address } = useAccount();
  const [copiedAddress, setCopiedAddress] = useState(false);
  const { starknetId } = useStarkNetId(address ? address : "0x0");
  const { musicPlaying, toggleSound } = useSound();

  useEffect(() => {
    setTimeout(() => {
      if (copiedAddress) {
        setCopiedAddress(false);
      }
    }, 1000);
  }, [copiedAddress]);

  const { guild } = useGuild();

  const { query, pathname } = useRouter();
  const titles = pathname.slice(1).split("/");
  const isBasePage = useCallback(
    (name: string) => name === titles[0],
    [pathname]
  );
  const isPage = useCallback(
    (name: string) => name === titles[titles.length - 1],
    [pathname]
  );
  const navStyle = (page: string) => {
    return isBasePage(page)
      ? styles.link_container_highlighted
      : styles.link_container;
  };
  const [isGuildDialogSelected, setIsGuildDialogSelected] = useState(false);
  const [isConnectMenuSelected, setIsConnectMenuSelected] = useState(false);
  const [isTransactionsSelected, setIsTransactionsSelected] = useState(false);

  const guildDialogRef = useRef<HTMLDivElement>(null);
  const connectMenuRef = useRef<HTMLDivElement>(null);
  const transactionsRef = useRef<HTMLDivElement>(null);

  const checkIfGuildDialogClickedOutside = (event: any) => {
    if (
      isGuildDialogSelected &&
      guildDialogRef.current &&
      !guildDialogRef.current.contains(event.target)
    ) {
      setIsGuildDialogSelected(false);
    }
  };

  const checkIfConnectMenuClickedOutside = (event: any) => {
    if (
      isConnectMenuSelected &&
      connectMenuRef.current &&
      !connectMenuRef.current.contains(event.target)
    ) {
      setIsConnectMenuSelected(false);
    }
  };

  const checkIfTransactionsClickedOutside = (event: any) => {
    if (
      isTransactionsSelected &&
      transactionsRef.current &&
      !transactionsRef.current.contains(event.target)
    ) {
      setIsTransactionsSelected(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", checkIfGuildDialogClickedOutside, true);
    document.addEventListener("click", checkIfConnectMenuClickedOutside, true);
    document.addEventListener("click", checkIfTransactionsClickedOutside, true);
    return () => {
      document.removeEventListener(
        "click",
        checkIfGuildDialogClickedOutside,
        true
      );
      document.removeEventListener(
        "click",
        checkIfConnectMenuClickedOutside,
        true
      );
      document.removeEventListener(
        "click",
        checkIfTransactionsClickedOutside,
        true
      );
    };
  }, [isGuildDialogSelected, isConnectMenuSelected, isTransactionsSelected]);

  const {
    playDoorSound,
    playCoinsSound,
    playSwordSound,
    playGavelSound,
    playClickSound,
  } = sounds();

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left_border} />
        <div className={styles.left_head} />
        <div className={styles.navbar}>
          <div className={styles.nav_links}>
            <Link
              href="/guildhall"
              passHref
              onClick={() => playDoorSound()}
              className={navStyle("guildhall")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                className={styles.icon}
              >
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              </svg>
              <p>Guildhall</p>
            </Link>
            <Link
              href="/bank"
              passHref
              onClick={() => playCoinsSound()}
              className={navStyle("bank")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                className={styles.icon}
              >
                <path d="M64 0C28.7 0 0 28.7 0 64V416c0 35.3 28.7 64 64 64H80l16 32h64l16-32H400l16 32h64l16-32h16c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM224 320a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-240a160 160 0 1 1 0 320 160 160 0 1 1 0-320zM480 221.3V336c0 8.8-7.2 16-16 16s-16-7.2-16-16V221.3c-18.6-6.6-32-24.4-32-45.3c0-26.5 21.5-48 48-48s48 21.5 48 48c0 20.9-13.4 38.7-32 45.3z" />
              </svg>
              <p>Bank</p>
            </Link>
            <Link
              href="/market"
              passHref
              onClick={() => playSwordSound()}
              className={navStyle("market")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className={styles.icon}
              >
                <path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z" />
              </svg>
              <p>Market</p>
            </Link>
            <Link
              href="/council"
              passHref
              onClick={() => playGavelSound()}
              className={navStyle("council")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                className={styles.icon}
              >
                <path d="M96 80c0-26.5 21.5-48 48-48H432c26.5 0 48 21.5 48 48V384H96V80zm313 47c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L409 161c9.4-9.4 9.4-24.6 0-33.9zM0 336c0-26.5 21.5-48 48-48H64V416H512V288h16c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336z" />
              </svg>
              <p>Council</p>
            </Link>
          </div>
          <Link href="/" passHref>
            <div className={styles.logo_border} />
            {isPage("my-guild") && guild ? (
              <div
                className={styles.logo}
                style={{
                  backgroundImage: "url(" + guild.emblem + ")",
                }}
              />
            ) : (
              <div className={styles.logo} />
            )}
          </Link>
          <div className={styles.network_links}>
            <div ref={guildDialogRef}>
              {guild && guild.name ? (
                <button
                  className={styles.guild_button}
                  onClick={() => {
                    setIsGuildDialogSelected(!isGuildDialogSelected);
                    playClickSound();
                  }}
                >
                  <Image
                    src="/emblem-example.png"
                    alt="guild-emblem"
                    width={30}
                    height={30}
                    className={styles.guild_image}
                  />
                  <p>{guild.name}</p>
                </button>
              ) : (
                <button
                  className={styles.guild_button}
                  onClick={() => {
                    setIsGuildDialogSelected(!isGuildDialogSelected);
                    playClickSound();
                  }}
                >
                  <p>Select Guild</p>
                </button>
              )}
              <div
                className={
                  isGuildDialogSelected
                    ? [styles.guild_container, styles.open].join(" ")
                    : styles.guild_container
                }
              >
                <GuildMenu close={() => setIsGuildDialogSelected(false)} />
              </div>
            </div>
            {/* <button className={styles.gld_button}>
              <div className={styles.token_info}>
                <Image
                  className={styles.token_icon}
                  src={"/token_symbol.png"}
                  alt="GLD Icon"
                  height={25}
                  width={25}
                />
                <p>GLD</p>
              </div>
              <p className={styles.token_number}>1000</p>
            </button> */}
            <div ref={connectMenuRef}>
              {address ? (
                <>
                  <div
                    className={styles.connect_button}
                    onClick={() => {
                      setIsConnectMenuSelected(!isConnectMenuSelected);
                      playClickSound();
                    }}
                  >
                    <p>{starknetId ? starknetId : displayAddress(address)}</p>
                    <button
                      className={styles.copied_button}
                      onClick={() => {
                        const blob = new Blob([address], {
                          type: "text/plain",
                        });
                        const item = new ClipboardItem({ "text/plain": blob });
                        navigator.clipboard.write([item]).then(() => {
                          setCopiedAddress(true);
                          playClickSound();
                        });
                      }}
                    >
                      <svg
                        className={styles.copied_icon}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  {copiedAddress ? (
                    <div className={styles.copied_address_box}>Copied!</div>
                  ) : null}
                </>
              ) : (
                <button
                  className={styles.connect_button}
                  onClick={() => {
                    setIsConnectMenuSelected(!isConnectMenuSelected);
                    playClickSound();
                  }}
                >
                  <p>Connect</p>
                </button>
              )}

              <div
                className={
                  isConnectMenuSelected
                    ? [styles.connect_container, styles.open].join(" ")
                    : styles.connect_container
                }
              >
                <ConnectMenu close={() => setIsConnectMenuSelected(false)} />
              </div>
            </div>

            <div ref={transactionsRef}>
              <button
                className={styles.transactions_button}
                onClick={() => {
                  setIsTransactionsSelected(!isTransactionsSelected);
                  playClickSound();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  fill="currentColor"
                >
                  <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H516h-4-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48H48c-26.5 0-48 21.5-48 48V304c0 26.5 21.5 48 48 48H156.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z" />
                </svg>
              </button>
              <div
                className={
                  isTransactionsSelected
                    ? [styles.transactions_container, styles.open].join(" ")
                    : styles.transactions_container
                }
              >
                <TransactionPanel />
              </div>
            </div>

            <div
              className={styles.music_button}
              onClick={() => {
                playClickSound();
                toggleSound();
              }}
            >
              {musicPlaying ? (
                <svg
                  className={styles.sound_icon}
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fillRule="evenodd"
                  >
                    <g id="icon" transform="translate(42.666667, 85.333333)">
                      <path
                        d="M361.299413,341.610667 L328.014293,314.98176 C402.206933,233.906133 402.206933,109.96608 328.013013,28.8906667 L361.298133,2.26304 C447.910187,98.97536 447.908907,244.898347 361.299413,341.610667 Z M276.912853,69.77216 L243.588693,96.4309333 C283.38432,138.998613 283.38304,204.87488 243.589973,247.44256 L276.914133,274.101333 C329.118507,215.880107 329.118507,127.992107 276.912853,69.77216 Z M191.749973,1.42108547e-14 L80.8957867,87.2292267 L7.10542736e-15,87.2292267 L7.10542736e-15,257.895893 L81.0208,257.895893 L191.749973,343.35424 L191.749973,1.42108547e-14 L191.749973,1.42108547e-14 Z"
                        id="Shape"
                      ></path>
                    </g>
                  </g>
                </svg>
              ) : (
                <svg
                  className={styles.sound_icon}
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <g id="icon" transform="translate(42.666667, 59.581722)">
                    <path
                      d="M47.0849493,-1.42108547e-14 L298.668,251.583611 L304.101001,257.015597 L304.101,257.016 L353.573532,306.488791 C353.573732,306.488458 353.573933,306.488124 353.574133,306.48779 L384.435257,337.348961 L384.434,337.349 L409.751616,362.666662 L379.581717,392.836561 L191.749,205.003 L191.749973,369.105851 L81.0208,283.647505 L7.10542736e-15,283.647505 L7.10542736e-15,112.980838 L80.8957867,112.980838 L91.433,104.688 L16.9150553,30.169894 L47.0849493,-1.42108547e-14 Z M361.298133,28.0146513 C429.037729,103.653701 443.797162,209.394226 405.578884,298.151284 L372.628394,265.201173 C396.498256,194.197542 381.626623,113.228555 328.013013,54.642278 L361.298133,28.0146513 Z M276.912853,95.5237713 C305.539387,127.448193 318.4688,168.293162 315.701304,208.275874 L266.464558,159.040303 C261.641821,146.125608 254.316511,133.919279 244.488548,123.156461 L243.588693,122.182545 L276.912853,95.5237713 Z M191.749973,25.7516113 L191.749,84.3256113 L158.969,51.5456113 L191.749973,25.7516113 Z"
                      id="Combined-Shape"
                    ></path>
                  </g>
                </svg>
              )}
            </div>
          </div>
        </div>
        <div className={styles.right_head} />
        <div className={styles.right_border} />
      </div>
    </>
  );
};
