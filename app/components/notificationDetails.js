"use client";

export default function NotificationDetails({
  notification,
  className = "",
}) {
  if (!notification) {
    return (
      <div
        className={`flex items-center justify-center text-gray-400 ${className}`}
      >
        Select a notification to view details
      </div>
    );
  }

  return (
    <div className={`p-6 ${className}`}>
      <p className="text-lg font-semibold">
        {notification.title}
      </p>
      <p className="text-xs text-gray-400 mt-1">
        {notification.time}
      </p>

      <div className="mt-6 text-sm text-gray-700 leading-relaxed">
        {notification.fullMessage}
      </div>
    </div>
  );
}
