import styles from "../../../../styles/containers/guildhall/CreateGuild.module.css";
import { ControlledTextInput } from "../../../inputs";
import { ControlledSelect } from "../../../dropdowns";

export const WhitelistMembers = ({ ...props }: any) => {
  const roleOptions = ["Journeyman", "Merchant", "Master"];

  return (
    <div className={styles.members_container}>
      <p className={styles.permissions_title}>Whitelist Members</p>\
      <div className={styles.members_content}>
        <div className={styles.members_form}>
          <div className={styles.members_address}>
            <p className={styles.title}>Member Address</p>
            <ControlledTextInput
              className={styles.short_input}
              control={props.control}
              rules={null}
              defaultValue=""
              placeholder="Paste member address"
              icon={null}
              name={`members.${props.index}.address`}
            />
          </div>
          <div className={styles.members_role}>
            <p className={styles.title}>Role</p>
            <ControlledSelect
              className={styles.short_input}
              control={props.control}
              rules={null}
              defaultValue="Journeyman"
              icon={null}
              options={roleOptions}
              name={`members.${props.index}.role`}
            />
          </div>
        </div>
        <div className={styles.role_explainer}>
          <p>
            The <span className={styles.role_text}>Master</span> of the guild is
            the creator and the ultimate authority.
          </p>
          <p>
            The <span className={styles.role_text}>Journeyman</span> is
            responsible for administrating the guild and enforcing rules and
            regulations.
          </p>
          <p>
            The <span className={styles.role_text}>Merchant</span> owner can
            deposit and withdraw items, and is responsible for maintaining the
            inventory.
          </p>
        </div>
      </div>
    </div>
  );
};
