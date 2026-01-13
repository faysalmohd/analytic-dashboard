import Sidebar from "../components/sidebar/sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function MainLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <div className="m-2 bg-gray-200 flex flex-row gap-2">
      <Sidebar user={session.user} />
      {children}
    </div>
  );
}
