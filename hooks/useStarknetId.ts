import { useEffect, useState } from 'react';
import { number } from "starknet";

export const useStarkNetId = (addr: string) => {
  const [starknetId, setStarknetId] = useState<string | null>(null);

  useEffect(() => {
    if (addr) {
      fetch(`https://goerli.app.starknet.id/api/indexer/addr_to_domain?addr=${number.toBN(addr).toString()}`)
        .then((response) => response.json())
        .then((a) => setStarknetId(a.domain as string));
    }
  }, [addr]);

  return {
    starknetId,
  };
};