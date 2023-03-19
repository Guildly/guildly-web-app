import join from "url-join";

import { AspectNft, AspectNftAsset } from "./aspect.model";
import { GetOwnedTokens } from "./aspect.model";
import { useQuery } from "@apollo/client";
import { getOwnedGuildItems } from "../../hooks/graphql/queries";
import { indexAddress, padAddress } from "../../utils/address";
import { number } from "starknet";

const baseUrl = "https://api-testnet.aspect.co/api";

const assetsExt = "/v0/assets";
const assetExt = "/v0/asset";

export const fetchAspectNfts = async (address: string): Promise<AspectNft> => {
  const params = new URLSearchParams({ owner_address: address });
  const response = await fetch(join(join(baseUrl, assetsExt), `?${params}`));
  return await response.json();
};

export const fetchAspectNft = async (contractAddress: string, tokenId: string): Promise<AspectNftAsset> => {
  // const params = new URLSearchParams({ contract_address: contractAddress, token_id: tokenId});
  const response = await fetch(join(join(baseUrl, assetExt), `/${contractAddress}/${tokenId}`));
  return await response.json();
};

export const getNftPicture = ({
  image_uri,
  image_url_copy,
}: AspectNftAsset) => {
  if (image_uri && image_url_copy) {
    if (!image_url_copy.startsWith("ipfs://")) {
      return image_url_copy;
    }
    if (!image_uri.startsWith("ipfs://")) {
      return image_uri;
    }
  }
  if (image_url_copy) {
    return image_url_copy;
  }
  if (image_uri) {
    return image_uri
  }
  return "/placeholder-image.png"
};

export const getOwnedTokens = ({ tokens, guild, account }: GetOwnedTokens) => {
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
      const tokenId = accountGuildItemsData.event[i].arguments.find((obj: any) => {
        return obj.name === "token_id";
      });
      if (accountGuildItemsData.event[i].name == "deposited") {
        accountGuildTokens[i] = {
          contract_address: padAddress(contractAddress.value),
          token_id: number.toBN(tokenId.value.low).toString(),
        };
      } else {
        const index = accountGuildTokens.findIndex((obj) => {
          obj.contract_address === padAddress(contractAddress.value) &&
            obj.token_id === number.toBN(tokenId.value.low).toString();
        });
        accountGuildTokens.splice(index, 1);
      }
    }
    const filteredTokens = [];
    for (var i = 0; i < accountGuildTokens.length; i++) {
      const filtered = tokens.filter((obj) => {
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
