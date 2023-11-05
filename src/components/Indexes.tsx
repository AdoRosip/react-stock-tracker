import { mockQuote } from "../constants/mock"

const Indexes = () => {
  const formatPercentage = (num: number) => {
    return `${num.toFixed(2)}%`
  }

  return (
    <>
      <div className="flex self-center px-6 border-r border-[#c4c4c4cc] gap-4">
        <div className="flex align-center justify-center items-center gap-[0.5rem]">
          <p className="text-sm font-medium">SPY</p>
          <span className="weak-text text-xs	">{mockQuote.c}</span>
        </div>
        <div className="flex align-center justify-center items-center gap-[0.5rem]">
          <span
            className={
              mockQuote.d < 0
                ? "text-xs text-red-500"
                : "text-xs text-green-500"
            }
          >
            {" "}
            {mockQuote.d}
          </span>
          <span className="text-xs"> {formatPercentage(mockQuote.dp)}</span>
        </div>
      </div>
      <div className="flex self-center px-6 border-r border-[#c4c4c4cc] gap-4">
        <div className="flex align-center justify-center items-center gap-[0.5rem]">
          <p className="text-sm font-medium">SPY</p>
          <span className="weak-text text-xs	">{mockQuote.c}</span>
        </div>
        <div className="flex align-center justify-center items-center gap-[0.5rem]">
          <span
            className={
              mockQuote.d < 0
                ? "text-xs text-red-500"
                : "text-xs text-green-500"
            }
          >
            {" "}
            {mockQuote.d}
          </span>
          <span className="text-xs"> {formatPercentage(mockQuote.dp)}</span>
        </div>
      </div>
      <div className="flex self-center px-6 gap-4">
        <div className="flex align-center justify-center items-center gap-[0.5rem]">
          <p className="text-sm font-medium">SPY</p>
          <span className="weak-text text-xs	">{mockQuote.c}</span>
        </div>
        <div className="flex align-center justify-center items-center gap-[0.5rem]">
          <span
            className={
              mockQuote.d < 0
                ? "text-xs text-red-500"
                : "text-xs text-green-500"
            }
          >
            {" "}
            {mockQuote.d}
          </span>
          <span className="text-xs"> {formatPercentage(mockQuote.dp)}</span>
        </div>
      </div>
    </>
  )
}

export default Indexes
