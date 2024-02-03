import fetchURL from "../../utils/fetchURL";
import { FetchResult, SimpleAdapter } from "../../adapters/types";
import { CHAIN } from "../../helpers/chains";

const URL = "https://aftermath.finance/api/pools/volume-24hrs";

const fetch = async (timestamp: number): Promise<FetchResult> => {
  const dailyVolume = (
    await fetchURL(`${URL}`)
  ).data;

  return {
    dailyVolume,
    timestamp,
  };
};

const adapter: SimpleAdapter = {
  adapter: {
    [CHAIN.SUI]: {
      fetch,
      start: 1689811200
    },
  },
};

export default adapter;
