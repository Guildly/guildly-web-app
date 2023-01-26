import styles from "../../../styles/containers/guildhall/CreateGuild.module.css";
import { useState } from "react";
import { ShortTextInput, LongTextInput } from "../../inputs";

export const Permissions = () => {
  const [guildName, setGuildName] = useState("");
  return (
    <>
      <p className={styles.permissions_title}>Permissions</p>{" "}
      <div className={styles.name}>
        <p className={styles.title}>Contract Address</p>
        <ShortTextInput
          className={styles.short_input}
          content={guildName}
          setContent={setGuildName}
          label="What shall it be master?"
          icon={null}
        />
      </div>
    </>
  );
};
