import styles from "../../styles/navigation/MobileMenu.module.css";
import { SearchIcon, WalletIcon } from "../../shared/icons";
import { useState } from "react";

interface MobileMenuProps {
  close: () => void;
}

export const MobileMenu = ({ close }: MobileMenuProps) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.search_icon}>
          <SearchIcon />
        </div>
        {/* <p className={styles.search_text}>Search Guilds, Items...</p> */}
        <input
          placeholder="Search Guilds, Items, Accounts"
          value={searchValue}
          onChange={(e) => setSearchValue(e.currentTarget.value)}
          className={styles.search_input}
        />
      </div>
      <div className={styles.item}>
        <div className={styles.wallet_icon}>
          <WalletIcon />
        </div>
        <p className={styles.connect_text}>Connect Wallet</p>
      </div>
    </div>
  );
};
