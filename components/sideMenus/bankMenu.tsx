import left_styles from "../../styles/sidemenu/BankLeft.module.css";
import right_styles from "../../styles/sidemenu/BankRight.module.css";

export const BankLeftMenu = () => {
  return (
    <div className={left_styles.menu}>
      <div className={left_styles.box}>
        <div className={left_styles.header} />
        <div className={left_styles.content_container}>
          <div className={left_styles.content_title}>
            <p>Filters</p>
          </div>
          <div className={left_styles.filters_container}></div>
        </div>
      </div>
    </div>
  );
};

export const BankRightMenu = () => {
  return (
    <div className={right_styles.menu}>
      <div>
        <p>Title</p>
      </div>
      <div>
        <p>Content</p>
      </div>
    </div>
  );
};
