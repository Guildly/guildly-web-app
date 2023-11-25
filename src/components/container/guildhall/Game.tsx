import styles from "../../../styles/containers/guildhall/Game.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useAccount } from "@starknet-react/core";
import { useRouter } from "next/router";
import { Select } from "../../dropdowns";
import { sounds } from "../../../shared/sounds";
import { fetchNfts } from "../../../features/accountNfts/fetchNfts";
import { padAddress } from "../../../utils/address";
import {
  AlchemyNftAsset,
  AlchemyNfts,
} from "../../../features/accountNfts/model";
import { TokenCard } from "../../token/TokenCard";
import { capitaliseFirst } from "../../../utils/format";
import { CircleTickIcon, ExternalIcon } from "../../../shared/icons";
import { Guilds } from "../../guildsScroll";

export const Game = () => {
  const router = useRouter();
  const { pid } = router.query;
  const title = capitaliseFirst(pid ? pid?.toString() : "");
  const { playClickSound } = sounds();
  const { address: accountAddress } = useAccount();
  const [guildTokens, setGuildTokens] = useState<AlchemyNftAsset[] | null>(
    null
  );
  const [selectedToken, setSelectedToken] = useState(0);
  const [fetchNftsError, setFetchNftsError] = useState(false);

  const [feeRole, setFeeRole] = useState("Owner");

  const getGameNfts = async (accountAddress: string) => {
    const data = await fetchNfts(
      accountAddress ? padAddress(accountAddress) : "0x0"
    );
    setGuildTokens(data.ownedNfts);
  };

  useEffect(() => {
    if (accountAddress) {
      getGameNfts(
        "0x07642A1c8D575B0c0f9a7AD7cCEb5517c02f36E5F3B36B25429Cc7C99383ed0a"
      );
    }
  }, [guildTokens]);

  const [taskDropdownValue, setTaskDropdownValue] = useState(
    "Influence Asteroids"
  );

  const tasks = [
    {
      contract: "Influence Asteroids",
      task: "build",
    },
    {
      contract: "Influence Asteroids",
      task: "Move Resource",
    },
    {
      contract: "Influence Crew",
      task: "Mint Crew Member",
    },
  ];

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
          <div className={styles.game_image}>
            <Image
              src={"/influence_logo.png"}
              alt="game-image"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.basic_info}>
            <p className={styles.guild_name}>{title}</p>
          </div>
        </div>
        <div className={styles.categories}>
          <div className={styles.category}>
            <p className={styles.category_title}>Contracts</p>
            <div className={styles.category_content}>
              <div className={styles.category_content_text}>
                <div className={styles.contract}>
                  <p>Influence Asteroids</p>
                  <a
                    className={styles.contract_icon}
                    href="https://testnet.aspect.co/collection/0x02dc57158f2f119653319d552745b9991afa5d468ecbf0609a0ac7d36ad69e5b"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalIcon />
                  </a>
                  <div
                    className={[styles.contract_icon, styles.verified].join(
                      " "
                    )}
                  >
                    <CircleTickIcon />
                  </div>
                </div>
                <div className={styles.contract}>
                  <p>Influence Crew</p>
                  <a
                    className={styles.contract_icon}
                    href="https://testnet.aspect.co/collection/0x041c4e86a03480313547a04e13fc4d43d7fb7bcb5244fd0cb93f793f304f6124"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalIcon />
                  </a>
                  <div
                    className={[styles.contract_icon, styles.verified].join(
                      " "
                    )}
                  >
                    <CircleTickIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.category}>
            <p className={styles.category_title}>Tasks</p>
            <div className={styles.category_content}>
              <Select
                options={["Influence Asteroids", "Influence Crew"]}
                value={taskDropdownValue}
                setValue={setTaskDropdownValue}
              />
              <div className={styles.category_content_text}>
                {tasks.map((task, index) => (
                  <p key={index}>{task.task}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bank_row}>
        <div className={styles.description}>
          <p className={styles.category_title}>Info</p>
          <p className={styles.description_text}>
            Influence is a space strategy MMO, set in a realistic asteroid belt
            in the Adalia system, after an ill-fated journey aboard the Arvad, a
            generational ship fleeing from a dying Earth.
          </p>
        </div>
        <div className={styles.bank}>
          <p className={styles.category_title}>Items</p>
          <div className={styles.bank_tokens}>
            {guildTokens && accountAddress
              ? guildTokens.map((token, index) => (
                  <div className={styles.token} key={index}>
                    <TokenCard
                      isSelected={false}
                      setSelectedToken={setSelectedToken}
                      token={token}
                      index={index}
                    />
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
      <div className={styles.guilds}>
        <p className={styles.category_title}>Guilds</p>
        <Guilds guilds={guilds} />
      </div>
      <button className={styles.join_button} onClick={() => playClickSound()}>
        <p>Find Guilds</p>
      </button>
    </div>
  );
};
