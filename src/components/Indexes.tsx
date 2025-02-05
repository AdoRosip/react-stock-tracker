import { useEffect, useState } from "react";
import { mockQuote } from "../constants/mock";
import { batchRequestForIndexes } from "../api/api";
import { formatPercentage } from "../constants/utils";
import Loading from "./Loading";

const Indexes = () => {
  const [data, setData] = useState<any>(null); // ✅ Start with `null`
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    const fetchIndexQuotes = async () => {
      try {
        setLoadingState(true); // ✅ Set loading to true before fetching
        const fetchedData = await batchRequestForIndexes();
        console.log(fetchedData["DIA"].close);
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching index data", error);
      } finally {
        setLoadingState(false); // ✅ Stop loading after fetching
      }
    };
    fetchIndexQuotes();
  }, []);

  // ✅ Show loading when `loadingState` is true or `data` is empty
  if (loadingState || !data) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex self-center px-6 border-r border-[#c4c4c4cc] gap-4">
        <div className="flex align-center justify-center items-center gap-[0.5rem]">
          <p className="text-sm font-medium">DIA</p>
          <span className="weak-text text-xs">
            {Number(data["DIA"]?.close || 0).toFixed(2)}
          </span>
        </div>
        <div className="flex align-center justify-center items-center gap-[0.5rem]">
          <span
            className={
              mockQuote.d < 0
                ? "text-xs text-red-500"
                : "text-xs text-green-500"
            }
          >
            {mockQuote.d}
          </span>
          <span className="text-xs">
            {formatPercentage(data["DIA"]?.percent_change || 0)}
          </span>
        </div>
      </div>

      <div className="flex self-center px-6 border-r border-[#c4c4c4cc] gap-4">
        <div className="flex align-center justify-center items-center gap-[0.5rem]">
          <p className="text-sm font-medium">SPY</p>
          <span className="weak-text text-xs">
            {Number(data["SPY"]?.close || 0).toFixed(2)}
          </span>
        </div>
        <div className="flex align-center justify-center items-center gap-[0.5rem]">
          <span
            className={
              mockQuote.d < 0
                ? "text-xs text-red-500"
                : "text-xs text-green-500"
            }
          >
            {mockQuote.d}
          </span>
          <span className="text-xs">
            {formatPercentage(data["SPY"]?.percent_change || 0)}
          </span>
        </div>
      </div>

      <div className="flex self-center px-6 gap-4">
        <div className="flex align-center justify-center items-center gap-[0.5rem]">
          <p className="text-sm font-medium">QQQ</p>
          <span className="weak-text text-xs">
            {Number(data["QQQ"]?.close || 0).toFixed(2)}
          </span>
        </div>
        <div className="flex align-center justify-center items-center gap-[0.5rem]">
          <span
            className={
              mockQuote.d < 0
                ? "text-xs text-red-500"
                : "text-xs text-green-500"
            }
          >
            {mockQuote.d}
          </span>
          <span className="text-xs">
            {formatPercentage(data["QQQ"]?.percent_change || 0)}
          </span>
        </div>
      </div>
    </>
  );
};

export default Indexes;
