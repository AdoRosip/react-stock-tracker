import React, { useState, useEffect, useContext } from "react";
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  LineChart,
  CartesianGrid,
  Line,
} from "recharts";
import { useParams } from "react-router-dom";
import { fetchHistoricalData } from "../api/api";
import { FilterContext } from "../Context/FilterContext";
import {
  mapFilterToInterval,
  formatStockData,
  formatFor1H,
  formatFor1D,
} from "../constants/utils";
import { ChartKey, formattedTimeseriesValueType } from "../constants/contracts";

const Chart: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<formattedTimeseriesValueType[] | null>(null);
  const { filter } = useContext(FilterContext);

  useEffect(() => {
    const updateChartData = async () => {
      try {
        const result = await fetchHistoricalData(
          id,
          mapFilterToInterval(filter)
        );

        const latestDates =
          filter === "1H"
            ? formatFor1H(result)
            : filter === "1D"
            ? formatFor1D(result)
            : result;
        const formattedData = formatStockData(
          latestDates,
          mapFilterToInterval(filter) as ChartKey
        );

        setData(formattedData);
      } catch (error) {
        setData(null);
      }
    };

    updateChartData();
  }, [id, filter]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data || []}>
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
        <XAxis
          dataKey="datetime"
          tickFormatter={(tick) => tick.slice(5)}
        />{" "}
        {/* MM-DD */}
        <YAxis
          domain={[
            () =>
              Math.floor(Math.min(...(data || []).map((d) => d.low)) * 0.99),
            () =>
              Math.ceil(Math.max(...(data || []).map((d) => d.high)) * 1.01),
          ]}
          tickFormatter={(tick) => Math.round(tick).toString()} // ✅ Rounds tick values
        />
        <Tooltip formatter={(value) => `$${value}`} />
        <Line
          type="monotone"
          dataKey="close"
          stroke="#858383"
          strokeWidth={1}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
