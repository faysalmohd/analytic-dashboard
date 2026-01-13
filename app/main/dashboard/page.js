import ActivityFeed from "../../components/activityFeed";
import AlertCard from "../../components/alertcard";
import KpiItem from "../../components/kpiItem";
import ProgressCard from "../../components/progresscard";
import SimpleTable from "../../components/simpletable";
import MainTitle from "../../components/title";

export default function Dashboard() {
  return (
    <div className="bg-white w-full h-[calc(100vh-16px)] overflow-y-auto rounded p-4 flex flex-col gap-5">
    <MainTitle title="Dashboard"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KpiItem label="Active Users" value="1,248" change="12%" />
        <KpiItem label="Bounce Rate" value="38%" change="4%" positive={false} />
        <ProgressCard title="Monthly Target" value={72} max={100} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <ActivityFeed />
        <SimpleTable />
      </div>

      <AlertCard type="info" message="This is an INFO alert." />
      <AlertCard type="warning" message="This is a WARNING alert." />
      <AlertCard type="success" message="This is a SUCCESS alert." />
      <AlertCard type="error" message="This is an ERROR alert." />
    </div>
  );
}
