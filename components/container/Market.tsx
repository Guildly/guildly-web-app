import styles from "../../styles/containers/Market.module.css";
import Image from "next/image";

export const Market = () => {
  const tasks = [
    {
      task: "Harvest Food",
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      owner_percent: "92.5%",
      owner_payments: [
        {
          token: "ETH",
          token_image: "/eth 2.png",
          amount: "0.0001",
        },
        {
          token: "LORDS",
          token_image: "/Lords.png",
          amount: "10",
        },
        {
          token: "USDC",
          token_image: "",
          amount: "10",
        },
      ],
      user_percent: "92.5%",
      user_payment: "0.0001",
      admin_percent: "92.5%",
      admin_payment: "0.0001",
      guild_percent: "92.5%",
      guild_payment: "0.0001",
    },
    {
      task: "Harvest Food",
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      owner_percent: "92.5%",
      owner_payments: [
        {
          token: "ETH",
          token_image: "/eth 2.png",
          amount: "0.0001",
        },
        {
          token: "LORDS",
          token_image: "/Lords.png",
          amount: "10",
        },
      ],
      user_percent: "92.5%",
      user_payment: "0.0001",
      admin_percent: "92.5%",
      admin_payment: "0.0001",
      guild_percent: "92.5%",
      guild_payment: "0.0001",
    },
    {
      task: "Harvest Food",
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      owner_percent: "92.5%",
      owner_payments: [
        {
          token: "ETH",
          token_image: "/eth 2.png",
          amount: "0.0001",
        },
        {
          token: "LORDS",
          token_image: "/Lords.png",
          amount: "10",
        },
      ],
      user_percent: "92.5%",
      user_payment: "0.0001",
      admin_percent: "92.5%",
      admin_payment: "0.0001",
      guild_percent: "92.5%",
      guild_payment: "0.0001",
    },
    {
      task: "Harvest Food",
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      owner_percent: "92.5%",
      owner_payments: [
        {
          token: "ETH",
          token_image: "/eth 2.png",
          amount: "0.0001",
        },
        {
          token: "LORDS",
          token_image: "/Lords.png",
          amount: "10",
        },
      ],
      user_percent: "92.5%",
      user_payment: "0.0001",
      admin_percent: "92.5%",
      admin_payment: "0.0001",
      guild_percent: "92.5%",
      guild_payment: "0.0001",
    },
    {
      task: "Harvest Food",
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      owner_percent: "92.5%",
      owner_payments: [
        {
          token: "ETH",
          token_image: "/eth 2.png",
          amount: "0.0001",
        },
        {
          token: "LORDS",
          token_image: "/Lords.png",
          amount: "10",
        },
      ],
      user_percent: "92.5%",
      user_payment: "0.0001",
      admin_percent: "92.5%",
      admin_payment: "0.0001",
      guild_percent: "92.5%",
      guild_payment: "0.0001",
    },
    {
      task: "Harvest Food",
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      owner_percent: "92.5%",
      owner_payments: [
        {
          token: "ETH",
          token_image: "/eth 2.png",
          amount: "0.0001",
        },
        {
          token: "LORDS",
          token_image: "/Lords.png",
          amount: "10",
        },
      ],
      user_percent: "92.5%",
      user_payment: "0.0001",
      admin_percent: "92.5%",
      admin_payment: "0.0001",
      guild_percent: "92.5%",
      guild_payment: "0.0001",
    },
    {
      task: "Harvest Food",
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      owner_percent: "92.5%",
      owner_payments: [
        {
          token: "ETH",
          token_image: "/eth 2.png",
          amount: "0.0001",
        },
        {
          token: "LORDS",
          token_image: "/Lords.png",
          amount: "10",
        },
      ],
      user_percent: "92.5%",
      user_payment: "0.0001",
      admin_percent: "92.5%",
      admin_payment: "0.0001",
      guild_percent: "92.5%",
      guild_payment: "0.0001",
    },
    {
      task: "Harvest Food",
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      owner_percent: "92.5%",
      owner_payments: [
        {
          token: "ETH",
          token_image: "/eth 2.png",
          amount: "0.0001",
        },
        {
          token: "LORDS",
          token_image: "/Lords.png",
          amount: "10",
        },
      ],
      user_percent: "92.5%",
      user_payment: "0.0001",
      admin_percent: "92.5%",
      admin_payment: "0.0001",
      guild_percent: "92.5%",
      guild_payment: "0.0001",
    },
    {
      task: "Harvest Food",
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      owner_percent: "92.5%",
      owner_payments: [
        {
          token: "ETH",
          token_image: "/eth 2.png",
          amount: "0.0001",
        },
        {
          token: "LORDS",
          token_image: "/Lords.png",
          amount: "10",
        },
      ],
      user_percent: "92.5%",
      user_payment: "0.0001",
      admin_percent: "92.5%",
      admin_payment: "0.0001",
      guild_percent: "92.5%",
      guild_payment: "0.0001",
    },
    {
      task: "Harvest Food",
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      owner_percent: "92.5%",
      owner_payments: [
        {
          token: "ETH",
          token_image: "/eth 2.png",
          amount: "0.0001",
        },
        {
          token: "LORDS",
          token_image: "/Lords.png",
          amount: "10",
        },
      ],
      user_percent: "92.5%",
      user_payment: "0.0001",
      admin_percent: "92.5%",
      admin_payment: "0.0001",
      guild_percent: "92.5%",
      guild_payment: "0.0001",
    },
    {
      task: "Harvest Food",
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      owner_percent: "92.5%",
      owner_payments: [
        {
          token: "ETH",
          token_image: "/eth 2.png",
          amount: "0.0001",
        },
        {
          token: "LORDS",
          token_image: "/Lords.png",
          amount: "10",
        },
      ],
      user_percent: "92.5%",
      user_payment: "0.0001",
      admin_percent: "92.5%",
      admin_payment: "0.0001",
      guild_percent: "92.5%",
      guild_payment: "0.0001",
    },
    {
      task: "Harvest Food",
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      owner_percent: "92.5%",
      owner_payments: [
        {
          token: "ETH",
          token_image: "/eth 2.png",
          amount: "0.0001",
        },
        {
          token: "LORDS",
          token_image: "/Lords.png",
          amount: "10",
        },
      ],
      user_percent: "92.5%",
      user_payment: "0.0001",
      admin_percent: "92.5%",
      admin_payment: "0.0001",
      guild_percent: "92.5%",
      guild_payment: "0.0001",
    },
    {
      task: "Harvest Food",
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      owner_percent: "92.5%",
      owner_payments: [
        {
          token: "ETH",
          token_image: "/eth 2.png",
          amount: "0.0001",
        },
        {
          token: "LORDS",
          token_image: "/Lords.png",
          amount: "10",
        },
      ],
      user_percent: "92.5%",
      user_payment: "0.0001",
      admin_percent: "92.5%",
      admin_payment: "0.0001",
      guild_percent: "92.5%",
      guild_payment: "0.0001",
    },
    {
      task: "Harvest Food",
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      owner_percent: "92.5%",
      owner_payments: [
        {
          token: "ETH",
          token_image: "/eth 2.png",
          amount: "0.0001",
        },
        {
          token: "LORDS",
          token_image: "/Lords.png",
          amount: "10",
        },
      ],
      user_percent: "92.5%",
      user_payment: "0.0001",
      admin_percent: "92.5%",
      admin_payment: "0.0001",
      guild_percent: "92.5%",
      guild_payment: "0.0001",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.market_box}>
        <table className={styles.market_table}>
          <tr>
            <th className={styles.header}>Task</th>
            <th colSpan={2} className={styles.header}>
              Owner
            </th>
            <th colSpan={2} className={styles.header}>
              User
            </th>
            <th colSpan={2} className={styles.header}>
              Admin
            </th>
            <th colSpan={2} className={styles.header}>
              Guild
            </th>
          </tr>
          <tr>
            <th className={styles.subheader}>Guild</th>
            <th className={styles.subheader}>Reward</th>
            <th className={styles.subheader}>Payment</th>
            <th className={styles.subheader}>Reward</th>
            <th className={styles.subheader}>Payment</th>
            <th className={styles.subheader}>Reward</th>
            <th className={styles.subheader}>Payment</th>
            <th className={styles.subheader}>Reward</th>
            <th className={styles.subheader}>Payment</th>
          </tr>
          <div className={styles.dividor} />
          {tasks.map((task, index) => (
            <tr className={styles.table_row} key={index}>
              <td className={styles.task}>
                <p>{task.task}</p>
                <div className={styles.guild_row}>
                  <Image
                    src={task.guild_image}
                    height={20}
                    width={20}
                    alt="Guild Symbol"
                    className={styles.guild_symbol}
                  />
                  <p>{task.guild}</p>
                </div>
              </td>
              <td className={styles.percent}>{task.owner_percent}</td>
              <td className={styles.payment}>
                {task.owner_payments.map((payment, index) => (
                  <div className={styles.payment_row} key={index}>
                    <p>{payment.amount}</p>
                    <Image
                      src={payment.token_image}
                      height={15}
                      width={15}
                      alt="Token Symbol"
                      className={styles.token_symbol}
                    />
                  </div>
                ))}
                <p className={styles.dollar_value}>~ $5</p>
              </td>
              <td className={styles.percent}>{task.user_percent}</td>
              <td className={styles.payment}>{task.user_payment}</td>
              <td className={styles.percent}>{task.admin_percent}</td>
              <td className={styles.payment}>{task.admin_payment}</td>
              <td className={styles.percent}>{task.guild_percent}</td>
              <td className={styles.payment}>{task.guild_payment}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
