import styles from "../../../styles/containers/guildhall/Guild.module.css";
import Image from "next/image";

export const Account = () => {
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
            <p>Tokens go here</p>
          </div>
        </div>
        <div className={styles.council}>
          <p className={styles.category_title}>Council</p>
          <div className={styles.proposals_box}></div>
        </div>
      </div>
      <div className={styles.fee_rates}>
        <div className={styles.fee_rates_header}>
          <p className={styles.category_title}>Fee Rates</p>
        </div>
        <div className={styles.fee_rates_list}>
          <div className={styles.fee_rate}>
            <Image
              className={styles.game_image}
              src={"/eternum_logo.svg"}
              alt="game_image"
              width={15}
              height={15}
            />
            <p className={styles.fee_rate_selector}>Harvest Food</p>
            <p className={styles.fee_rate_percent}>5%</p>
            <div className={styles.fee_rate_payment}>
              <p className={styles.fee_payment_text}>0.001</p>
              <p className={styles.fee_payment_token}></p>
            </div>
          </div>
          <div className={styles.fee_rate}>
            <Image
              className={styles.game_image}
              src={"/influence_logo.svg"}
              alt="game_image"
              width={15}
              height={15}
            />
            <p className={styles.fee_rate_selector}>Build Plot</p>
            <p className={styles.fee_rate_percent}>-</p>
            <div className={styles.fee_rate_payment}>
              <p className={styles.fee_payment_text}>0.001</p>
              <p className={styles.fee_payment_token}></p>
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
            <div className={styles.join_button}>
              <p>Join</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
