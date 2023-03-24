import styles from "../../../../styles/containers/guildhall/createAGuild/WhitelistMembers.module.css";
import { useState } from "react";
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
  BinIcon,
} from "../../../../shared/icons";
import { useFieldArray } from "react-hook-form";

export const WhitelistMembers = ({ ...props }: any) => {
  // const roleOptions = ["Journeyman", "Merchant", "Master"];
  const [whitelistedIndex, setWhitelistedIndex] = useState(0);

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

  const {
    fields: roleFields,
    append: rolesAppend,
    remove: rolesRemove,
  } = useFieldArray({
    control: props.control,
    name: `whitelisted.${whitelistedIndex}.roles`,
  });

  const roles = props.watch(`whitelisted.${whitelistedIndex}.roles`);

  console.log(roles);

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
              placeholder="Enter member address"
              icon={null}
              name={`whitelisted.${whitelistedIndex}.address`}
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
              name={`whitelisted.${whitelistedIndex}.roles`}
            />
          </div>
          <div className={styles.grant_area}>
            <button
              className={styles.grant_button}
              onClick={() => {
                if (roles[0].role == "") {
                  // onchange(inputValue);
                }
                // props.setFormValue(
                //   `whitelisted.${whitelistedIndex}.roles.0.role`,
                //   "hello"
                // );
                rolesAppend({ role: "" });
              }}
            >
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
                    <div className={styles.role_icon}>
                      <UserIcon />
                    </div>
                  </div>
                  <div className={styles.role_area}>
                    <div className={styles.role_icon}>
                      <MerchantIcon />
                    </div>
                  </div>
                </div>
                <div className={styles.garbage_button}>
                  <div className={styles.garbage_icon}>
                    <BinIcon />
                  </div>
                </div>
              </div>
              <div className={styles.whitelisted_row}>
                <p>0x4g57...wefr</p>
                <div className={styles.garbage_button}>
                  <div className={styles.garbage_icon}>
                    <BinIcon />
                  </div>
                </div>
              </div>
              <div className={styles.whitelisted_row}>
                <p>0x4g57...wefr</p>
                <div className={styles.garbage_button}>
                  <div className={styles.garbage_icon}>
                    <BinIcon />
                  </div>
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
