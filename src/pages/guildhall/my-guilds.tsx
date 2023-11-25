import Layout from "../../components/Layout";
import {
  GuildLeftMenu,
  GuildRightMenu,
} from "../../components/sideMenus/guildMenu";
import { MyGuilds } from "../../components/container/guildhall/MyGuilds";

export default function MyGuildsPage() {
  return (
    <div>
      <Layout
        leftSideMenu={<GuildLeftMenu />}
        leftSideMenuTitle={null}
        rightSideMenu={<GuildRightMenu />}
        rightSideMenuTitle={null}
        main={<MyGuilds />}
      />
    </div>
  );
}
