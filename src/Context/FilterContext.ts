import { createContext } from "react";

type ChartKey = "1H" | "1D" | "1W" | "1M";

const defaultContext: FilterContextType = {
  filter: "1W",
  setFilter: () => {},
};

type FilterContextType = {
  filter: ChartKey;
  setFilter?: React.Dispatch<React.SetStateAction<ChartKey>>;
};
export const FilterContext = createContext<FilterContextType>(defaultContext);
