import left_styles from "../../styles/sidemenu/GuildhallLeft.module.css";
import right_styles from "../../styles/sidemenu/GuildhallRight.module.css";

export const GuildhallLeftMenu = () => {
  return (
<<<<<<< HEAD
    <>
      <div className={left_styles.menu}>

          <div className={left_styles.header} />
          <div className={left_styles.content_container}>
            <div className={left_styles.content_title}>
              <p>Welcome Journeyman</p>
            </div>
            <div className={left_styles.tutorial_container}>
              <div className={left_styles.tutorial_section}>
                <p className={left_styles.tutorial_title}>Master</p>
                <p className={left_styles.tutorial_title}>Journeyman</p>
                <p className={left_styles.tutorial_title}>Apprentice</p>
                <p className={left_styles.tutorial_title}>Merchant</p>
                <div className={left_styles.section_break} />
              </div>
              <div className={left_styles.tutorial_section}>
                <p className={left_styles.tutorial_title}>Discover Games</p>
              <div className={left_styles.games_content} />
                
              </div>
            </div>
=======
    <div className={left_styles.box}>
      <div className={left_styles.header} />
      <div className={left_styles.content_container}>
        <div className={left_styles.content_title}>
          <p>Welcome Journeyman</p>
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
>>>>>>> 1acadcb3604db295e964ba78a6e7be11336d3210
          </div>
      </div>
    </div>
  );
};

export const GuildhallRightMenu = () => {
  return (
<<<<<<< HEAD
    <>
      <div className={right_styles.menu}>
        <div className={right_styles.box}>
          <div className={right_styles.header} />
          <div className={right_styles.content_container}>
            <div className={right_styles.content_title}>
              <p>Notice Board</p>
            </div>
            <div className={right_styles.notices_container}>
              <ul>
                <li>Starknetdev.stark harvested resources on your Realm</li>
                <li>Starknetdev.stark mined your Asteroid</li>
                <li>Starknetdev.stark harvested resources on your Realm</li>
                <li>Starknetdev.stark mined your Asteroid</li>
                <li>Starknetdev.stark harvested resources on your Realm</li>
                <li>Starknetdev.stark mined your Asteroid</li>
                <li>Starknetdev.stark harvested resources on your Realm</li>
                </ul>
            </div>
          </div>
=======
    <div className={right_styles.box}>
      <div className={right_styles.header} />
      <div className={right_styles.content_container}>
        <div className={right_styles.content_title}>
          <p>Notice Board</p>
        </div>
        <div className={right_styles.notices_container}>
          <p>
            Starknetdev.stark harvested resources on your Realm
            Starknetdev.stark mined your Asteroid Starknetdev.stark harvested
            resources on your Realm Starknetdev.stark mined your Asteroid
            Starknetdev.stark harvested resources on your Realm
            Starknetdev.stark mined your Asteroid Starknetdev.stark harvested
            resources on your Realm
          </p>
>>>>>>> 1acadcb3604db295e964ba78a6e7be11336d3210
        </div>
      </div>
    </div>
  );
};
