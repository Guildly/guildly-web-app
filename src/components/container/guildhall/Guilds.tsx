import styles from "../../../styles/containers/guildhall/Guilds.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  UserIcon,
  MerchantIcon,
  MasterIcon,
  ShieldIcon,
} from "../../../shared/icons";
import { sounds } from "../../../shared/sounds";

export const Guilds = () => {
  const { playClickSound } = sounds();
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
        <div className={styles.center_align}>Rank</div>
        <div className={styles.left_align}>Guild</div>
        <div className={styles.right_align}>Games</div>
        <div className={styles.right_align}>Items</div>
        <div className={styles.right_align}>Members</div>
        <div className={styles.right_align}>Average Split</div>
        <div className={styles.right_align}>Treasury</div>
      </div>
      <div className={styles.guild_contents}>
        {guilds.map((guild, index) => (
          <Link
            href={"/guildhall/guilds/" + guild.address}
            passHref
            onClick={() => playClickSound()}
            key={index}
            className={styles.link}
          >
            <div className={styles.guild_row} key={index}>
              <div className={styles.center_align}>{guild.rank}</div>
              <div className={styles.left_align}>
                <div className={styles.guild_name}>
                  <Image
                    src={guild.guild_image}
                    alt="guild-image"
                    width={40}
                    height={40}
                  />
                  {guild.guild}
                </div>
              </div>
              <div className={styles.right_align}>
                <div className={styles.game_area}>
                  <p>{guild.games.length}</p>
                  <div className={styles.games_icons}>
                    {guild.games.map((game, index) => (
                      <div className={styles.game} key={index}>
                        <Image
                          className={styles.game_image}
                          color={"white"}
                          src={game.image}
                          alt="game-image"
                          width={20}
                          height={20}
                        />
                        {/* <p>{game.name}</p> */}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.games_box}></div>
              </div>
              <div className={styles.right_align}>
                <div className={styles.items_area}>
                  <p className={styles.member_master}>{guild.items}</p>
                  <p className={styles.items_value}>~{guild.items_value}</p>
                </div>
              </div>
              <div className={styles.right_align}>
                <div className={styles.members_area}>
                  <p className={styles.members_number}>2</p>
                  <div className={styles.members_list}>
                    <div className={styles.address}>
                      <div className={styles.role_icon}>
                        <MasterIcon />
                      </div>
                      <p>{guild.members[0]}</p>
                    </div>
                    <div className={styles.address}>
                      <div className={styles.role_icon}>
                        <UserIcon />
                      </div>
                      <p>{guild.members[1]}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.right_align}>
                <div className={styles.fees}>
                  <div className={styles.fee_row}>
                    <div className={styles.fee_element}>
                      <div className={styles.fee_icon}>
                        <div className={styles.role_icon}>
                          <MerchantIcon />
                        </div>
                      </div>
                      <p className={styles.split}>{guild.fees.owner}</p>
                    </div>
                    <div className={styles.fee_element}>
                      <div className={styles.fee_icon}>
                        <div className={styles.role_icon}>
                          <UserIcon />
                        </div>
                      </div>
                      <p className={styles.split}>{guild.fees.user}</p>
                    </div>
                  </div>
                  <div className={styles.fee_row}>
                    <div className={styles.fee_element}>
                      <div className={styles.fee_icon}>
                        <div className={styles.role_icon}>
                          <MasterIcon />
                        </div>
                      </div>
                      <p className={styles.split}>{guild.fees.admin}</p>
                    </div>
                    <div className={styles.fee_element}>
                      <div className={styles.fee_icon}>
                        <div className={styles.role_icon}>
                          <ShieldIcon />
                        </div>
                      </div>
                      <p className={styles.split}>{guild.fees.guild}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.right_align}>{guild.treasury}</div>
              <div className={styles.right_align}>
                <p>+50%</p>
                <img
                  src={"/chart-example.png"}
                  className={styles.activity_image}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
