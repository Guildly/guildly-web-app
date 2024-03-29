import Layout from "../../components/Layout";
import {
  GuildhallLeftMenu,
  GuildhallRightMenu,
} from "../../components/sideMenus/guildhallMenu";
import { Managing } from "../../components/container/guildhall/Managing";

export default function LeaderboardPage() {
  return (
    <div>
      <Layout
        leftSideMenu={<GuildhallLeftMenu />}
        leftSideMenuTitle={null}
        rightSideMenu={<GuildhallRightMenu />}
        rightSideMenuTitle={null}
        main={<Managing />}
      />
    </div>
  );
}
