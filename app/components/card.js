import { TrendingDown, TrendingUp } from "lucide-react";

export default function Card({
  title = "none",
  trend = false,
  price = "##",
  percentage = "##%",
  currency = "#",
  updated = 'Unknown'
}) {
  return (
    <div className="bg-gray-100 min-h-30 rounded px-4 py-3">
      <p className="capitalize">{title}</p>
      <div className="flex flex-row justify-between">
        <p className="text-3xl font-bold">
          {currency}
          {price}
        </p>
        {trend ? (
          <div className="text-green-800 gap-1 w-fit h-fit px-2 py-1 bg-green-300 rounded flex flex-row justify-center items-center">
            <TrendingUp size={15}></TrendingUp>
            <p className="text-sm">{percentage}</p>
          </div>
        ) : (
          <div className="text-red-800 gap-1 w-fit h-fit px-2 py-1 bg-red-300 rounded flex flex-row justify-center items-center">
            <TrendingDown size={15}></TrendingDown>
            <p className="text-sm">{percentage}</p>
          </div>
        )}
      </div>
      <p className="flex justify-end mt-5 text-gray-400 text-xs">{updated}</p>
    </div>
  );
}
