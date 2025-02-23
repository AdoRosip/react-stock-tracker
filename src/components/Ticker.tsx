import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { getQuote } from "../api/api";

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
      console.log("WebSocket connected");
      socket.send(
        JSON.stringify({ type: "subscribe", symbol: "BINANCE:BTCUSDT" })
      );
    };

    socket.onmessage = (event) => {
      const response = JSON.parse(event.data);

      if (response.type === "ping") return; // Ignore pings

      console.log("Trade Data Received:", response);

      if (response.type === "trade" && response.data?.length > 0) {
        const latestTrade = response.data[0]; // Get the first trade
        setQuote(latestTrade); // Update state with latest trade
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => {
      if (socket.readyState === 1) {
        // Ensure socket is open before sending
        socket.send(
          JSON.stringify({ type: "unsubscribe", symbol: "BINANCE:BTCUSDT" })
        );
      }
      socket.close();
    };
  }, [id]); // Re-run when `id` changes

  useEffect(() => {
    console.log("Updated Quote:", quote);
  }, [quote]); // ✅ Logs whenever `quote` updates

  return (
    <div className="flex flex items-center">
      <span className="text-primary-text text-4xl">${quote?.p}</span>
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
