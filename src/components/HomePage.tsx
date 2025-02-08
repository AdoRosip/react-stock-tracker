import Banner from "./Banner"
import { Search } from "./Search"
const HomePage = () => {
  return (
    <div className="grid grid-cols-[120px,1fr] grid-rows-1 col-gap-0 row-gap-0 bg-primary-bg gap-10 ">
      <Banner></Banner>
      <div className="flex items-center justify-center h-screen focus:border-none pr-35px">
        <Search></Search>
      </div>
    </div>
  )
}

export default HomePage
