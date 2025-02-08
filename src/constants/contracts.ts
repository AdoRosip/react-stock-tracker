export interface timeseriesValueType {
  datetime: string; // Date in string format (ISO or standard format)
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string; // Converting volume to a number for consistency
}

export interface StockMeta {
  symbol: string;
  interval: string;
  currency: string;
  exchange_timezone: string;
  exchange: string;
  mic_code: string;
  type: string;
}

export interface timeseriesApiResponseType {
  meta: StockMeta;
  values: timeseriesValueType[];
  status: string;
}

export type ChartKey = "1H" | "1D" | "1W" | "1M";

export interface formattedTimeseriesValueType {
  datetime: any;
  open: number;
  high: number;
  low: number;
  close: string;
  volume: number;
}
