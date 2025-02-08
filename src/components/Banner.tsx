import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
export default function Banner() {
  return (
    <div className="bg-secondary-bg flex flex justify-center items-center h-screen min-w-[120px] ">
      <Link to="/">
        <img src={logo} alt="Banner logo" />
      </Link>
    </div>
  )
}
