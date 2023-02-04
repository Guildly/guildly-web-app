import React, { useCallback, useState } from "react";
import styles from "../../styles/navigation/TransactionCart.module.css";
import { sounds } from "../../shared/sounds";

export const TransactionCart = () => {
  const { playClickSound } = sounds();
  const [isTransactionsSelected, setIsTransactionsSelected] = useState(true);
  const [isScrollSelected, setIsScrollSelected] = useState(false);
  return (
    <div className={styles.box}>
      <div className={styles.left_border} />
      <div className={styles.right_border} />
      <div className={styles.content}>
        <div className={styles.cart_buttons}>
          <button
            className={
              isTransactionsSelected ? styles.button_highlighted : styles.button
            }
            onClick={() => {
              setIsTransactionsSelected(true);
              setIsScrollSelected(false);
              playClickSound();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className={styles.button_icon}
            >
              <path d="M373.5 27.1C388.5 9.9 410.2 0 433 0c43.6 0 79 35.4 79 79c0 22.8-9.9 44.6-27.1 59.6L277.7 319l-10.3-10.3-64-64L193 234.3 373.5 27.1zM170.3 256.9l10.4 10.4 64 64 10.4 10.4-19.2 83.4c-3.9 17.1-16.9 30.7-33.8 35.4L24.4 510.3l95.4-95.4c2.6 .7 5.4 1.1 8.3 1.1c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32c0 2.9 .4 5.6 1.1 8.3L1.7 487.6 51.5 310c4.7-16.9 18.3-29.9 35.4-33.8l83.4-19.2z" />
            </svg>
          </button>
          <button
            className={
              isScrollSelected ? styles.button_highlighted : styles.button
            }
            onClick={() => {
              setIsTransactionsSelected(false);
              setIsScrollSelected(true);
              playClickSound();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
              className={styles.button_icon}
            >
              <path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z" />
            </svg>
          </button>
        </div>
        {isTransactionsSelected ? (
          <div className={styles.transaction_area}>
            <div className={styles.transaction_box}>
              <div className={styles.transaction}>
                <div className={styles.drag_icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    fill="currentColor"
                  >
                    <path d="M40 352c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0zm192 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0zM40 320l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40zM232 192c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0zM40 160l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40L40 32C17.9 32 0 49.9 0 72l0 48c0 22.1 17.9 40 40 40zM232 32c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0z" />
                  </svg>
                </div>
                <div>
                  <div className={styles.header}>
                    <div className={styles.title}>
                      <p>Create a Guild</p>
                    </div>
                    <button className={styles.remove_button}>
                      <p>Remove</p>
                    </button>
                  </div>
                  <div className={styles.dividor} />
                  <div className={styles.description}>
                    <p>Create Core Lords guild</p>
                  </div>
                </div>
              </div>
              <div className={styles.submit_button}>
                <p>Submit</p>
              </div>
            </div>
          </div>
        ) : null}

        {isScrollSelected ? (
          <div className={styles.transaction_area}>
            <div className={styles.transaction_box}></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
