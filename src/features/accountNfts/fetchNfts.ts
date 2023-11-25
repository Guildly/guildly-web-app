import { join } from "path";
import { AlchemyNfts } from "./model";
import { useQuery } from "@apollo/client";
import { getOwnedGuildItems } from "../../hooks/graphql/queries";
import { indexAddress, padAddress } from "../../utils/address";

const baseUrl = process.env.NEXT_PUBLIC_NFT_API_URL!;

export const fetchNfts = async (address: string): Promise<AlchemyNfts> => {
  const params = new URLSearchParams({
    owner: address,
    withMetadata: "true",
    pageSize: "100",
  });
  const response = await fetch(join(baseUrl, `?${params}`));
  return await response.json();
};

export const getOwnedTokens = ({ tokens, guild, account }: any) => {
  const {
    loading: accountGuildItemsLoading,
    error: accountGuildItemsError,
    data: accountGuildItemsData,
    fetchMore: accountGuildItemsFetchMore,
  } = useQuery(getOwnedGuildItems, {
    variables: {
      guild: indexAddress(guild),
      account: account,
    },
  });
  const accountGuildTokens: any[] = [];
  if (accountGuildItemsData) {
    for (var i = 0; i < accountGuildItemsData.event.length; i++) {
      const contractAddress = accountGuildItemsData.event[i].arguments.find(
        (obj: any) => {
          return obj.name === "token";
        }
      );
      const tokenId = accountGuildItemsData.event[i].arguments.find(
        (obj: any) => {
          return obj.name === "token_id";
        }
      );
      if (accountGuildItemsData.event[i].name == "deposited") {
        accountGuildTokens[i] = {
          contract_address: padAddress(contractAddress.value),
          token_id: BigInt(tokenId.value.low).toString(),
        };
      } else {
        const index = accountGuildTokens.findIndex((obj) => {
          obj.contract_address === padAddress(contractAddress.value) &&
            obj.token_id === BigInt(tokenId.value.low).toString();
        });
        accountGuildTokens.splice(index, 1);
      }
    }
    const filteredTokens = [];
    for (var i = 0; i < accountGuildTokens.length; i++) {
      const filtered = tokens.filter((obj: any) => {
        return (
          obj.contract_address === accountGuildTokens[i].contract_address &&
          obj.token_id === accountGuildTokens[i].token_id
        );
      });
      filtered.length > 0 ? (filteredTokens[i] = filtered[0]) : null;
    }
    return filteredTokens;
  }
};
