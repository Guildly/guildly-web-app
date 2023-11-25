import styles from "../../styles/components/token/TokenCard.module.css";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { displayAddress } from "../../utils/address";
import { sounds } from "../../shared/sounds";
import {
  DownChevronIcon,
  SearchIcon,
  TickIcon,
  ExpandIcon,
} from "../../shared/icons";
import { hasDictionary, removeDictionary } from "../../utils/format";
import { AlchemyNftAsset } from "../../features/accountNfts/model";

interface TokenCardProps {
  isSelected: boolean;
  setSelectedToken: (e: number) => void;
  index: number;
  token: AlchemyNftAsset;
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
  console.log(token);

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
          <img
            src={token.media[0].gateway}
            alt="Token Image"
            className={styles.token_image}
          />
        </div>
        <div className={styles.token_text}>
          <div
            className={
              isSelected ? styles.token_title_open : styles.token_title
            }
          >
            <p>{token.title}</p>
          </div>
          <div
            className={
              isSelected ? styles.token_content_open : styles.token_content
            }
          >
            <div className={styles.token_header}>
              <p className={isSelected ? styles.game_open : styles.game}>
                {"Unknown"}
              </p>
              <p
                className={
                  isSelected
                    ? styles.token_standard_open
                    : styles.token_standard
                }
              >
                {token.id.tokenMetadata.tokenType}
              </p>
              <p
                className={
                  isSelected ? styles.token_address_open : styles.token_address
                }
              >
                {displayAddress(token.contract.address)}
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
