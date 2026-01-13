"use client";

export default function AlertCard({ type = "info", message }) {
  const styles = {
    info: "bg-blue-100 text-blue-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    error: "bg-red-100 text-red-700",
  };

  return (
    <div className={`p-4 rounded-lg text-sm ${styles[type]}`}>
      {message}
    </div>
  );
}
