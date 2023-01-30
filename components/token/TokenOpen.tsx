import styles from "../../styles/components/token/TokenOpen.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { getNftPicture } from "../../features/accountNfts/aspect.service";
import { displayAddress } from "../../utils/address";

interface TokenOpenProps {
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

export const TokenOpen = ({
  isSelected,
  setSelectedToken,
  index,
  token,
}: TokenOpenProps) => {
  const nftPicture = getNftPicture(token);
  return (
    <motion.div
      key={index}
      transition={spring}
      onClick={() => setSelectedToken(index)}
      className={isSelected ? styles.token_card_open : styles.token_card}
    >
      <Image
        src={"/token_card.svg"}
        height={600}
        width={450}
        alt="Token Card"
        className={styles.token_outline}
      />
      <Image
        src={"/token_symbol.svg"}
        height={100}
        width={100}
        alt="Token Symbol"
        className={styles.token_symbol}
      />
      <div className={styles.token_background}>
        <Image
          src={nftPicture}
          height={400}
          width={400}
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
                  width={40}
                  height={40}
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
                  width={40}
                  height={40}
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
