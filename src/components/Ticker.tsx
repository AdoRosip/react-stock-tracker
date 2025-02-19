import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getQuote } from "../api/api";

interface quoteI {
  c: number;
  d: number;
  dp: number;
  h: number;
  l: number;
  o: number;
  pc: number;
  t: number;
}

const Ticker = () => {
  const { id } = useParams();
  const [quote, setQuote] = useState<quoteI | any>();

  useEffect(() => {
    if (!id) return;

    const socket = new WebSocket(
      "wss://ws.finnhub.io?token=cjeusghr01qgod9att50cjeusghr01qgod9att5g"
    );

    socket.onopen = () => {
      console.log("WebSocket Connected");
      socket.send(JSON.stringify({ type: "subscribe", symbol: "AAPL" }));
    };

    socket.onmessage = (event) => {
      setQuote(JSON.parse(event.data)); // Ensure proper parsing
    };

    socket.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket Disconnected");
    };

    return () => {
      socket.close(); // Cleanup WebSocket on component unmount or id change
    };
  }, [id]); // Re-run when `id` changes

  return (
    <div className="flex flex items-center">
      <span className="text-primary-text text-4xl">${quote?.c}</span>
      <div className="flex gap-[5px] text-sm self-end mb-[10px]">
        <span
          className={`${
            quote?.d && quote.d > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          ${quote?.d ?? "N/A"}
        </span>
        <span
          className={`${
            quote?.dp && quote.dp > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {quote?.dp ?? "N/A"}%
        </span>
      </div>
    </div>
  );
};

export default Ticker;
