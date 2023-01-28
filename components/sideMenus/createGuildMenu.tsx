import right_styles from "../../styles/sidemenu/GuildhallRight.module.css";

export const CreateGuildRightMenu = ({ ...props }: any) => {
  return (
    <div className={right_styles.menu}>
      <div className={right_styles.box}>
        <div className={right_styles.header} />
        <div className={right_styles.content_container}>
          <div className={right_styles.content_title}>
            <p>Notice Board</p>
          </div>
          <div className={right_styles.notices_container}>
            <div className={right_styles.element}>
              <p className={right_styles.title}>Name</p>
              <p className={right_styles.input_text}>Core Lords</p>
            </div>
            <div className={right_styles.element}>
              <p className={right_styles.title}>Guild Anthem</p>
              <p className={right_styles.input_text}>Core Lords</p>
            </div>
            <div className={right_styles.element}>
              <p className={right_styles.title}>Emblem</p>
              <p className={right_styles.input_text}>Core Lords</p>
            </div>
            <div className={right_styles.element}>
              <p className={right_styles.title}>Permissions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
