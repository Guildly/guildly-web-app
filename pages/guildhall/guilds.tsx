import Layout from "../../components/Layout";
import {
  GuildSearchLeftMenu,
  GuildSearchRightMenu,
} from "../../components/sideMenus/guildSearchMenu";
import { Guilds } from "../../components/container/guildhall/Guilds";

export default function GuildsPage() {
  return (
    <div>
      <Layout
        leftSideMenu={<GuildSearchLeftMenu />}
        rightSideMenu={<GuildSearchRightMenu />}
        main={<Guilds />}
      />
    </div>
  );
}
