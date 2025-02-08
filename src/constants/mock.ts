export const mockSearchResults = {
  count: 4,
  result: [
    {
      description: "APPLE INC",
      displaySymbol: "AAPL",
      symbol: "AAPL",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "AAPL.SW",
      symbol: "AAPL.SW",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "APC.BE",
      symbol: "APC.BE",
      type: "Common Stock",
    },
    {
      description: "APPLE INC",
      displaySymbol: "APC.DE",
      symbol: "APC.DE",
      type: "Common Stock",
    },
  ],
}

export const mockCompanyDetails = {
  country: "US",
  currency: "USD",
  exchange: "NASDAQ/NMS (GLOBAL MARKET)",
  ipo: "1980-12-12",
  marketCapitalization: 1415993,
  name: "Apple Inc",
  phone: "14089961010",
  shareOutstanding: 4375.47998046875,
  ticker: "AAPL",
  weburl: "https://www.apple.com/",
  logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
  finnhubIndustry: "Technology",
}

export const mockStockQuote = {
  c: 261.74,
  h: 263.31,
  l: 260.68,
  o: 261.07,
  pc: 259.45,
  t: 1582641000,
}

export const mockKeyStats = {
  series: {
    annual: {
      currentRatio: [
        {
          period: "2019-09-28",
          v: 1.5401,
        },
        {
          period: "2018-09-29",
          v: 1.1329,
        },
      ],
      salesPerShare: [
        {
          period: "2019-09-28",
          v: 55.9645,
        },
        {
          period: "2018-09-29",
          v: 53.1178,
        },
      ],
      netMargin: [
        {
          period: "2019-09-28",
          v: 0.2124,
        },
        {
          period: "2018-09-29",
          v: 0.2241,
        },
      ],
    },
  },
  metric: {
    "10DayAverageTradingVolume": 32.50147,
    "52WeekHigh": 310.43,
    "52WeekLow": 149.22,
    "52WeekLowDate": "2019-01-14",
    "52WeekPriceReturnDaily": 101.96334,
    beta: 1.2989,
  },
  metricType: "all",
  symbol: "AAPL",
}

export const mockHistoricalData = {
  c: [217.68, 221.03, 219.89, 220, 215, 268, 200],
  h: [222.49, 221.5, 220.94],
  l: [217.19, 217.1402, 218.83],
  o: [221.03, 218.55, 220],
  s: "ok",
  t: [1569297600, 1569384000, 1569470400, 1569470400, 1569470400, 1569470400],
  v: [33463820, 24018876, 20730608],
}

export const mockNews = [
  {
    category: "technology",
    datetime: 1596589501,
    headline:
      "Square surges after reporting 64% jump in revenue, more customers using Cash App",
    id: 5085164,
    image:
      "https://image.cnbcfm.com/api/v1/image/105569283-1542050972462rts25mct.jpg?v=1542051069",
    related: "",
    source: "CNBC",
    summary:
      "Shares of Square soared on Tuesday evening after posting better-than-expected quarterly results and strong growth in its consumer payments app.",
    url: "https://www.cnbc.com/2020/08/04/square-sq-earnings-q2-2020.html",
  },
  {
    category: "business",
    datetime: 1596588232,
    headline: "B&G Foods CEO expects pantry demand to hold up post-pandemic",
    id: 5085113,
    image:
      "https://image.cnbcfm.com/api/v1/image/106629991-1595532157669-gettyimages-1221952946-362857076_1-5.jpeg?v=1595532242",
    related: "",
    source: "CNBC",
    summary:
      '"I think post-Covid, people will be working more at home, which means people will be eating more breakfast" and other meals at home, B&G CEO Ken Romanzi said.',
    url: "https://www.cnbc.com/2020/08/04/bg-foods-ceo-expects-pantry-demand-to-hold-up-post-pandemic.html",
  },
  {
    category: "top news",
    datetime: 1596584406,
    headline:
      "Anthony Levandowski gets 18 months in prison for stealing Google self-driving car files",
    id: 5084850,
    image:
      "https://image.cnbcfm.com/api/v1/image/106648265-1596584130509-UBER-LEVANDOWSKI.JPG?v=1596584247",
    related: "",
    source: "CNBC",
    summary:
      "A U.S. judge on Tuesday sentenced former Google engineer Anthony Levandowski to 18 months in prison for stealing a trade secret from Google related to self-driving cars months before becoming the head of Uber Technologies Inc's rival unit.",
    url: "https://www.cnbc.com/2020/08/04/anthony-levandowski-gets-18-months-in-prison-for-stealing-google-self-driving-car-files.html",
  },
]

export const mockPeers = [
  "AAPL",
  "EMC",
  "HPQ",
  "DELL",
  "WDC",
  "HPE",
  "NTAP",
  "CPQ",
  "SNDK",
  "SEG",
]

export const mockQuote = {
  c: 443.37,
  d: -5.407,
  dp: -1.2048,
  h: 447.4783,
  l: 442.92,
  o: 447.14,
  pc: 448.777,
  t: 1694808000,
}
