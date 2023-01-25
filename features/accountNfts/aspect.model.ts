export interface AspectNftAssetOwner {
  account_address: string;
  quantity: string;
}

export interface AspectNftAssetContract {
  banner_image_url?: string;
  contract_address: string;
  image_url?: string;
  name: string;
  symbol: string;
  schema: string;
  name_custom?: string;
}

export interface AspectNftAsset {
  animation_uri?: string;
  animation_url_copy?: string;
  aspect_link: string;
  attributes?: any;
  best_bid_order?: string;
  best_list_order?: string;
  contract: AspectNftAssetContract;
  contract_address: string;
  description?: string;
  external_uri?: string;
  id: string;
  image_blur_hash?: string;
  image_medium_url_copy?: string;
  image_small_url_copy?: string;
  image_uri?: string;
  image_url_copy?: string;
  name?: string;
  owner: AspectNftAssetOwner;
  token_id: string;
  token_uri?: string;
}

export interface AspectNft {
  assets: AspectNftAsset;
}

export interface GetOwnedTokens {
  tokens: AspectNftAsset[];
  guild: string;
  account: string;
}
