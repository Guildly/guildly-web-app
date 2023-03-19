import styles from "../../../../styles/containers/guildhall/createAGuild/GuildInfo.module.css";
import { useState } from "react";
import {
  ControlledShortTextInput,
  ControlledLongTextInput,
} from "../../../inputs";
import Image from "next/image";

export const GuildInfo = ({ ...props }: any) => {
  const [guildName, setGuildName] = useState("");
  const [guildDescription, setGuildDescription] = useState("");

  const [isImageGenerated, setIsImageGenerated] = useState(false);

  const [face, setFace] = useState("");
  const [color, setColor] = useState("");
  const [shape, setShape] = useState("");
  const [style, setStyle] = useState("");
  const [finish, setFinish] = useState("");
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
            name={"emblem"}
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
                onClick={() => setIsImageGenerated(false)}
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
                    <button
                      className={
                        face == "Human"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setFace("Human")}
                    >
                      <p>Human</p>
                    </button>
                    <button
                      className={
                        face == "Ork"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setFace("Ork")}
                    >
                      <p>Ork</p>
                    </button>
                    <button
                      className={
                        face == "Elf"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setFace("Elf")}
                    >
                      <p>Elf</p>
                    </button>
                  </div>
                </div>
                <div className={styles.attribute_container}>
                  <p className={styles.attribute_title}>Color</p>
                  <div className={styles.attributes}>
                    <button
                      className={
                        color == "Red"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setColor("Red")}
                    >
                      <p>Red</p>
                    </button>
                    <button
                      className={
                        color == "Green"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setColor("Green")}
                    >
                      <p>Green</p>
                    </button>
                    <button
                      className={
                        color == "Yellow"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setColor("Yellow")}
                    >
                      <p>Yellow</p>
                    </button>
                    <button
                      className={
                        color == "Blue"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setColor("Blue")}
                    >
                      <p>Blue</p>
                    </button>
                    <button
                      className={
                        color == "Gold"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setColor("Gold")}
                    >
                      <p>Gold</p>
                    </button>
                    <button
                      className={
                        color == "Silver"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setColor("Silver")}
                    >
                      <p>Silver</p>
                    </button>
                    <button
                      className={
                        color == "Bronze"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setColor("Bronze")}
                    >
                      <p>Bronze</p>
                    </button>
                  </div>
                </div>
                <div className={styles.attribute_container}>
                  <p className={styles.attribute_title}>Shape</p>
                  <div className={styles.attributes}>
                    <button
                      className={
                        shape == "Circle"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setShape("Circle")}
                    >
                      <p>Circle</p>
                    </button>
                    <button
                      className={
                        shape == "Rectangle"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setShape("Rectangle")}
                    >
                      <p>Rectangle</p>
                    </button>
                    <button
                      className={
                        shape == "Triangle"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setShape("Triangle")}
                    >
                      <p>Triangle</p>
                    </button>
                  </div>
                </div>
                <div className={styles.attribute_container}>
                  <p className={styles.attribute_title}>Style</p>
                  <div className={styles.attributes}>
                    <button
                      className={
                        style == "Saxon"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setStyle("Saxon")}
                    >
                      <p>Saxon</p>
                    </button>
                    <button
                      className={
                        style == "Mystical"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setStyle("Mystical")}
                    >
                      <p>Mystical</p>
                    </button>
                    <button
                      className={
                        style == "Futuristic"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setStyle("Futuristic")}
                    >
                      <p>Futuristic</p>
                    </button>
                    <button
                      className={
                        style == "Old"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setStyle("Old")}
                    >
                      <p>Old</p>
                    </button>
                  </div>
                </div>
                <div className={styles.attribute_container}>
                  <p className={styles.attribute_title}>Finish</p>
                  <div className={styles.attributes}>
                    <button
                      className={
                        finish == "Polished"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setFinish("Polished")}
                    >
                      <p>Polished</p>
                    </button>
                    <button
                      className={
                        finish == "Rustic"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setFinish("Rustic")}
                    >
                      <p>Rustic</p>
                    </button>
                    <button
                      className={
                        finish == "Bold"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setFinish("Bold")}
                    >
                      <p>Bold</p>
                    </button>
                    <button
                      className={
                        finish == "Bright"
                          ? styles.attribute_selected
                          : styles.attribute
                      }
                      onClick={() => setFinish("Bright")}
                    >
                      <p>Bright</p>
                    </button>
                  </div>
                </div>
              </div>
              <button
                className={styles.generate_button}
                onClick={() => setIsImageGenerated(true)}
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
