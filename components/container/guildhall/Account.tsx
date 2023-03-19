import styles from "../../../styles/containers/guildhall/Account.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStarkNetId } from "../../../hooks/useStarknetId";
import { displayAddress, padAddress } from "../../../utils/address";
import { fetchAspectNfts } from "../../../features/accountNfts/aspect.service";
import {
  AspectNft,
  AspectNftAsset,
} from "../../../features/accountNfts/aspect.model";
import { useAccount } from "@starknet-react/core";
import { TokenCard } from "../../token/TokenCard";
import { Guilds } from "../../guildsScroll";

export const Account = () => {
  const { query, pathname, back, push } = useRouter();
  const { pid } = query;
  const { starknetId } = useStarkNetId(pid ? pid.toString() : "0x0");
  const { address: accountAddress } = useAccount();
  const accountTitle = pid
    ? starknetId
      ? starknetId
      : displayAddress(pid.toString())
    : "0x0";

  const [accountTokens, setAccountTokens] = useState<AspectNftAsset[] | null>(
    null
  );
  const [selectedToken, setSelectedToken] = useState(0);
  const [fetchNftsError, setFetchNftsError] = useState(false);

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

  const guilds = [
    {
      rank: 1,
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      address: "0x0",
      games: [
        {
          name: "Influence",
          image: "/influence_logo.png",
        },
        { name: "Eternum", image: "/eternum_logo.svg" },
        { name: "Age of Eykar", image: "/ageofeykar_logo.svg" },
        { name: "NoGame", image: "/nogame_logo.svg" },
      ],
      master: "master.stark",
      members: ["bob.stark", "alice.stark"],
      items: 1000,
      items_value: "$20,000",
      fees: {
        owner: "90%",
        user: "7%",
        admin: "2%",
        guild: "1%",
      },
      governance: "Item based",
      treasury: "$800M",
      activity: "test",
    },
    {
      rank: 2,
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      games: [
        {
          name: "Influence",
          image: "/influence_logo.png",
        },
        { name: "Eternum", image: "/eternum_logo.svg" },
        { name: "Age of Eykar", image: "/ageofeykar_logo.svg" },
        { name: "NoGame", image: "/nogame_logo.svg" },
      ],
      master: "master.stark",
      members: ["bob.stark", "alice.stark"],
      items: 1000,
      items_value: "$20,000",
      fees: {
        owner: "90%",
        user: "7%",
        admin: "2%",
        guild: "1%",
      },
      governance: "Item based",
      treasury: "$800M",
      activity: "test",
    },
    {
      rank: 2,
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      games: [
        {
          name: "Influence",
          image: "/influence_logo.png",
        },
        { name: "Eternum", image: "/eternum_logo.svg" },
        { name: "Age of Eykar", image: "/ageofeykar_logo.svg" },
        { name: "NoGame", image: "/nogame_logo.svg" },
      ],
      master: "master.stark",
      members: ["bob.stark", "alice.stark"],
      items: 1000,
      items_value: "$20,000",
      fees: {
        owner: "90%",
        user: "7%",
        admin: "2%",
        guild: "1%",
      },
      governance: "Item based",
      treasury: "$800M",
      activity: "test",
    },
    {
      rank: 2,
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      games: [
        {
          name: "Influence",
          image: "/influence_logo.png",
        },
        { name: "Eternum", image: "/eternum_logo.svg" },
        { name: "Age of Eykar", image: "/ageofeykar_logo.svg" },
        { name: "NoGame", image: "/nogame_logo.svg" },
      ],
      master: "master.stark",
      members: ["bob.stark", "alice.stark"],
      items: 1000,
      items_value: "$20,000",
      fees: {
        owner: "90%",
        user: "7%",
        admin: "2%",
        guild: "1%",
      },
      governance: "Item based",
      treasury: "$800M",
      activity: "test",
    },
    {
      rank: 2,
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      games: [
        {
          name: "Influence",
          image: "/influence_logo.png",
        },
        { name: "Eternum", image: "/eternum_logo.svg" },
        { name: "Age of Eykar", image: "/ageofeykar_logo.svg" },
        { name: "NoGame", image: "/nogame_logo.svg" },
      ],
      master: "master.stark",
      members: ["bob.stark", "alice.stark"],
      items: 1000,
      items_value: "$20,000",
      fees: {
        owner: "90%",
        user: "7%",
        admin: "2%",
        guild: "1%",
      },
      governance: "Item based",
      treasury: "$800M",
      activity: "test",
    },
  ];

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
            <p className={styles.guild_name}>{accountTitle}</p>
            {starknetId ? (
              <div className={styles.master}>
                <p className={styles.master_title}>Address:</p>
                <p className={styles.master_content}>
                  {displayAddress(pid ? pid.toString() : "0x0")}
                </p>
              </div>
            ) : null}
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
            <p className={styles.category_title}>Items</p>
            <p className={styles.item_balance}>$800M</p>
          </div>
        </div>
      </div>
      <div className={styles.bank_row}>
        <div className={styles.bank}>
          <p className={styles.category_title}>Bank</p>
          <div className={styles.bank_tokens}>
            {accountTokens && accountAddress
              ? accountTokens.map((token, index) => (
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
        <div className={styles.activity}>
          <p className={styles.category_title}>Activity Feed</p>
          <div className={styles.activity_area}>
            <div className={styles.feed}>
              <div className={styles.feed_item}>
                <p className={styles.item_emoji}>🌾</p>
                <p className={styles.item_text}>
                  <span className={styles.feed_bold_text}>alice.stark </span>
                  used
                  <span className={styles.feed_bold_text}>bob.stark</span>’s
                  realm to
                  <span className={styles.feed_bold_text}>harvest food</span>
                </p>
              </div>
              <div className={styles.feed_item}>
                <p className={styles.item_emoji}>🤺</p>
                <p className={styles.item_text}>
                  <span className={styles.feed_bold_text}>bob.stark</span>
                  used
                  <span className={styles.feed_bold_text}>
                    0xg23hb.....e6u6
                  </span>
                  ’s realm to
                  <span className={styles.feed_bold_text}>build an army</span>
                </p>
              </div>
              <div className={styles.feed_item}>
                <p className={styles.item_emoji}>⚔️</p>
                <p className={styles.item_text}>
                  <span className={styles.feed_bold_text}>alice.stark</span>
                  used
                  <span className={styles.feed_bold_text}>bob.stark</span>’s
                  realm to
                  <span className={styles.feed_bold_text}>harvest food</span>
                </p>
              </div>
            </div>
            <div className={styles.activity_chart}>
              <p>Chart goes here</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.guilds}>
        <p className={styles.category_title}>Guilds</p>
        <Guilds guilds={guilds} />
      </div>
    </div>
  );
};
