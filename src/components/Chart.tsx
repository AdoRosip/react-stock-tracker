import React, { useState, useEffect, useContext } from "react";
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  LineChart,
  CartesianGrid,
  Legend,
  Line,
} from "recharts";
import { useParams } from "react-router-dom";
import { fetchHistoricalData } from "../api/api";
import { FilterContext } from "../Context/FilterContext";
import {
  mapFilterToInterval,
  formatDatetime,
  getLatestDateData,
  formatStockData,
} from "../constants/utils";
interface ChartData {
  value: string;
  date: string;
}

interface CharReturnI {
  c: number[];
  t: number[];
}

const Chart: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<ChartData[]>([]);
  const { filter } = useContext(FilterContext);

  useEffect(() => {
    const updateChartData = async () => {
      try {
        const result = await fetchHistoricalData(
          id,
          mapFilterToInterval(filter)
        );

        const latestDates =
          filter === "1H" ? getLatestDateData(result) : result;

        const formattedData = formatStockData(
          latestDates,
          mapFilterToInterval(filter)
        );

        setData(formattedData);
      } catch (error) {
        setData([]);
      }
    };

    updateChartData();
  }, [id, filter]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#312e81" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#312e81" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
        <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
        <XAxis dataKey="datetime" />
        <YAxis
          domain={[
            () => Math.min(...data.map((d) => d.low)),
            () => Math.max(...data.map((d) => d.high)),
          ]}
          tickFormatter={(tick) => Math.round(tick)}
        />

        <Area
          type="monotone"
          dataKey="close"
          stroke="#312e81"
          fill="url(#chartColor)"
          strokeWidth={1.5}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
