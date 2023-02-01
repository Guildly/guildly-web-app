import left_styles from "../../../styles/sidemenu/guildhall/CreateGuildLeft.module.css";
import right_styles from "../../../styles/sidemenu/guildhall/CreateGuildRight.module.css";
import Image from "next/image";

export const CreateGuildLeftMenu = () => {
  return <div className={left_styles.menu}></div>;
};

export const CreateGuildRightMenu = ({ ...props }: any) => {
  return (
    <div className={right_styles.box}>
      <div className={right_styles.content_title}>
        <p>Guild Progress</p>
      </div>
      <div className={right_styles.content_container}>
        <div className={right_styles.content_row}>
          <p className={right_styles.content_row_title}>Name:</p>
          <p className={right_styles.content_row_input}>Core Lords</p>
        </div>
        <div className={right_styles.content_row}>
          <p className={right_styles.content_row_title}>Guild Anthem:</p>
          <p className={right_styles.content_row_input}>Core Lords</p>
        </div>
        <div className={right_styles.content_row}>
          <p className={right_styles.content_row_title}>Emblem:</p>
          <Image
            height={100}
            width={100}
            alt="emblem"
            src={"/emblem-example.png"}
          />
        </div>
        <div className={right_styles.content_row}>
          <p className={right_styles.content_row_title}>Permissions:</p>
        </div>
        <div className={right_styles.content_row}>
          <p className={right_styles.content_row_title}>Whitelisted Members:</p>
        </div>
      </div>
    </div>
  );
};
