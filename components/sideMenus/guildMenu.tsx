import left_styles from "../../styles/sidemenu/GuildLeft.module.css";
import right_styles from "../../styles/sidemenu/GuildRight.module.css";

export const GuildLeftMenu = () => {
  return <div className={left_styles.menu}></div>;
};

export const GuildRightMenu = () => {
  return <div className={right_styles.menu}></div>;
};
