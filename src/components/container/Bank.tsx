import styles from "../../styles/containers/Bank.module.css";
import { useState, useEffect } from "react";
import { fetchNfts } from "../../features/accountNfts/fetchNfts";
import { padAddress } from "../../utils/address";
import { TokenCard } from "../token/TokenCard";
import { useAccount } from "@starknet-react/core";
import { useGuild } from "../../context/GuildContext";
import { TokenOpen } from "../token/TokenOpen";
import { useUI } from "../../context/UIContext";
import { SearchIcon } from "../../shared/icons";
import { Select } from "../dropdowns";
import { sounds } from "../../shared/sounds";
import { DepositDialog } from "../panels/DepositDialog";
import { AlchemyNftAsset } from "../../features/accountNfts/model";

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
    toggleGuildDialog,
    isDepositDialogOpen,
    toggleDepositDialog,
  } = useUI();
  const { playClickSound } = sounds();

  const [selectedToken, setSelectedToken] = useState(-1);
  const [accountTokens, setAccountTokens] = useState<AlchemyNftAsset[] | null>(
    null
  );
  const [sortValue, setSortValue] = useState("Value Low to High");
  const [searchValue, setSearchValue] = useState("");
  const [guildTokens, setGuildTokens] = useState<AlchemyNftAsset[] | null>(
    null
  );
  const [fetchNftsError, setFetchNftsError] = useState(false);

  const [depositList, setDepositList] = useState<any[]>([]);

  const getOwnedNfts = async (accountAddress: string) => {
    const data = await fetchNfts(
      accountAddress ? padAddress(accountAddress) : "0x0"
    );
    setAccountTokens(data.ownedNfts);
  };

  useEffect(() => {
    if (accountAddress) {
      getOwnedNfts(
        "0x07642A1c8D575B0c0f9a7AD7cCEb5517c02f36E5F3B36B25429Cc7C99383ed0a"
      );
    }
  }, [accountAddress]);

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
            accountAddress ? (
              accountTokens ? (
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
                <h1>You have no tokens</h1>
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
                <p className={styles.connect_message}>Connect to a Guild</p>
                <div className={styles.connect_wallets}>
                  <button
                    className={styles.wallet_box}
                    onClick={() => {
                      playClickSound();
                      toggleGuildDialog();
                    }}
                  >
                    Select Guild
                  </button>
                </div>
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
