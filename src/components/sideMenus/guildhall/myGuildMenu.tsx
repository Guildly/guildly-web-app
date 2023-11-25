import right_styles from "../../../styles/sidemenu/guildhall/CreateGuildRight.module.css";

export const MyGuildLeftMenu = ({ ...props }: any) => {
  return <></>;
};

export const MyGuildRightMenu = ({ ...props }: any) => {
  return (
    <div className={right_styles.box}>
      <div className={right_styles.content_title}>
        <p>Guild Progress</p>
      </div>
      <div className={right_styles.content_container}>
        <p className={right_styles.title}>Proposed Changes</p>
        <div className={right_styles.proposed_changes}>
          <div className={right_styles.changes_box}></div>
          <div className={right_styles.propose_button}>
            <p>Propose</p>
          </div>
        </div>
      </div>
    </div>
  );
};
