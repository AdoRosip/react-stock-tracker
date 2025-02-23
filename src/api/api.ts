const basePath = "https://finnhub.io/api/v1";
const alphaBasePath = "https://www.alphavantage.co/query";
const twelveDataPrefix = "https://api.twelvedata.com";
export const getAllStocks = async () => {
  const url = `${basePath}/stock/symbol?exchange=US&mic=XNYS&securityType=Common%20Stock&token=${
    import.meta.env.VITE_FINNHUB
  }`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

export const getQuote = async (symbol: string | undefined) => {
  const url = `${basePath}/quote?symbol=${symbol}&token=${
    import.meta.env.VITE_FINNHUB
  }`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

export const getCompanyOverview = async (symbol: string | undefined) => {
  const url = `${alphaBasePath}?function=OVERVIEW&symbol=${symbol}&apikey=${
    import.meta.env.VITE_ALPHA_VANTAGE_API_KEY
  }`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

export const fetchHistoricalData = async (
  stockSymbol: string | undefined,
  interval: string | number
) => {
  const url = `https://api.twelvedata.com/time_series?symbol=${stockSymbol}&interval=${interval}&apikey=${
    import.meta.env.VITE_TWELVE_DATA_API_KEY
  }`;

  const response = await fetch(url);
  const jsonResponse = await response.json();
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return jsonResponse;
};

export const getPeers = async (symbol: string | undefined) => {
  const url = `${basePath}/stock/peers?symbol=${symbol}&token=${
    import.meta.env.VITE_FINNHUB
  }`;

  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};

export const getNews = async () => {
  const url = `${basePath}/news?category=general&token=${
    import.meta.env.VITE_FINNHUB
  }`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};

export const batchRequestForIndexes = async () => {
  const url = `${twelveDataPrefix}/quote?symbol=SPY,DIA,QQQ&interval=1min&apikey=${
    import.meta.env.VITE_TWELVE_DATA_API_KEY
  }`;

  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }

  const final = await response.json();
  return final;
};
