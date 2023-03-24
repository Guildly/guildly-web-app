import styles from "../../../../styles/containers/guildhall/createAGuild/GuildInfo.module.css";
import { useState } from "react";
import {
  ControlledShortTextInput,
  ControlledLongTextInput,
} from "../../../inputs";
import Image from "next/image";
import { sounds } from "../../../../shared/sounds";
import { AttributeButton } from "../../../buttons";

export const GuildInfo = ({ ...props }: any) => {
  const [guildDescription, setGuildDescription] = useState("");
  const { playClickSound } = sounds();
  const [isImageGenerated, setIsImageGenerated] = useState(false);

  const [shape, setShape] = useState("");
  const [style, setStyle] = useState("");
  const [finish, setFinish] = useState("");

  const [promptDict, setPromptDict] = useState({});

  const handleAdd = (key: string, value: string) => {
    setPromptDict((promptDict) => ({
      ...promptDict,
      [key]: value,
    }));
  };

  console.log(props.errors);

  return (
    <div className={styles.content}>
      <div className={styles.text_inputs}>
        <div className={styles.name}>
          <p className={styles.title}>Name</p>
          <ControlledShortTextInput
            className={styles.short_input}
            control={props.control}
            rules={null}
            defaultValue=""
            placeholder="What shall it be master?"
            icon={null}
            name={"name"}
          />
        </div>
        <div className={styles.description}>
          <p className={styles.title}>Description</p>
          <ControlledLongTextInput
            className={styles.long_input}
            control={props.control}
            rules={null}
            defaultValue=""
            placeholder="Enter a short description"
            icon={null}
            name={"description"}
          />
        </div>
      </div>
      <div className={styles.design_inputs}>
        <p className={styles.title}>Design Emblem</p>
        <div className={styles.design_box}>
          {isImageGenerated ? (
            <div className={styles.emblem_output}>
              <div className={styles.emblem}>
                <Image
                  height={200}
                  width={200}
                  alt="emblem"
                  src={"/emblem-example.png"}
                />
              </div>
              <button
                className={styles.regenerate_button}
                onClick={() => {
                  setIsImageGenerated(false);
                  playClickSound();
                }}
              >
                <p>Regenerate</p>
              </button>
            </div>
          ) : (
            <div className={styles.emblem_generation}>
              <div className={styles.design_attributes}>
                <div className={styles.attribute_container}>
                  <p className={styles.attribute_title}>Face</p>
                  <div className={styles.attributes}>
                    <AttributeButton
                      type="face"
                      value="Human"
                      dict={promptDict}
                      add={handleAdd}
                    />
                    <AttributeButton
                      type="face"
                      value="Ork"
                      dict={promptDict}
                      add={handleAdd}
                    />
                    <AttributeButton
                      type="face"
                      value="Elf"
                      dict={promptDict}
                      add={handleAdd}
                    />
                  </div>
                </div>
                <div className={styles.attribute_container}>
                  <p className={styles.attribute_title}>Color</p>
                  <div className={styles.attributes}>
                    <AttributeButton
                      type="color"
                      value="Red"
                      dict={promptDict}
                      add={handleAdd}
                    />
                    <AttributeButton
                      type="color"
                      value="Green"
                      dict={promptDict}
                      add={handleAdd}
                    />
                    <AttributeButton
                      type="color"
                      value="Yellow"
                      dict={promptDict}
                      add={handleAdd}
                    />
                    <AttributeButton
                      type="color"
                      value="Blue"
                      dict={promptDict}
                      add={handleAdd}
                    />
                    <AttributeButton
                      type="color"
                      value="Gold"
                      dict={promptDict}
                      add={handleAdd}
                    />
                    <AttributeButton
                      type="color"
                      value="Silver"
                      dict={promptDict}
                      add={handleAdd}
                    />
                    <AttributeButton
                      type="color"
                      value="Bronze"
                      dict={promptDict}
                      add={handleAdd}
                    />
                  </div>
                </div>
                <div className={styles.attribute_container}>
                  <p className={styles.attribute_title}>Shape</p>
                  <div className={styles.attributes}>
                    <AttributeButton
                      type="shape"
                      value="Circle"
                      dict={promptDict}
                      add={handleAdd}
                    />
                    <AttributeButton
                      type="shape"
                      value="Reactangle"
                      dict={promptDict}
                      add={handleAdd}
                    />
                    <AttributeButton
                      type="shape"
                      value="Triangle"
                      dict={promptDict}
                      add={handleAdd}
                    />
                  </div>
                </div>
                <div className={styles.attribute_container}>
                  <p className={styles.attribute_title}>Style</p>
                  <div className={styles.attributes}>
                    <AttributeButton
                      type="style"
                      value="Saxon"
                      dict={promptDict}
                      add={handleAdd}
                    />
                    <AttributeButton
                      type="style"
                      value="Mystical"
                      dict={promptDict}
                      add={handleAdd}
                    />
                    <AttributeButton
                      type="style"
                      value="Futuristic"
                      dict={promptDict}
                      add={handleAdd}
                    />
                    <AttributeButton
                      type="style"
                      value="Old"
                      dict={promptDict}
                      add={handleAdd}
                    />
                  </div>
                </div>
                <div className={styles.attribute_container}>
                  <p className={styles.attribute_title}>Finish</p>
                  <div className={styles.attributes}>
                    <AttributeButton
                      type="finish"
                      value="Polished"
                      dict={promptDict}
                      add={handleAdd}
                    />
                    <AttributeButton
                      type="finish"
                      value="Rustic"
                      dict={promptDict}
                      add={handleAdd}
                    />
                    <AttributeButton
                      type="finish"
                      value="Bold"
                      dict={promptDict}
                      add={handleAdd}
                    />
                    <AttributeButton
                      type="finish"
                      value="Bright"
                      dict={promptDict}
                      add={handleAdd}
                    />
                  </div>
                </div>
              </div>
              <button
                className={styles.generate_button}
                onClick={() => {
                  props.setFormValue("emblem", "emblem_1");
                  setIsImageGenerated(true);
                  playClickSound();
                }}
              >
                <p>Generate</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
