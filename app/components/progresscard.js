"use client";

export default function ProgressCard({ title, value, max }) {
  const percent = Math.min((value / max) * 100, 100);

  return (
    <div className="bg-white p-6 rounded-xl border">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-1">
        {value} / {max}
      </p>

      <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="text-xs text-gray-400 mt-2">{percent.toFixed(0)}% completed</p>
    </div>
  );
}
