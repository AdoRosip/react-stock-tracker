import { mockKeyStats } from "../constants/mock"
const KeyStats = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-light text-base mt-2 font-roboto mb-3.5">
        Key Statistics
      </h2>
      <div className="custom-grid">
        <div className="flex justify-between">
          <span className="text-sm font-bold">
            100 Day Average Trading Volume
          </span>
          <span>{mockKeyStats.metric["10DayAverageTradingVolume"]}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-bold">52 Week High</span>
          <span>{mockKeyStats.metric["52WeekHigh"]}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-bold">52 Week Low</span>

          <span>{mockKeyStats.metric["52WeekLow"]}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-bold">Previous Close</span>
          <span>142.80</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-bold">Volume Traded</span>
          <span>2.8m</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-bold">P/E Ratio</span>
          <span>66.41</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-bold">Market Cap</span>
          <span>134.52 b</span>
        </div>
      </div>
    </div>
  )
}

export default KeyStats
