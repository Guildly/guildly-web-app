import styles from "../../styles/components/token/TokenCard.module.css";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getNftPicture } from "../../features/accountNfts/aspect.service";
import { displayAddress } from "../../utils/address";

interface TokenCardProps {
  isSelected: any;
  setSelectedToken: any;
  index: any;
  token: any;
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
}: TokenCardProps) => {
  const tokenRef = useRef<HTMLDivElement>(null);

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
    <motion.div
      key={index}
      transition={spring}
      onClick={() => setSelectedToken(index)}
      className={isSelected ? styles.token_card_open : styles.token_card}
    >
      {isSelected && (
        <motion.div
          onClick={goBack}
          initial="initial"
          animate="animate"
          exit="initial"
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={backVariants}
          className={styles.back_button}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.75"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </motion.div>
      )}
      {isSelected && <div className={styles.selected_background} />}
      <Image
        src={"/token_card.svg"}
        height={isSelected ? 600 : 250}
        width={isSelected ? 450 : 175}
        alt="Token Card"
        className={styles.token_outline}
      />
      <Image
        src={"/token_symbol.svg"}
        height={isSelected ? 100 : 35}
        width={isSelected ? 100 : 35}
        alt="Token Symbol"
        className={styles.token_symbol}
      />
      <div className={styles.token_background}>
        <Image
          src={nftPicture}
          height={isSelected ? 400 : 150}
          width={isSelected ? 400 : 150}
          alt="Token Image"
          className={isSelected ? styles.token_image_open : styles.token_image}
        />
      </div>
      <div className={styles.token_text}>
        <div
          className={isSelected ? styles.token_title_open : styles.token_title}
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
                isSelected ? styles.token_standard_open : styles.token_standard
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
          <div className={styles.token_buttons}>
            <button
              className={
                isSelected ? styles.deposit_button_open : styles.deposit_button
              }
            >
              <p>Deposit</p>
            </button>
            <div className={styles.external_buttons}>
              <a
                className={styles.external_button}
                href={token.aspect_link}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width={isSelected ? 40 : 15}
                  height={isSelected ? 40 : 15}
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
                  width={isSelected ? 40 : 15}
                  height={isSelected ? 40 : 15}
                  alt="Mintsquare Logo"
                  src={"/mintsquare-logo.png"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
