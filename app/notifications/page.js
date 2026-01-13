"use client";

import { useState } from "react";
import NotificationList from "../components/notificationList";
import NotificationDetails from "../components/notificationDetails";
import MainTitle from "../components/title";

export default function Notification() {
  const [selected, setSelected] = useState(null);

  const notifications = [
    {
      id: 1,
      title: "New Subscription",
      message: "A user subscribed to your plan.",
      fullMessage: "A new user has successfully subscribed to your Pro plan.",
      time: "2 mins ago",
      unread: true,
    },
    {
      id: 2,
      title: "Payment Received",
      message: "Your invoice has been paid.",
      fullMessage: "Your invoice #2391 has been successfully paid.",
      time: "1 hour ago",
      unread: false,
    },
    {
      id: 3,
      title: "System Alert",
      message: "High server load detected.",
      fullMessage: "The system detected unusually high server load.",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 4,
      title: "Payment Received",
      message: "Your invoice has been paid.",
      fullMessage: "Your invoice #2390 has been successfully paid.",
      time: "2d ago",
      unread: true,
    }
  ];

  return (
    <div className="bg-white w-full h-[calc(100vh-16px)] overflow-y-auto rounded p-4 ">
      <MainTitle title="Notifications" />
      <div className="flex flex-1 mt-5">
        <NotificationList
          notifications={notifications}
          activeId={selected?.id}
          onSelect={setSelected}
          className="w-1/3"
        />

        <NotificationDetails notification={selected} className="w-2/3" />
      </div>
    </div>
  );
}
