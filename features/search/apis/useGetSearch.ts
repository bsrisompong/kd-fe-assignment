import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { GifsResult, TrendingOptions } from "@giphy/js-fetch-api";

import { gf } from "@/libs/giphy-fetch";

const fetchTrendingGifts = async (payload: TrendingOptions): Promise<GifsResult> => {
  const response = await gf.trending(payload);
  return response;
};

export const useGetTrendingGifts = (
  payload: TrendingOptions,
  options?: UseQueryOptions<GifsResult, Error>
): UseQueryResult<GifsResult, Error> =>
  useQuery({
    queryKey: ["trending-gifts", Object.values(payload)],
    queryFn: () => fetchTrendingGifts(payload),
    ...options,
  });
