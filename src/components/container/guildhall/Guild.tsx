import styles from "../../../styles/containers/guildhall/Guild.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useAccount } from "@starknet-react/core";
import { useRouter } from "next/router";
import { Select } from "../../dropdowns";
import { sounds } from "../../../shared/sounds";
import { fetchAspectNfts } from "../../../features/accountNfts/fetchNfts";
import { padAddress } from "../../../utils/address";
import { AspectNft, AspectNftAsset } from "../../../features/accountNfts/model";
import { useJoin } from "../../../hooks/useMembers";
import Link from "next/link";
import { TokenCard } from "../../token/TokenCard";

export const Guild = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { playClickSound } = sounds();
  const { address: accountAddress } = useAccount();
  const [selectedToken, setSelectedToken] = useState(-1);
  const [guildTokens, setGuildTokens] = useState<AspectNftAsset[] | null>(null);
  const [fetchNftsError, setFetchNftsError] = useState(false);

  const [feeRole, setFeeRole] = useState("Merchant");

  useEffect(() => {
    fetchAspectNfts(accountAddress ? padAddress(accountAddress) : "0x0").then(
      (data) => {
        setGuildTokens(data.assets);
      },
      (err) => {
        setFetchNftsError(true);
      }
    );
  }, [guildTokens]);

  const feeRates = [
    {
      logo: "/eternum_logo.svg",
      task_title: "Harvest Food",
      fee_split: "5%",
      fee_payment: "0.001",
      payment_token: "ETH",
    },
    {
      logo: "/influence_logo.svg",
      task_title: "Build Plot",
      fee_split: "-",
      fee_payment: "0.001",
      payment_token: "ETH",
    },
    {
      logo: "/eternum_logo.svg",
      task_title: "Harvest Food",
      fee_split: "5%",
      fee_payment: "0.001",
      payment_token: "ETH",
    },
    {
      logo: "/eternum_logo.svg",
      task_title: "Harvest Food",
      fee_split: "5%",
      fee_payment: "0.001",
      payment_token: "ETH",
    },
    {
      logo: "/eternum_logo.svg",
      task_title: "Harvest Food",
      fee_split: "5%",
      fee_payment: "0.001",
      payment_token: "ETH",
    },
    {
      logo: "/eternum_logo.svg",
      task_title: "Harvest Food",
      fee_split: "5%",
      fee_payment: "0.001",
      payment_token: "ETH",
    },
    {
      logo: "/eternum_logo.svg",
      task_title: "Harvest Food",
      fee_split: "5%",
      fee_payment: "0.001",
      payment_token: "ETH",
    },
    {
      logo: "/eternum_logo.svg",
      task_title: "Harvest Food",
      fee_split: "5%",
      fee_payment: "0.001",
      payment_token: "ETH",
    },
    {
      logo: "/eternum_logo.svg",
      task_title: "Harvest Food",
      fee_split: "5%",
      fee_payment: "0.001",
      payment_token: "ETH",
    },
    {
      logo: "/eternum_logo.svg",
      task_title: "Harvest Food",
      fee_split: "5%",
      fee_payment: "0.001",
      payment_token: "ETH",
    },
    {
      logo: "/eternum_logo.svg",
      task_title: "Harvest Food",
      fee_split: "5%",
      fee_payment: "0.001",
      payment_token: "ETH",
    },
    {
      logo: "/eternum_logo.svg",
      task_title: "Harvest Food",
      fee_split: "5%",
      fee_payment: "0.001",
      payment_token: "ETH",
    },
    {
      logo: "/eternum_logo.svg",
      task_title: "Harvest Food",
      fee_split: "5%",
      fee_payment: "0.001",
      payment_token: "ETH",
    },
    {
      logo: "/eternum_logo.svg",
      task_title: "Harvest Food",
      fee_split: "5%",
      fee_payment: "0.001",
      payment_token: "ETH",
    },
  ];

  const activityFeed = [];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.guild_info}>
          <div className={styles.guild_emblem}>
            <Image
              src={"/token_symbol.png"}
              alt="guild-image"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.basic_info}>
            <p className={styles.guild_name}>Core Lords</p>
            <div className={styles.master}>
              <p className={styles.master_title}>Master:</p>
              <p className={styles.master_content}>Starknetdev</p>
            </div>
            <div className={styles.master}>
              <p className={styles.master_title}>Rank:</p>
              <p className={styles.master_content}>20</p>
            </div>
          </div>
        </div>
        <div className={styles.categories}>
          <div className={styles.category}>
            <p className={styles.category_title}>Games</p>
            <div className={styles.category_content}>
              <div className={styles.game}>
                <Image
                  src={"/influence_logo.png"}
                  alt="game_image"
                  width={20}
                  height={20}
                />
                <p className={styles.category_content_text}>Influence</p>
              </div>
            </div>
          </div>
          <div className={styles.category}>
            <p className={styles.category_title}>Members</p>
            <div className={styles.category_content}>
              <p className={styles.category_content_text}>alice.stark</p>
              <p className={styles.category_content_text}>bob.stark</p>
            </div>
          </div>
          <div className={styles.category}>
            <p className={styles.category_title}>Treasury</p>
            <p className={styles.treasury_balance}>$800M</p>
          </div>
        </div>
      </div>
      <div className={styles.bank_row}>
        <div className={styles.bank}>
          <p className={styles.category_title}>Bank</p>
          <div className={styles.bank_tokens}>
            {guildTokens && accountAddress
              ? guildTokens.map((token, index) => (
                  <Link href="/bank/items/0x0" key={index} passHref>
                    <div className={styles.token}>
                      <TokenCard
                        isSelected={false}
                        setSelectedToken={setSelectedToken}
                        token={token}
                        index={index}
                      />
                    </div>
                  </Link>
                ))
              : null}
          </div>
        </div>
        {/* <div className={styles.council}>
          <p className={styles.category_title}>Council</p>
          <div className={styles.proposals_box}></div>
        </div> */}
        <div className={styles.fee_rates}>
          <div className={styles.fee_rates_header}>
            <p className={styles.category_title}>Fee Rates</p>
            <Select
              options={["Merchant", "Journeyman", "Master", "Guild"]}
              value={feeRole}
              setValue={setFeeRole}
            />
          </div>
          <div className={styles.fee_rates_list}>
            <table>
              {feeRates.map((feeRate, index) => (
                <tr className={styles.fee_rate} key={index}>
                  <td>
                    <Image
                      className={styles.game_image}
                      src={feeRate.logo}
                      alt="game_image"
                      width={15}
                      height={15}
                    />
                  </td>
                  <td>
                    <p className={styles.fee_rate_selector}>
                      {feeRate.task_title}
                    </p>
                  </td>
                  <td>
                    <p className={styles.fee_rate_percent}>
                      {feeRate.fee_split}
                    </p>
                  </td>
                  <td>
                    <div className={styles.fee_rate_payment}>
                      <p className={styles.fee_payment_text}>
                        {feeRate.fee_payment}
                      </p>
                      <p className={styles.fee_payment_token}>
                        {feeRate.payment_token}
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
      <div className={styles.activity}>
        <p className={styles.category_title}>Activity Feed</p>
        <div className={styles.activity_area}>
          <div className={styles.feed}>
            <div className={styles.feed_item}>
              <p className={styles.item_emoji}>🌾</p>
              <p className={styles.item_text}>
                <span className={styles.feed_bold_text}>alice.stark </span>
                used
                <span className={styles.feed_bold_text}>bob.stark</span>’s realm
                to
                <span className={styles.feed_bold_text}>harvest food</span>
              </p>
            </div>
            <div className={styles.feed_item}>
              <p className={styles.item_emoji}>🤺</p>
              <p className={styles.item_text}>
                <span className={styles.feed_bold_text}>bob.stark</span>
                used
                <span className={styles.feed_bold_text}>0xg23hb.....e6u6</span>
                ’s realm to
                <span className={styles.feed_bold_text}>build an army</span>
              </p>
            </div>
            <div className={styles.feed_item}>
              <p className={styles.item_emoji}>⚔️</p>
              <p className={styles.item_text}>
                <span className={styles.feed_bold_text}>alice.stark</span>
                used
                <span className={styles.feed_bold_text}>bob.stark</span>’s realm
                to
                <span className={styles.feed_bold_text}>harvest food</span>
              </p>
            </div>
          </div>
          <div className={styles.activity_chart}>
            <p>Chart goes here</p>
          </div>
        </div>
      </div>
      <button className={styles.join_button} onClick={() => playClickSound()}>
        <p>Join</p>
      </button>
    </div>
  );
};
