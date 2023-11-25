import styles from "../../styles/components/token/TokenOpen.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { displayAddress } from "../../utils/address";
import { useRef, useEffect } from "react";
import { sounds } from "../../shared/sounds";
import { useUI } from "../../context/UIContext";

interface TokenOpenProps {
  isSelected: any;
  setSelectedToken: any;
  index: any;
  token: any;
  count: number;
}

const tokenSpring = {
  type: "spring",
  damping: 25,
  stiffness: 150,
};

const closeSpring = {
  type: "spring",
  damping: 10,
  stiffness: 120,
};

export const TokenOpen = ({
  isSelected,
  setSelectedToken,
  index,
  token,
  count,
}: TokenOpenProps) => {
  const tokenRef = useRef<HTMLDivElement>(null);
  const { playClickSound } = sounds();
  const { toggleDepositDialog } = useUI();

  const checkIfTokenClickedOutside = (event: any) => {
    if (tokenRef.current && !tokenRef.current.contains(event.target)) {
      setSelectedToken(-1);
    }
  };

  useEffect(() => {
    document.addEventListener("click", checkIfTokenClickedOutside, true);
    return () => {
      document.removeEventListener("click", checkIfTokenClickedOutside, true);
    };
  }, [isSelected]);

  console.log(token);

  return (
    <div className={[styles.selected_background, styles.active].join(" ")}>
      <div ref={tokenRef}>
        <motion.div
          className={styles.close_button}
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.5 }}
          onClick={() => {
            setSelectedToken(-1);
            playClickSound();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
          </svg>
        </motion.div>
        {index > 0 ? (
          <button
            className={styles.left_arrow}
            onClick={() => {
              setSelectedToken(index - 1);
              playClickSound();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="currentColor"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </button>
        ) : null}
        {index < count - 1 ? (
          <button
            className={styles.right_arrow}
            onClick={() => {
              setSelectedToken(index + 1);
              playClickSound();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="currentColor"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </button>
        ) : null}
        <motion.div
          className={styles.token_card}
          initial={{ opacity: 0.5 }}
          animate={{ scale: [0, 1], opacity: 1 }}
          transition={tokenSpring}
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
              fill={true}
              style={{ objectFit: "contain" }}
              alt="Token Symbol"
            />
          </div>
          <div className={styles.token_background}>
            <img
              src={token.media[0].gateway}
              className={styles.token_image}
              alt="Token Image"
            />
          </div>
          <div className={styles.token_text}>
            <div className={styles.token_title}>
              <p>{token.title}</p>
            </div>
            <div className={styles.token_content}>
              <div className={styles.token_header}>
                <p className={isSelected ? styles.game : styles.game}>
                  {"Unknown"}
                </p>
                <p className={styles.token_standard}>{token.contract.schema}</p>
                <div className={styles.token_address}>
                  <p>{displayAddress(token.contract_address)}</p>
                  <a
                    href={`https://testnet.starkscan.co/contract/${token.contract_address}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className={styles.external_icon}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className={styles.token_description}>
                <p>{token.description}</p>
              </div>
              <div className={styles.token_buttons}>
                <div className={styles.action_buttons}>
                  <button
                    className={styles.deposit_button}
                    onClick={() => {
                      playClickSound();
                      toggleDepositDialog();
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
        </motion.div>
      </div>
    </div>
  );
};
