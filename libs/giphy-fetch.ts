import { GiphyFetch } from "@giphy/js-fetch-api";
import { GIPHY_SDK_KEY } from "@/config/constants";

export const gf = new GiphyFetch(GIPHY_SDK_KEY);
