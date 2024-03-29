import Layout from "../../../components/Layout";
import {
  AccountsLeftMenu,
  AccountsRightMenu,
} from "../../../components/sideMenus/accountsMenu";
import { Account } from "../../../components/container/guildhall/Account";

export default function AccountPage() {
  return (
    <Layout
      leftSideMenu={<AccountsLeftMenu />}
      leftSideMenuTitle={null}
      rightSideMenu={<AccountsRightMenu />}
      rightSideMenuTitle={null}
      main={<Account />}
    />
  );
}
