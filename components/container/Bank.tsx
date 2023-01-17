import styles from "../../styles/containers/Bank.module.css";
import Image from "next/image";

export const Bank = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={styles.container}>
      <div className={styles.tokens_area}>
        {images.map((index) => {
          return (
            <div key={index} className={styles.token_card}>
              <Image
                src={"/token_symbol.png"}
                height={25}
                width={25}
                alt="Token Symbol"
                className={styles.token_symbol}
              />
              <Image
                src={"/token_card.svg"}
                height={150}
                width={125}
                alt="Token Card"
                className={styles.token_outline}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
