import styles from "../../styles/components/dropdowns/FilterOption.module.css";
import { useState } from "react";
import { sounds } from "../../shared/sounds";

export interface FilterOptionProps {
  option: any;
  index: number;
}

export const FilterOption = ({ option, index }: FilterOptionProps) => {
  const { playClickSound } = sounds();
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      className={styles.option_row}
      key={index}
      onClick={() => {
        playClickSound();
        setIsSelected(!isSelected);
      }}
    >
      <div
        className={
          isSelected
            ? [styles.option_select_box, styles.selected].join(" ")
            : styles.option_select_box
        }
      />
      <p className={styles.option_text}>{option}</p>
    </div>
  );
};
