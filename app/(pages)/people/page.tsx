import React, { Suspense } from "react";
import DashboardLayout from "@/app/common/layouts/dashboardLayout";
import People from "./People";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "People",
  description: "This is the Peoples page of Demoviez web app",
  alternates: {
    canonical: "/people",
  },
};
const Page = () => {
  return (
    <DashboardLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <People />
      </Suspense>
    </DashboardLayout>
  );
};

export default Page;
