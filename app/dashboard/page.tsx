"use client";

import PostTable from "./components/post-table/post-table";
import Stats from "./components/stats/Stats";

const DashboardPage = () => {
  return (
    <div>
      <Stats />
      <div className="h-10" />
      <PostTable />
    </div>
  );
};

export default DashboardPage;
