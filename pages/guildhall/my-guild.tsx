import Layout from "../../components/Layout";
import {
  GuildLeftMenu,
  GuildRightMenu,
} from "../../components/sideMenus/guildMenu";
import { MyGuild } from "../../components/container/guildhall/MyGuild";

export default function MyGuildsPage() {
  return (
    <div>
      <Layout
        leftSideMenu={<GuildLeftMenu />}
        rightSideMenu={<GuildRightMenu />}
        main={<MyGuild />}
      />
    </div>
  );
}
