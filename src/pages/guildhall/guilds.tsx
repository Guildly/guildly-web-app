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
        leftSideMenuTitle="Trending"
        rightSideMenu={<GuildSearchRightMenu />}
        rightSideMenuTitle="New"
        main={<Guilds />}
      />
    </div>
  );
}
