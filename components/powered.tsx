import styles from "../styles/components/Powered.module.css";
import Image from "next/image";

function Powered() {
  return (
    <div className={styles.setup}>
      <a
        className={styles.layout}
        href="https://starknet.io/"
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.logo}>
          <Image
            src="/starknet_logo.svg"
            alt="StarkNet Logo"
            height={24}
            width={24}
          />
        </div>
        <span className={styles.text}>Powered by StarkNet</span>
      </a>
    </div>
  );
}
export default Powered;
