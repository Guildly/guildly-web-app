import styles from "../../styles/components/token/TokenOpen.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { getNftPicture } from "../../features/accountNfts/aspect.service";
import { displayAddress } from "../../utils/address";
import { useRef, useEffect } from "react";

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
  const tokenRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className={styles.selected_background}>
      <motion.div
        key={index}
        transition={spring}
        onClick={() => setSelectedToken(index)}
        className={styles.token_card}
        ref={tokenRef}
      >
        <Image
          src={"/token_card.svg"}
          fill={true}
          style={{ objectFit: "contain" }}
          alt="Token Card"
          className={styles.token_outline}
        />
        <div className={styles.token_symbol}>
          <Image
            src={"/token_symbol.svg"}
            fill={true}
            style={{ objectFit: "contain" }}
            alt="Token Symbol"
          />
        </div>
        <div className={styles.token_background}>
          <Image
            src={nftPicture}
            fill={true}
            style={{ objectFit: "contain" }}
            alt="Token Image"
            className={styles.token_imagee}
          />
        </div>
        <div className={styles.token_text}>
          <div className={styles.token_title}>
            <p>{token.name}</p>
          </div>
          <div className={styles.token_content}>
            <div className={styles.token_header}>
              <p className={isSelected ? styles.game : styles.game}>
                {token.contract.name
                  ? token.contract.name
                  : token.contract.name_custom}
              </p>
              <p className={styles.token_standard}>{token.contract.schema}</p>
              <p className={styles.token_address}>
                {displayAddress(token.contract_address)}
              </p>
            </div>
            <div className={styles.token_description}>
              <p>{token.description}</p>
            </div>
            <div className={styles.token_buttons}>
              <button className={styles.deposit_button}>
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
    </div>
  );
};
