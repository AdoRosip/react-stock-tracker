interface ChartFilterProps {
  text: string
  active: boolean
  onClick: () => void
}

const ChartFilter = ({ text, active, onClick }: ChartFilterProps) => {
  return (
    <button
      onClick={onClick}
      className={`border rounded-lg outline-1 px-1 hover:bg-[#b3b3b380] w-12 m-2 border-1 rounded-md flex items-center justify-center cursor-pointer ${
        active
          ? "font-medium border-indigo-700 text-gray-000"
          : "border-indigo-700 text-indigo-300 text-bold"
      }`}
    >
      {text}
    </button>
  )
}

export default ChartFilter
