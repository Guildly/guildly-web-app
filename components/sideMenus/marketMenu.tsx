import left_styles from "../../styles/sidemenu/MarketLeft.module.css";
import right_styles from "../../styles/sidemenu/MarketRight.module.css";

export const MarketLeftMenu = () => {
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

export const MarketRightMenu = () => {
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
