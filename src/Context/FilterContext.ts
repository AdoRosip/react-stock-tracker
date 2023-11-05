import { createContext } from "react"

type ChartKey = "1D" | "1W" | "1M" | "1Y"

const defaultContext: FilterContextType = {
  filter: "1W",
  setFilter: () => {},
}

type FilterContextType = {
  filter: ChartKey
  setFilter?: React.Dispatch<React.SetStateAction<ChartKey>>
}
export const FilterContext = createContext<FilterContextType>(defaultContext)
