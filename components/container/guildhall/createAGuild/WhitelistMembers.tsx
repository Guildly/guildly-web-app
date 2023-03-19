import styles from "../../../../styles/containers/guildhall/createAGuild/WhitelistMembers.module.css";
import { ControlledShortTextInput } from "../../../inputs";
import { ControlledSelectIcons } from "../../../dropdowns";
import {
  UserIcon,
  MerchantIcon,
  MasterIcon,
  ShieldIcon,
  PlusIcon,
  InfoIcon,
  CloseIcon,
} from "../../../../shared/icons";

export const WhitelistMembers = ({ ...props }: any) => {
  // const roleOptions = ["Journeyman", "Merchant", "Master"];

  const roleOptions = [
    {
      icon: (
        <div className={styles.role_icon}>
          <MerchantIcon />
        </div>
      ),
      text: "Merchant",
    },
    {
      icon: (
        <div className={styles.role_icon}>
          <UserIcon />
        </div>
      ),
      text: "Journeyman",
    },
    {
      icon: (
        <div className={styles.role_icon}>
          <MasterIcon />
        </div>
      ),
      text: "Master",
    },
  ];

  return (
    <div className={styles.members_container}>
      <p className={styles.members_title}>Whitelist Members</p>
      <div className={styles.members_content}>
        <div className={styles.members_form}>
          <div className={styles.members_address}>
            <p className={styles.title}>Member Address</p>
            <ControlledShortTextInput
              className={styles.short_input}
              control={props.control}
              rules={null}
              defaultValue=""
              placeholder="Paste member address"
              icon={null}
              name={`members.${props.index}.address`}
            />
            <div className={styles.roles}>
              <div className={styles.added_role}>
                <div className={styles.role_icon}>
                  <MerchantIcon />
                </div>
                <p>Merchant</p>
                <div className={styles.close_icon}>
                  <CloseIcon />
                </div>
              </div>
              <div className={styles.added_role}>
                <div className={styles.role_icon}>
                  <UserIcon />
                </div>
                <p>Journeyman</p>
                <div className={styles.close_icon}>
                  <CloseIcon />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.members_role}>
            <p className={styles.title}>Role</p>
            <ControlledSelectIcons
              className={styles.short_input}
              control={props.control}
              rules={null}
              defaultValue={{
                icon: (
                  <div className={styles.role_icon}>
                    <UserIcon />
                  </div>
                ),
                text: "Journeyman",
              }}
              options={roleOptions}
              name={`members.${props.index}.role`}
            />
          </div>
          <div className={styles.grant_area}>
            <button className={styles.grant_button}>
              <p>Grant</p>
            </button>
          </div>
          <div className={styles.whitelisted_members}>
            <p className={styles.whitelisted_members_title}>
              Whitelisted Members
            </p>
            <div className={styles.whitelisted_list}>
              <div className={styles.whitelisted_row}>
                <p>0x4g57...wefr</p>
                <div className={styles.whitelisted_roles}>
                  <div className={styles.role_area}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                      className={styles.role_icon}
                    >
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                    </svg>
                  </div>
                  <div className={styles.role_area}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      fill="currentColor"
                      className={styles.role_icon}
                    >
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c10 0 18.8-4.9 24.2-12.5l-99.2-99.2c-14.9-14.9-23.3-35.1-23.3-56.1v-33c-15.9-4.7-32.8-7.2-50.3-7.2H178.3zM384 224c-17.7 0-32 14.3-32 32v82.7c0 17 6.7 33.3 18.7 45.3L478.1 491.3c18.7 18.7 49.1 18.7 67.9 0l73.4-73.4c18.7-18.7 18.7-49.1 0-67.9L512 242.7c-12-12-28.3-18.7-45.3-18.7H384zm24 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                    </svg>
                  </div>
                </div>
                <div className={styles.garbage_button}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className={styles.garbage_icon}
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </div>
              </div>
              <div className={styles.whitelisted_row}>
                <p>0x4g57...wefr</p>
                <div className={styles.garbage_button}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className={styles.garbage_icon}
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </div>
              </div>
              <div className={styles.whitelisted_row}>
                <p>0x4g57...wefr</p>
                <div className={styles.garbage_button}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className={styles.garbage_icon}
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.add_member_area}>
          <button
            className={styles.next_button}
            onClick={() =>
              props.whitelistedAppend({
                address: "",
                role: "",
              })
            }
          >
            <p>Add Member</p>
          </button>
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
