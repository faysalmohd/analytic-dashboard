"use client";

import NotificationItem from "./notificationItem";

export default function NotificationList({
  notifications,
  activeId,
  onSelect,
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-1 overflow-y-auto ${className}`}>

      {notifications.map((n) => (
        <NotificationItem
          key={n.id}
          title={n.title}
          message={n.message}
          time={n.time}
          unread={n.unread}
          active={activeId === n.id}
          onClick={() => onSelect(n)}
        />
      ))}
    </div>
  );
}
