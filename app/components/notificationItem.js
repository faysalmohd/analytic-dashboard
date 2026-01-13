"use client";

export default function NotificationItem({
  title,
  message,
  time,
  unread = false,
  active = false,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`p-4 flex flex-col rounded cursor-pointer transition bg-gray-50
        ${active ? "bg-gray-200" : "hover:bg-gray-50"}
        ${unread ? "font-semibold" : "text-gray-600"}`}
    >
      <div className="flex justify-between">
        <p className="text-sm">{title}</p>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
        {message}
      </p>

      {unread && (
        <span className="inline-block mt-2 h-2 w-2 rounded-full bg-blue-600" />
      )}
    </div>
  );
}
