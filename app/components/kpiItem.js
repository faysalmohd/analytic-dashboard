"use client";

export default function KpiItem({ label, value, change, positive = true }) {
  return (
    <div className="flex justify-between flex-col bg-white p-4 rounded-lg border">
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-4xl font-semibold">{value}</p>
      </div>
      <span
        className={`text-lg font-medium ${
          positive ? "text-green-600" : "text-red-600"
        }`}
      >
        {positive ? "+" : "-"}
        {change}
      </span>
    </div>
  );
}
