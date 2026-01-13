import { CalendarDays } from "lucide-react";
import MainTitle from "../components/title";
import Card from "../components/card";
import BarChart from "../components/homeBarGraph";

export default function Home() {
  const cardsData = [
    {
      title: "Revenue",
      trend: true,
      price: "12,345",
      percentage: "15%",
      currency: "$",
      updated: "Just now",
    },
    {
      title: "Expenses",
      trend: false,
      price: "8,765",
      percentage: "5%",
      currency: "$",
      updated: "5 mins ago",
    },
    {
      title: "Profit",
      trend: true,
      price: "3,580",
      percentage: "8%",
      currency: "$",
      updated: "10 mins ago",
    },
    {
      title: "Subscribers",
      trend: true,
      price: "1,245",
      percentage: "12%",
      currency: "",
      updated: "1 hour ago",
    },
  ];

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="bg-white w-full h-[calc(100vh-16px)] overflow-y-auto rounded p-4">
      <div className="flex flex-row justify-between mr-5 items-center">
        <MainTitle title="Home" />
        <div className="text-gray-400 flex flex-row gap-2 text-sm">
          <CalendarDays size={18} />
          <p>{today}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        {cardsData.map((cards) => {
          return (
            <Card
              key={cards.title}
              title={cards.title}
              trend={cards.trend}
              price={cards.price}
              percentage={cards.percentage}
              currency={cards.currency}
              updated={cards.updated}
            ></Card>
          );
        })}
      </div>
      <BarChart style="mt-20" />
    </div>
  );
}
