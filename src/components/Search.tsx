import { useState } from "react"
import { listOfStocks } from "../constants/stockData.ts"
import { Link, useParams } from "react-router-dom"
// interface stockDataI {
//   currency?: string
//   description?: string
//   displaySymbol?: string
//   figi?: string
//   isin?: null | string | undefined
//   mic?: string
//   shareClassFIGI?: string
//   symbol?: string
//   symbol2?: string
//   type?: string
// }

export const Search = () => {
  const [userInput, setUserInput] = useState("")
  const { id } = useParams()

  const filteredStocks = listOfStocks.filter(
    (stock) =>
      stock.description?.toLowerCase().includes(userInput.toLowerCase()) ||
      stock.displaySymbol?.toLowerCase().includes(userInput.toLowerCase())
  )

  function handleUserInput(event: React.FormEvent<HTMLInputElement>) {
    setUserInput(event.currentTarget.value)
  }
  return (
    <div
      className={
        id ? "w-full relative flex gap-4 " : "w-[95%] relative flex gap-4 pr-9"
      }
    >
      <input
        type="text"
        placeholder={id ? id : "Search for a stock..."}
        onChange={handleUserInput}
        className={`bg-primary-bg w-full  focus:outline-none leading-[3rem] border-b-2 border-[#b3b3b3] border-solid text-4xl`}
        value={userInput}
      />
      {userInput.length > 0 && (
        <div className="w-full max-h-60 mt-4 overflow-y-scroll absolute top-1/2 z-10 flex flex-col rounded-xl bg-white shadow-3xl mt-7 max-h-80 overflow-auto scroll-bar ">
          {filteredStocks.length > 0 ? (
            <>
              <div className="text-primary-text pl-2 text-sm p-1 pl-3 border-b border-[#cccccc] 	">
                Stock
              </div>
              {filteredStocks.map((stock) => (
                <Link
                  to={`/${stock.displaySymbol}`}
                  className="text-primary-text pl-2 hover:bg-secondary-bg hover:rounded-xl font-thin p-1 text-xl"
                  key={stock.symbol}
                >
                  {`${stock.displaySymbol} - ${stock.description}`}
                </Link>
              ))}
            </>
          ) : (
            <div className="text-2xl text-primary-text p-3">
              No results found...
            </div>
          )}
        </div>
      )}
    </div>
  )
}
