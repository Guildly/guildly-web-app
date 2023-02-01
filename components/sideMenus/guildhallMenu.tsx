import left_styles from "../../styles/sidemenu/GuildhallLeft.module.css";
import right_styles from "../../styles/sidemenu/GuildhallRight.module.css";

export const GuildhallLeftMenu = () => {
  return (
    <div className={left_styles.box}>
      <div className={left_styles.header} />
      <div className={left_styles.content_container}>
        <div className={left_styles.content_title}>
          <p>Welcome Journeyman</p>
        </div>
        <div className={left_styles.tutorial_container}>
          <div className={left_styles.tutorial_section}>
            <p className={left_styles.tutorial_title}>Master</p>
            <ol className={left_styles.tutorial_content}>
              <li>Create a Guild</li>
              <li>Set Guild permissions</li>
              <li>Add members</li>
              <li>Start earning fees</li>
            </ol>
            <div className={left_styles.section_break} />
          </div>
          <div className={left_styles.tutorial_section}>
            <p className={left_styles.tutorial_title}>Merchants</p>
            <ol className={left_styles.tutorial_content}>
              <li>Create a Guild</li>
              <li>Set Guild permissions</li>
              <li>Add members</li>
              <li>Start earning fees</li>
            </ol>
            <div className={left_styles.section_break} />
          </div>
          <div className={left_styles.tutorial_section}>
            <p className={left_styles.tutorial_title}>Apprentices</p>
            <ol className={left_styles.tutorial_content}>
              <li>Create a Guild</li>
              <li>Set Guild permissions</li>
              <li>Add members</li>
              <li>Start earning fees</li>
            </ol>
            <div className={left_styles.section_break} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const GuildhallRightMenu = () => {
  return (
    <div className={right_styles.box}>
      <div className={right_styles.header} />
      <div className={right_styles.content_container}>
        <div className={right_styles.content_title}>
          <p>Notice Board</p>
        </div>
        <div className={right_styles.notices_container}>
          <p>
            Starknetdev.stark harvested resources on your Realm
            Starknetdev.stark mined your Asteroid Starknetdev.stark harvested
            resources on your Realm Starknetdev.stark mined your Asteroid
            Starknetdev.stark harvested resources on your Realm
            Starknetdev.stark mined your Asteroid Starknetdev.stark harvested
            resources on your Realm
          </p>
        </div>
      </div>
    </div>
  );
};
