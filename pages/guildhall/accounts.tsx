import Layout from "../../components/Layout";
import {
  AccountsLeftMenu,
  AccountsRightMenu,
} from "../../components/sideMenus/accountsMenu";
import { Accounts } from "../../components/container/guildhall/Accounts";

export default function AccountsPage() {
  return (
    <div>
      <Layout
        leftSideMenu={<AccountsLeftMenu />}
        leftSideMenuTitle={null}
        rightSideMenu={<AccountsRightMenu />}
        rightSideMenuTitle={null}
        main={<Accounts />}
      />
    </div>
  );
}
