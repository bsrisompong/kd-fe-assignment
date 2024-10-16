import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { GifsResult, SearchOptions } from "@giphy/js-fetch-api";

import { gf } from "@/libs/giphy-fetch";

interface Payload {
  term: string;
  options: SearchOptions;
}

const fetchTrendingGifts = async ({ term, options }: Payload): Promise<GifsResult> => {
  const response = await gf.search(term, options);
  return response;
};

export const useGetSearchGifts = (
  payload: Payload,
  options?: UseQueryOptions<GifsResult, Error>
): UseQueryResult<GifsResult, Error> =>
  useQuery({
    queryKey: ["trending-gifts", Object.values(payload)],
    queryFn: () => fetchTrendingGifts(payload),
    ...options,
  });

export const fetchSearchGiftsInfinite = async ({
  term,
  options,
}: Payload): Promise<{ rows: GifsResult; nextOffset: number }> => {
  const { offset = 0, limit = 10 } = options;
  const response = await gf.search(term, options);
  return { rows: response, nextOffset: offset + limit };
};
