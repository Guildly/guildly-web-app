import styles from "../styles/components/Animations.module.css";
import { useState, useEffect } from "react";

export const ScrollingText = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const items = ["Line 1", "Line 2", "Line 3"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLine((i) => (i + 1) % items.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.infinite_scrolling}>
      {items.map((item, i) => (
        <div
          key={item}
          className={[
            styles.item,
            i >= currentLine && i < currentLine + items.length
              ? styles.show
              : styles.hide,
          ].join(" ")}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
