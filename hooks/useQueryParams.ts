import { useRouter, useSearchParams } from "next/navigation";
import qs from "qs";
import { useCallback } from "react";

export const useQueryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setQueryParams = useCallback(
    (newParams: Record<string, any>) => {
      const currentParams = qs.parse(searchParams.toString());

      const mergedParams = { ...currentParams, ...newParams };

      Object.keys(mergedParams).forEach((key) => {
        const value = mergedParams[key];
        if (value === undefined || value === null || value === "") {
          delete mergedParams[key];
        }
      });

      const queryString = qs.stringify(mergedParams, {
        addQueryPrefix: true,
      });

      router.replace(queryString || "?", { scroll: false });
    },
    [router, searchParams]
  );

  const getQueryParams = useCallback(() => {
    if (!searchParams) return {};

    return qs.parse(searchParams.toString(), {
      ignoreQueryPrefix: true,
    });
  }, [searchParams]);

  return { setQueryParams, getQueryParams };
};
