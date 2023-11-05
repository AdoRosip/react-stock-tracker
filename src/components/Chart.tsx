import React, { useState, useEffect, useContext } from "react"
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
} from "recharts"
import { useParams } from "react-router-dom"
import { fetchHistoricalData } from "../api/api"
import { FilterContext } from "../Context/FilterContext"
import {
  convertDateToUnixTimestamp,
  unixTimeStampToDate,
  createDate,
} from "../constants/utils"
import { chartConfig } from "../constants/config"

interface ChartData {
  value: string
  date: string
}

interface CharReturnI {
  c: number[]
  t: number[]
}

const Chart: React.FC = () => {
  const { id } = useParams()
  const [data, setData] = useState<ChartData[]>([])
  const { filter } = useContext(FilterContext)

  const formatData = (data: CharReturnI): ChartData[] => {
    return data.c.map((item: number, index: number) => {
      return {
        value: item.toFixed(2),
        date: unixTimeStampToDate(data.t[index]),
      }
    })
  }

  useEffect(() => {
    const getDataRange = () => {
      const { days, weeks, months, years } = chartConfig[filter]

      const endDate = new Date()
      const startDate = createDate(endDate, -days, -weeks, -months, -years)

      const startTimeStampUnix = convertDateToUnixTimestamp(startDate)
      const endTimeStampUnix = convertDateToUnixTimestamp(endDate)

      return { startTimeStampUnix, endTimeStampUnix }
    }

    const updateChartData = async () => {
      try {
        const { startTimeStampUnix, endTimeStampUnix } = getDataRange()
        const resolution = chartConfig[filter].resolution

        const result = await fetchHistoricalData(
          id,
          resolution,
          startTimeStampUnix,
          endTimeStampUnix
        )

        setData(formatData(result))
      } catch (error) {
        setData([])
      }
    }
    updateChartData()
  }, [id, filter])

  return (
    <ResponsiveContainer>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#312e81" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#312e81" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#312e81"
          fill="url(#chartColor)"
          fillOpacity={1}
          strokeWidth={0.5}
        />
        <XAxis dataKey="date" />
        <YAxis domain={["dataMin", "dataMax"]} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default Chart
