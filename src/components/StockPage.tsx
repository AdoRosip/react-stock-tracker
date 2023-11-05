import Banner from "./Banner"
import { Search } from "./Search"
import "../App.css"
import News from "./News"
import Peers from "./Peers"
import CompanyOverview from "./CompanyOverview"
import Chart from "./Chart"
import KeyStats from "./KeyStats"
import Indexes from "./Indexes"
import Ticker from "./Ticker"
import { chartConfig } from "../constants/config"
import ChartFilter from "./ChartFilter"
import { useState } from "react"
import { FilterContext } from "../Context/FilterContext"
type ChartKey = "1D" | "1W" | "1M" | "1Y"

const StockPage = () => {
  const [filter, setFilter] = useState<ChartKey>("1W")
  return (
    <div className="flex flex-row text-stock-page gap-2 bg-primary-bg">
      <div className="w-[120px]">
        <Banner />
      </div>
      <div className="parent-mid flex flex-col flex-auto">
        <div className="h-20 pt-5 flex justify-between	">
          <Search />

          <Ticker />

          {/* bg color */}
        </div>
        <div className="flex-grow max-h-[calc(100%-400px)] p-4 flex flex-row">
          <FilterContext.Provider value={{ filter, setFilter }}>
            <Chart />
            {
              <ul>
                {Object.keys(chartConfig).map((item) => (
                  <li key={item}>
                    <ChartFilter
                      text={item}
                      active={filter === item}
                      onClick={() => setFilter(item as ChartKey)}
                    />
                  </li>
                ))}
              </ul>
            }
          </FilterContext.Provider>
        </div>
        <div className="h-64 pt-6 pl-7">
          <KeyStats />
        </div>
        <div className="h-12 flex flex-row justify-center	border-t border-[#c4c4c4cc] flex-auto">
          <Indexes />
        </div>
      </div>
      <div className="parent-overview max-w-[22rem]  px-3.5	py-5.5 bg-primary-bg ">
        <CompanyOverview />
        <Peers />
        <News />
      </div>
    </div>
  )
}

export default StockPage
