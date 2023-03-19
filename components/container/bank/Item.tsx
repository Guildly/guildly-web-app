import styles from "../../../styles/containers/bank/Item.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Select } from "../../dropdowns";
import {
  fetchAspectNft,
  getNftPicture,
} from "../../../features/accountNfts/aspect.service";
import {
  AspectNft,
  AspectNftAsset,
} from "../../../features/accountNfts/aspect.model";
import { padAddress, displayAddress } from "../../../utils/address";
import { Guilds } from "../../guildsScroll";

export const Item = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [feeRole, setFeeRole] = useState("Owner");

  const [token, setToken] = useState<AspectNftAsset | null>(null);
  const [fetchNftsError, setFetchNftsError] = useState(false);

  useEffect(() => {
    fetchAspectNft(
      padAddress(
        "0x016a1b978c62be5c30faa565f2086336126db3f120fbe61f368d8e07f289ef03"
      ),
      "34"
    ).then(
      (data) => {
        setToken(data);
      },
      (err) => {
        setFetchNftsError(true);
      }
    );
  }, [token]);

  console.log(token);

  const nftPicture = token ? getNftPicture(token) : "";

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

  return (
    <div className={styles.container}>
      {token ? (
        <>
          <div className={styles.header}>
            <div className={styles.item_info}>
              <div className={styles.item_image}>
                <Image
                  src={nftPicture}
                  alt="guild-image"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.basic_info}>
                <p className={styles.item_name}>{token.name}</p>
                <div className={styles.contract}>
                  <p className={styles.contract_title}>Contract:</p>
                  <p className={styles.contract_content}>
                    {token.contract.name
                      ? token.contract.name
                      : token.contract.name_custom
                      ? token.contract.name_custom
                      : displayAddress(token.contract_address)}
                  </p>
                </div>
                <div className={styles.contract}>
                  <p className={styles.contract_title}>Scheme:</p>
                  <p className={styles.contract_content}>
                    {token.contract.schema}
                  </p>
                </div>
                <div className={styles.contract}>
                  <p className={styles.contract_title}>Owner:</p>
                  <p className={styles.contract_content}>
                    {displayAddress(token.owner.account_address)}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.categories}>
              <div className={styles.category}>
                <p className={styles.category_title}>Game</p>
                <div className={styles.category_content}>
                  <Link href="/guildhall/games/eternum" passHref>
                    <div className={styles.game}>
                      <Image
                        src={"/influence_logo.png"}
                        alt="game_image"
                        width={20}
                        height={20}
                      />
                      <p className={styles.category_content_text}>Eternum</p>
                    </div>
                  </Link>
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
                <p className={styles.category_title}>Marketplaces</p>
                <div className={styles.external_buttons}>
                  <a
                    className={styles.external_button}
                    href={token.aspect_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      alt="Aspect Logo"
                      src={"/aspect-pfp.png"}
                      fill={true}
                      style={{ objectFit: "contain" }}
                    />
                  </a>
                  <a
                    className={styles.external_button}
                    href="https://mintsquare.io/starknet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      alt="Mintsquare Logo"
                      src={"/mintsquare-logo.png"}
                      fill={true}
                      style={{ objectFit: "contain" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.guild_row}>
            <div className={styles.guild}>
              <p className={styles.category_title}>Guilds</p>
              <Guilds guilds={guilds} />
            </div>
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
        </>
      ) : null}
    </div>
  );
};
