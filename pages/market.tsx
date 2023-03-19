import React, { useState } from "react";
import Layout from "../components/Layout";
import { Market } from "../components/container/Market";
import {
  MarketLeftMenu,
  MarketRightMenu,
} from "../components/sideMenus/marketMenu";

export default function MarketPage() {
  const [tab, setTab] = useState("Guild");
  const [tokenStandardFilter, setTokenStandardFilter] = useState("");
  const [gameFilter, setGameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [addressFilter, setAddressFilter] = useState("");

  const props = {
    tab,
    setTab,
    tokenStandardFilter,
    setTokenStandardFilter,
    gameFilter,
    setGameFilter,
    genreFilter,
    setGenreFilter,
    addressFilter,
    setAddressFilter,
  };

  return (
    <Layout
      leftSideMenu={<MarketLeftMenu {...props} />}
      leftSideMenuTitle="Filters"
      rightSideMenu={<MarketRightMenu />}
      rightSideMenuTitle="Ranks"
      main={<Market />}
    />
  );
}
