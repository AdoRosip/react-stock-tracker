const basePath = "https://finnhub.io/api/v1"
const alphaBasePath = "https://www.alphavantage.co/query"
export const getAllStocks = async () => {
  const url = `${basePath}/stock/symbol?exchange=US&mic=XNYS&securityType=Common%20Stock&token=${
    import.meta.env.VITE_API_KEY
  }`
  const response = await fetch(url)

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`
    throw new Error(message)
  }

  return await response.json()
}

export const getQuote = async (symbol: string | undefined) => {
  const url = `${basePath}/quote?symbol=${symbol}&token=${
    import.meta.env.VITE_API_KEY
  }`
  const response = await fetch(url)

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`
    throw new Error(message)
  }

  return await response.json()
}

export const getCompanyOverview = async (symbol: string | undefined) => {
  const url = `${alphaBasePath}?function=OVERVIEW&symbol=${symbol}&apikey=${
    import.meta.env.VITE_ALPHA_API_KEY
  }`
  const response = await fetch(url)

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`
    throw new Error(message)
  }

  return await response.json()
}

export const fetchHistoricalData = async (
  stockSymbol: string | undefined,
  resolution: string | number,
  from: number,
  to: number
) => {
  const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${
    import.meta.env.VITE_API_KEY
  }`

  const response = await fetch(url)

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`
    throw new Error(message)
  }

  return await response.json()
}

export const getPeers = async (symbol: string | undefined) => {
  const url = `${basePath}/stock/peers?symbol=${symbol}&token=${
    import.meta.env.VITE_API_KEY
  }`

  const response = await fetch(url)

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`
    throw new Error(message)
  }
  return await response.json()
}

export const getNews = async () => {
  const url = `${basePath}/news?category=general&token=${
    import.meta.env.VITE_API_KEY
  }`
  const response = await fetch(url)

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`
    throw new Error(message)
  }
  return await response.json()
}
