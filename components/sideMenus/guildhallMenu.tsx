import left_styles from "../../styles/sidemenu/GuildhallLeft.module.css";
import right_styles from "../../styles/sidemenu/GuildhallRight.module.css";

export const GuildhallLeftMenu = () => {
  return (
    <>
      <div className={left_styles.menu}>

          <div className={left_styles.header} />
          <div className={left_styles.content_container}>
            <div className={left_styles.content_title}>
              <p>Welcome Journeyman</p>
            </div>
            <div className={left_styles.tutorial_container}>
              <div className={left_styles.tutorial_section}>
                <p className={left_styles.tutorial_title}>Master</p>
                <p className={left_styles.tutorial_title}>Journeyman</p>
                <p className={left_styles.tutorial_title}>Apprentice</p>
                <p className={left_styles.tutorial_title}>Merchant</p>
                <div className={left_styles.section_break} />
              </div>
              <div className={left_styles.tutorial_section}>
                <p className={left_styles.tutorial_title}>Discover Games</p>
              <div className={left_styles.games_content} />
                
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export const GuildhallRightMenu = () => {
  return (
    <>
      <div className={right_styles.menu}>
        <div className={right_styles.box}>
          <div className={right_styles.header} />
          <div className={right_styles.content_container}>
            <div className={right_styles.content_title}>
              <p>Notice Board</p>
            </div>
            <div className={right_styles.notices_container}></div>
          </div>
        </div>
      </div>
    </>
  );
};
