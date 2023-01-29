import Layout from "../../components/Layout";
import {
  GuildhallLeftMenu,
  GuildhallRightMenu,
} from "../../components/sideMenus/guildhallMenu";
import { Leaderboard } from "../../components/container/guildhall/Leaderboard";

export default function LeaderboardPage() {
  return (
    <div>
      <Layout
        leftSideMenu={<GuildhallLeftMenu />}
        rightSideMenu={<GuildhallRightMenu />}
        main={<Leaderboard />}
      />
    </div>
  );
}
