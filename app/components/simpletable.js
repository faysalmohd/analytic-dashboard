"use client";

export default function SimpleTable() {
  const rows = [
    { name: "John Doe", status: "Active", amount: "$120" },
    { name: "Jane Smith", status: "Pending", amount: "$90" },
    { name: "Alex Brown", status: "Active", amount: "$210" },
  ];

  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            <th className="text-left px-4 py-3">Name</th>
            <th className="text-left px-4 py-3">Status</th>
            <th className="text-right px-4 py-3">Amount</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-3">{row.name}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    row.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {row.status}
                </span>
              </td>
              <td className="px-4 py-3 text-right font-medium">{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
