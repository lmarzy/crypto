interface DataInterface {
  name: string;
  symbol: string;
  price: string;
  price_BNB: string;
}

export interface CoinPriceModel {
  updated_at: EpochTimeStamp;
  data: DataInterface;
}
