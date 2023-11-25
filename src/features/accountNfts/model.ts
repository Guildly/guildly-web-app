interface AlchemyNftAssetContract {
  address: string;
}

interface AlchemyNftAssetId {
  tokenId: string;
  tokenMetadata: {
    tokenType: string;
  };
}

interface AlchemyNftAssetTokenUri {
  gateway: string;
  raw: string;
}

interface AlchemyNftAssetMedia {
  gateway: string;
  raw: string;
}

export interface AlchemyNftAsset {
  contract: AlchemyNftAssetContract;
  id: AlchemyNftAssetId;
  balance: string;
  title: string;
  description: string;
  tokenUri: AlchemyNftAssetTokenUri;
  media: AlchemyNftAssetMedia[];
  metedata: any;
  timeLastUpdated: Date;
  contractMetadata: any;
}

export interface AlchemyNfts {
  blockHash: string;
  ownedNfts: AlchemyNftAsset[];
  pageKey: string;
  totalCount: number;
}
