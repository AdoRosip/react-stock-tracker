export function timeAgo(timestamp: number) {
  const now = Date.now() / 1000; // current time in seconds
  let diff = now - timestamp;

  const secondsInMinute = 60;
  const secondsInHour = secondsInMinute * 60;
  const secondsInDay = secondsInHour * 24;
  const secondsInWeek = secondsInDay * 7;
  const secondsInMonth = secondsInDay * 30.44; // average days in month
  const secondsInYear = secondsInDay * 365.24; // average days in year

  if (diff < 1) return "just now";

  let timeStr = "";

  const units: [string, number][] = [
    ["year", secondsInYear],
    ["month", secondsInMonth],
    ["week", secondsInWeek],
    ["day", secondsInDay],
    ["hour", secondsInHour],
    ["minute", secondsInMinute],
    ["second", 1],
  ];

  for (let i = 0; i < units.length; i++) {
    const [unit, secondsInUnit] = units[i];

    if (diff >= secondsInUnit) {
      const value = Math.floor(diff / secondsInUnit);
      timeStr += `${value} ${unit}${value > 1 ? "s" : ""}`;
      diff -= value * secondsInUnit;

      // For adding the second highest non-zero unit
      for (let j = i + 1; j < units.length; j++) {
        const [nextUnit, secondsInNextUnit] = units[j];
        if (diff >= secondsInNextUnit) {
          const nextValue = Math.floor(diff / secondsInNextUnit);
          timeStr += ` and ${nextValue} ${nextUnit}${nextValue > 1 ? "s" : ""}`;
          break;
        }
      }
      break;
    }
  }

  return timeStr + " ago";
}

export const convertDateToUnixTimestamp = (date: Date) => {
  if (!(date instanceof Date)) {
    throw new Error("The provided argument is not a Date object.");
  }
  return Math.floor(date.getTime() / 1000);
};

export const unixTimeStampToDate = (unixTimeStamp: number) => {
  const miliseconds = unixTimeStamp * 1000;
  return new Date(miliseconds).toLocaleDateString();
};

export const createDate = (
  date: Date,
  days: number,
  weeks: number,
  months: number,
  years: number
) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days + 7 * weeks);
  newDate.setMonth(newDate.getMonth() + months);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
};

// export const formatToTwoDecimal = (value:number) => {
//   return Math.floor(  )
// }

// export const formatStockData = (data) => {
//   if (!data || !data.values) {
//     console.error("Invalid data format", data);
//     return [];
//   }

//   return data.values
//     .map((item) => ({
//       date: new Date(item.datetime), // Convert date string to Date object
//       open: parseFloat(item.open),
//       high: parseFloat(item.high),
//       low: parseFloat(item.low),
//       close: parseFloat(item.close),
//       volume: parseInt(item.volume, 10),
//     }))
//     .reverse(); // Reverse the order to show the earliest date first
// };

export const mapFilterToInterval = (filter: string): string => {
  const filterMap: Record<string, string> = {
    "1H": "1h",
    "1D": "1day",
    "1W": "1week",
    "1M": "1month",
  };

  return filterMap[filter] || filter; // Returns the mapped value or the original if not found
};

export const formatDatetime = (datetime, interval) => {
  switch (interval) {
    case "1h":
      return datetime.split(" ")[1]; // ✅ Extracts "HH:MM" from "YYYY-MM-DD HH:MM:SS"

    case "1day":
    case "1week":
      return datetime.split(" ")[0]; // ✅ Returns "YYYY-MM-DD"

    case "1month":
      return datetime.slice(0, 7); // ✅ Returns "YYYY-MM"

    default:
      return datetime; // Fallback
  }
};

export const getLatestDateData = (data) => {
  // if (!data || !data.length) return [];

  // Extract only the date part (ignoring time) from each datetime
  const uniqueDates = [
    ...new Set(data.values.map((item) => item.datetime.split(" ")[0])),
  ];

  // Find the most recent date
  const latestDate = uniqueDates.sort((a, b) => new Date(b) - new Date(a))[0];

  // Filter only the data that matches the latest date
  return data.values.filter((item) => item.datetime.startsWith(latestDate));
};

export const formatStockData = (apiResponse, interval) => {
  if (!apiResponse || !apiResponse.values) {
    console.error("Invalid API response", apiResponse);
    return [];
  }

  const xy = apiResponse.map((item) =>
    console.log("uu", interval, formatDatetime(item.datetime, interval))
  );

  return apiResponse
    .map((item) => ({
      datetime: formatDatetime(item.datetime, interval), // Use correct formatting per interval
      open: Math.round(parseFloat(item.open)), // Round values for readability
      high: Math.round(parseFloat(item.high)),
      low: Math.round(parseFloat(item.low)),
      close: Math.round(parseFloat(item.close)),
      volume: parseInt(item.volume, 10),
    }))
    .reverse(); // Reverse order for chronological display
};
