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

interface BankProps {
  tab: string;
}

export const Bank = ({ tab }: BankProps) => {
  const { address } = useAccount();
  const { guild } = useGuild();
  const [selectedToken, setSelectedToken] = useState(-1);
  const [accountTokens, setAccountTokens] = useState<AspectNftAsset[] | null>(
    null
  );
  const [guildTokens, setGuildTokens] = useState<AspectNftAsset[] | null>(null);
  const [fetchNftsError, setFetchNftsError] = useState(false);

  useEffect(() => {
    fetchAspectNfts(address ? padAddress(address) : "0x0").then(
      (data) => {
        setAccountTokens(data.assets);
      },
      (err) => {
        setFetchNftsError(true);
      }
    );
    fetchAspectNfts(address ? padAddress(address) : "0x0").then(
      (data) => {
        setGuildTokens(data.assets);
      },
      (err) => {
        setFetchNftsError(true);
      }
    );
  }, [accountTokens, guildTokens]);

  console.log(accountTokens);

  return (
    <div className={styles.container}>
      <div className={styles.search_bar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className={styles.search_icon}
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
        </svg>
        <input
          placeholder="Search Items"
          className={styles.search_input}
        ></input>
      </div>
      <div className={styles.tokens_box}>
        <AnimateSharedLayout>
          <div className={styles.tokens_area}>
            {tab == "Account" && accountTokens ? (
              accountTokens.map((token, index) => {
                return (
                  <TokenCard
                    key={index}
                    isSelected={selectedToken === index}
                    setSelectedToken={setSelectedToken}
                    index={index}
                    token={token}
                  />
                );
              })
            ) : tab == "Guild" && guild && guild.name ? (
              <div>
                <p>GUILD TOKENS</p>
              </div>
            ) : (
              <div>
                <p>Connect to Guild</p>
              </div>
            )}
          </div>
        </AnimateSharedLayout>
        <div className={styles.button_area}>
          <button className={styles.purchase_button}>
            <p>Purchase Storage with GLD</p>
          </button>
        </div>
      </div>
    </div>
  );
};
