import left_styles from "../../styles/sidemenu/GuildhallLeft.module.css";
import right_styles from "../../styles/sidemenu/GuildhallRight.module.css";
import { ScrollingText } from "../animations";

export const GuildhallLeftMenu = () => {
  return (
    <div className={left_styles.box}>
      <div className={left_styles.content_title}>
        <p>Welcome Journeyman</p>
      </div>
      <div className={left_styles.content_container}>
        <div className={left_styles.start_container}>
          <p className={left_styles.start_title}>New here?</p>
          <p className={left_styles.start_text}>
            Visit our{" "}
            <a href="https://www.google.com" target="_blank" rel="noreferrer">
              wiki page
            </a>
            <br />
            to get started!
          </p>
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
  const notices = [
    "bob.stark made you leader",
    "alice.stark deposited xyz",
    "It's christmas!",
    "XYZ integrates\n\nXYZ has partnered with guildly to integrate their indexer!",
  ];
  return (
    <div className={right_styles.box}>
      <div className={right_styles.header} />
      <div className={right_styles.content_title}>
        <p>Notice Board</p>
      </div>
      <div className={right_styles.content_container}>
        <div className={right_styles.notices_container}>
          <ScrollingText textLines={notices} />
        </div>
      </div>
    </div>
  );
};
