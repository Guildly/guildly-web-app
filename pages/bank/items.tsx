import Layout from "../../components/Layout";
import {
  AccountsLeftMenu,
  AccountsRightMenu,
} from "../../components/sideMenus/accountsMenu";
import { Items } from "../../components/container/bank/Items";

export default function AccountsPage() {
  return (
    <div>
      <Layout
        leftSideMenu={<AccountsLeftMenu />}
        leftSideMenuTitle={null}
        rightSideMenu={<AccountsRightMenu />}
        rightSideMenuTitle={null}
        main={<Items />}
      />
    </div>
  );
}
