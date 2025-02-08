import { Link, useParams } from "react-router-dom"
import { getPeers } from "../api/api"
import { useEffect, useState } from "react"
const Peers = () => {
  const { id } = useParams()
  const [peers, setPeers] = useState([])
  useEffect(() => {
    const fetchQuote = async () => {
      const response = await getPeers(id)
      setPeers(response)
    }

    fetchQuote()
  }, [id])

  return (
    <div className="py-6 px-5 border-b border-[#c4c4c480] ">
      <h2 className="text-secondary-text text-base text-base my-2 font-roboto">
        Top Peers
      </h2>
      <div className="flex flex-wrap gap-2 justify-center ">
        {peers.map((peer) => (
          <div
            key={peer}
            className="border rounded-lg outline-1 px-1 hover:bg-[#b3b3b380]"
          >
            <Link to={`/${peer}`} key={peer}>
              {peer}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Peers
