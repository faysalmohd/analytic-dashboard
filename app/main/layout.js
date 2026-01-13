import Sidebar from "../components/sidebar/sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="m-2 bg-gray-200 flex flex-row gap-2">
      <Sidebar />
      {children}
    </div>
  );
}
