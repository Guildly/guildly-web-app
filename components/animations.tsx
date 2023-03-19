import styles from "../styles/components/Animations.module.css";
import { useState, useEffect, useRef } from "react";

interface ScrollingTextProps {
  textLines: String[];
}

export const ScrollingText = ({ textLines }: ScrollingTextProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleTransitionEnd = () => {
      const container = containerRef.current;
      const firstLine = container?.children[0];
      const newLine = document.createElement("div");
      newLine.classList.add("text-line");
      newLine.textContent =
        textLines[Math.floor(Math.random() * textLines.length)].toString();
      container?.appendChild(newLine);
      firstLine?.remove();
    };

    const container = containerRef.current;
    const firstLine = container?.children[0];
    const newLine = document.createElement("div");
    newLine.classList.add("text-line");
    newLine.textContent =
      textLines[Math.floor(Math.random() * textLines.length)].toString();
    container?.appendChild(newLine);

    firstLine?.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      firstLine?.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [textLines]);

  return (
    <div className={styles.text_scroller}>
      <div ref={containerRef} className="text-container">
        <div className="text-line">
          {textLines[Math.floor(Math.random() * textLines.length)]}
        </div>
      </div>
    </div>
  );
};
