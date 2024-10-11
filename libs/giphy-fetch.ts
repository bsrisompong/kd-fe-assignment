import { GiphyFetch } from '@giphy/js-fetch-api';

import { GIPHY_SDK_KEY } from '@/config/constants';

console.log('GIPHY_SDK_KEY:', GIPHY_SDK_KEY);

export const gf = new GiphyFetch(GIPHY_SDK_KEY);

console.log('gf:', gf);
