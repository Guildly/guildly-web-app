import Layout from "../components/Layout";
import {
  GuildSearchLeftMenu,
  GuildSearchRightMenu,
} from "../components/sideMenus/guildSearchMenu";
import { Search } from "../components/container/Search";

export default function GuildsPage() {
  return (
    <div>
      <Layout
        leftSideMenu={<GuildSearchLeftMenu />}
        leftSideMenuTitle="Trending"
        rightSideMenu={<GuildSearchRightMenu />}
        rightSideMenuTitle="New"
        main={<Search />}
      />
    </div>
  );
}
