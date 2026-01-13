"use client";

export default function ActivityFeed() {
  const activities = [
    { text: "New user subscribed", time: "2 mins ago" },
    { text: "Invoice paid", time: "10 mins ago" },
    { text: "Server restarted", time: "1 hour ago" },
    { text: "New order placed", time: "3 hours ago" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border">
      <p className="text-sm font-semibold mb-4">Recent Activity</p>

      <ul className="space-y-3">
        {activities.map((item, i) => (
          <li key={i} className="flex justify-between text-sm">
            <span>{item.text}</span>
            <span className="text-gray-400">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
