import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getQuote } from "../api/api"

interface quoteI {
  c: number
  d: number
  dp: number
  h: number
  l: number
  o: number
  pc: number
  t: number
}

const Ticker = () => {
  const { id } = useParams()
  const [quote, setQuote] = useState<quoteI>()
  useEffect(() => {
    const fetchQuote = async () => {
      const response = await getQuote(id)
      setQuote(response)
    }

    fetchQuote()
  }, [id])
  return (
    <div className="flex flex items-center">
      <span className="text-primary-text text-4xl">${quote?.c}</span>
    </div>
  )
}

export default Ticker
