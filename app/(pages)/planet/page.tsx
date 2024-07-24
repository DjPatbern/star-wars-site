import React, { Suspense } from "react";
import DashboardLayout from "@/app/common/layouts/dashboardLayout";
import { Metadata } from "next";
import Planet from "./Planet";
export const metadata: Metadata = {
  title: "Planet",
  description: "This is the Planet page of Demoviez web app",
  alternates: {
    canonical: "/planet",
  },
};
const Page = () => {
  return (
    <DashboardLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Planet />
      </Suspense>
    </DashboardLayout>
  );
};

export default Page;
