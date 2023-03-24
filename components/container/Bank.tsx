import styles from "../../styles/containers/Bank.module.css";
import { useState, useEffect } from "react";
import { AnimateSharedLayout } from "framer-motion";
import { fetchAspectNfts } from "../../features/accountNfts/aspect.service";
import { padAddress } from "../../utils/address";
import { TokenCard } from "../token/TokenCard";
import { useAccount } from "@starknet-react/core";
import { useGuild } from "../../context/GuildContext";
import {
  AspectNft,
  AspectNftAsset,
} from "../../features/accountNfts/aspect.model";
import { TokenOpen } from "../token/TokenOpen";
import { useUI } from "../../context/UIContext";
import {
  DownChevronIcon,
  SearchIcon,
  TickIcon,
  ExpandIcon,
} from "../../shared/icons";
import { Select } from "../dropdowns";
import { sounds } from "../../shared/sounds";
import { DepositDialog } from "../panels/DepositDialog";

interface BankProps {
  tab: string;
  tokenStandardFilter: string;
}

export const Bank = ({ tab, tokenStandardFilter }: BankProps) => {
  const { address: accountAddress } = useAccount();
  const { guild } = useGuild();
  const {
    isLeftMenuOpen,
    isRightMenuOpen,
    toggleConnectMenu,
    isDepositDialogOpen,
    toggleDepositDialog,
  } = useUI();
  const { playClickSound } = sounds();

  const [selectedToken, setSelectedToken] = useState(-1);
  const [accountTokens, setAccountTokens] = useState<AspectNftAsset[] | null>(
    null
  );
  const [sortValue, setSortValue] = useState("Value Low to High");
  const [searchValue, setSearchValue] = useState("");
  const [guildTokens, setGuildTokens] = useState<AspectNftAsset[] | null>(null);
  const [fetchNftsError, setFetchNftsError] = useState(false);

  const [depositList, setDepositList] = useState<any[]>([]);

  console.log(depositList);

  useEffect(() => {
    fetchAspectNfts(accountAddress ? padAddress(accountAddress) : "0x0").then(
      (data) => {
        setAccountTokens(data.assets);
      },
      (err) => {
        setFetchNftsError(true);
      }
    );
  }, [accountTokens]);

  const sortOptions = [
    "Reward Low to High",
    "Newest",
    "Oldest",
    "Price Low to High",
    "Price Low to High",
  ];

  return (
    <div className={styles.container}>
      <div
        className={
          depositList.length > 0
            ? [styles.selected_deposit, styles.active].join(" ")
            : styles.selected_deposit
        }
      >
        <div className={styles.selected_count}>
          <p>{depositList.length}</p>
        </div>
        <div className={styles.deposit} onClick={() => toggleDepositDialog()}>
          <p>Deposit</p>
        </div>
      </div>
      <div className={styles.tokens_box}>
        <div className={styles.tokens_header}>
          <p className={styles.results}>19,461 results</p>
          <div className={styles.token_search_box}>
            <div className={styles.token_search_icon}>
              <SearchIcon />
            </div>
            <input
              placeholder="Search Tasks, Guilds, Items"
              value={searchValue}
              onChange={(e) => setSearchValue(e.currentTarget.value)}
              className={styles.token_search_input}
            />
          </div>
          <div className={styles.token_sort}>
            <Select
              options={sortOptions}
              value={sortValue}
              setValue={setSortValue}
            />
          </div>
        </div>
        <div
          className={
            isLeftMenuOpen && !isRightMenuOpen
              ? [styles.tokens_area, styles.display_5].join(" ")
              : !isLeftMenuOpen && isRightMenuOpen
              ? [styles.tokens_area, styles.display_5].join(" ")
              : !isLeftMenuOpen && !isRightMenuOpen
              ? [styles.tokens_area, styles.display_6].join(" ")
              : styles.tokens_area
          }
        >
          {tab == "Account" ? (
            accountTokens && accountAddress ? (
              accountTokens.map((token, index) =>
                selectedToken == index ? (
                  <div key={index}>
                    <TokenOpen
                      isSelected={selectedToken === index}
                      setSelectedToken={setSelectedToken}
                      index={index}
                      token={token}
                      count={accountTokens.length}
                    />
                  </div>
                ) : (
                  <>
                    <TokenCard
                      key={index}
                      isSelected={selectedToken === index}
                      setSelectedToken={setSelectedToken}
                      index={index}
                      token={token}
                      depositList={depositList}
                      setDepositList={setDepositList}
                    />
                  </>
                )
              )
            ) : (
              <div className={styles.connect_area}>
                <p className={styles.connect_message}>Connect to an Account</p>
                <div className={styles.connect_wallets}>
                  <button
                    className={styles.wallet_box}
                    onClick={() => {
                      playClickSound();
                      toggleConnectMenu();
                    }}
                  >
                    Connect
                  </button>
                </div>
              </div>
            )
          ) : null}
          {tab == "Guild" ? (
            guild && guild.name ? (
              <div>
                <p>GUILD TOKENS</p>
              </div>
            ) : (
              <div className={styles.connect_area}>
                <p className={styles.connect_message}>Connect to Guild</p>
              </div>
            )
          ) : null}
        </div>
        {/* <div className={styles.button_area}>
          <button className={styles.purchase_button}>
            <p>Purchase Storage with GLD</p>
          </button>
        </div> */}
      </div>
      <DepositDialog
        close={() => toggleDepositDialog()}
        isOpen={isDepositDialogOpen}
      />
    </div>
  );
};
