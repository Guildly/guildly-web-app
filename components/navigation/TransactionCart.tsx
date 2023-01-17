import React, { useCallback, useState } from "react";
import styles from "../../styles/navigation/TransactionCart.module.css";

export const TransactionCart = () => {
  return (
    <>
      <div className={styles.cart_buttons}>
        <button className={styles.button}></button>
        <button className={styles.button}></button>
      </div>
      <div className={styles.transaction_area}></div>
    </>
  );
};
