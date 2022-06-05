import { request } from './request';
import { CoinPriceModel } from '@crypto/models';

export const getCoinPrice = (address: string): Promise<CoinPriceModel> =>
  request<CoinPriceModel>('https://api.pancakeswap.info/api/v2/tokens', address);
