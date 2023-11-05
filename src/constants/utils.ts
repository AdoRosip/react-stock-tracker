export function timeAgo(timestamp: number) {
  const now = Date.now() / 1000 // current time in seconds
  let diff = now - timestamp

  const secondsInMinute = 60
  const secondsInHour = secondsInMinute * 60
  const secondsInDay = secondsInHour * 24
  const secondsInWeek = secondsInDay * 7
  const secondsInMonth = secondsInDay * 30.44 // average days in month
  const secondsInYear = secondsInDay * 365.24 // average days in year

  if (diff < 1) return "just now"

  let timeStr = ""

  const units: [string, number][] = [
    ["year", secondsInYear],
    ["month", secondsInMonth],
    ["week", secondsInWeek],
    ["day", secondsInDay],
    ["hour", secondsInHour],
    ["minute", secondsInMinute],
    ["second", 1],
  ]

  for (let i = 0; i < units.length; i++) {
    const [unit, secondsInUnit] = units[i]

    if (diff >= secondsInUnit) {
      const value = Math.floor(diff / secondsInUnit)
      timeStr += `${value} ${unit}${value > 1 ? "s" : ""}`
      diff -= value * secondsInUnit

      // For adding the second highest non-zero unit
      for (let j = i + 1; j < units.length; j++) {
        const [nextUnit, secondsInNextUnit] = units[j]
        if (diff >= secondsInNextUnit) {
          const nextValue = Math.floor(diff / secondsInNextUnit)
          timeStr += ` and ${nextValue} ${nextUnit}${nextValue > 1 ? "s" : ""}`
          break
        }
      }
      break
    }
  }

  return timeStr + " ago"
}

export const convertDateToUnixTimestamp = (date: Date) => {
  if (!(date instanceof Date)) {
    throw new Error("The provided argument is not a Date object.")
  }
  return Math.floor(date.getTime() / 1000)
}

export const unixTimeStampToDate = (unixTimeStamp: number) => {
  const miliseconds = unixTimeStamp * 1000
  return new Date(miliseconds).toLocaleDateString()
}

export const createDate = (
  date: Date,
  days: number,
  weeks: number,
  months: number,
  years: number
) => {
  const newDate = new Date(date)
  newDate.setDate(newDate.getDate() + days + 7 * weeks)
  newDate.setMonth(newDate.getMonth() + months)
  newDate.setFullYear(newDate.getFullYear() + years)
  return newDate
}

// export const formatToTwoDecimal = (value:number) => {
//   return Math.floor(  )
// }
