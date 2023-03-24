import styles from "../../styles/components/token/TokenCard.module.css";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getNftPicture } from "../../features/accountNfts/aspect.service";
import { displayAddress } from "../../utils/address";
import { sounds } from "../../shared/sounds";
import {
  DownChevronIcon,
  SearchIcon,
  TickIcon,
  ExpandIcon,
} from "../../shared/icons";
import { hasDictionary, removeDictionary } from "../../utils/format";

interface TokenCardProps {
  isSelected: boolean;
  setSelectedToken: (e: number) => void;
  index: number;
  token: any;
  depositList?: any[];
  setDepositList?: (e: any[]) => void;
}

const spring = {
  type: "spring",
  damping: 25,
  stiffness: 120,
};

const backVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: { opacity: 1, y: 0 },
};

const cardVariants = {
  initial: {
    opacity: 0,
    y: 100,
    x: "-50%",
  },
  animate: { opacity: 1, y: 0, x: "-50%" },
};

export const TokenCard = ({
  isSelected,
  setSelectedToken,
  index,
  token,
  depositList,
  setDepositList,
}: TokenCardProps) => {
  const tokenRef = useRef<HTMLDivElement>(null);
  const { playClickSound } = sounds();

  const checkIfTokenClickedOutside = (event: any) => {
    if (
      isSelected &&
      tokenRef.current &&
      !tokenRef.current.contains(event.target)
    ) {
      goBack;
    }
  };

  const goBack = () => {
    setSelectedToken(-1);
  };

  useEffect(() => {
    document.addEventListener("click", checkIfTokenClickedOutside, true);
    return () => {
      document.removeEventListener("click", checkIfTokenClickedOutside, true);
    };
  }, [isSelected]);

  const nftPicture = getNftPicture(token);

  return (
    <>
      <div
        key={index}
        onClick={() => {
          playClickSound();
        }}
        className={styles.token_card}
      >
        <div className={styles.token_outline}>
          <Image
            src={"/token_card.svg"}
            fill={true}
            style={{ objectFit: "contain" }}
            alt="Token Card"
          />
        </div>
        <div className={styles.token_symbol}>
          <Image
            src={"/token_symbol.svg"}
            alt="Token Symbol"
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.token_background}>
          <div className={styles.token_image}>
            <Image
              src={nftPicture}
              alt="Token Image"
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className={styles.token_text}>
          <div
            className={
              isSelected ? styles.token_title_open : styles.token_title
            }
          >
            <p>{token.name}</p>
          </div>
          <div
            className={
              isSelected ? styles.token_content_open : styles.token_content
            }
          >
            <div className={styles.token_header}>
              <p className={isSelected ? styles.game_open : styles.game}>
                {token.contract.name
                  ? token.contract.name
                  : token.contract.name_custom}
              </p>
              <p
                className={
                  isSelected
                    ? styles.token_standard_open
                    : styles.token_standard
                }
              >
                {token.contract.schema}
              </p>
              <p
                className={
                  isSelected ? styles.token_address_open : styles.token_address
                }
              >
                {displayAddress(token.contract_address)}
              </p>
            </div>
            <div
              className={
                isSelected
                  ? styles.token_description_open
                  : styles.token_description
              }
            >
              <p>{token.description}</p>
            </div>
            <div className={styles.token_footer}>
              <div className={styles.action_buttons}>
                <button
                  className={
                    isSelected
                      ? styles.deposit_button_open
                      : styles.deposit_button
                  }
                  onClick={() => {
                    playClickSound();
                  }}
                >
                  <p>Deposit</p>
                </button>
                <Link href="/bank/item/0x0" passHref>
                  <button className={styles.info_button}>
                    <p>More Info</p>
                  </button>
                </Link>
              </div>
              <div className={styles.external_buttons}>
                <a
                  className={styles.external_button}
                  href={token.aspect_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    width={15}
                    height={15}
                    alt="Aspect Logo"
                    src={"/aspect-pfp.png"}
                  />
                </a>
                <a
                  className={styles.external_button}
                  href="https://mintsquare.io/starknet"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    width={15}
                    height={15}
                    alt="Mintsquare Logo"
                    src={"/mintsquare-logo.png"}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {depositList && setDepositList ? (
          <div className={styles.hover_buttons}>
            <div
              className={
                hasDictionary(depositList, token)
                  ? [styles.select_button, styles.selected].join(" ")
                  : styles.select_button
              }
              onClick={() => {
                if (hasDictionary(depositList, token)) {
                  setDepositList(removeDictionary(depositList, token));
                } else {
                  setDepositList([...depositList, token]);
                }
              }}
            >
              <div className={styles.select_icon}>
                <TickIcon />
              </div>
            </div>
            <div
              className={styles.expand_button}
              onClick={() => setSelectedToken(index)}
            >
              <div className={styles.expand_icon}>
                <ExpandIcon />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
