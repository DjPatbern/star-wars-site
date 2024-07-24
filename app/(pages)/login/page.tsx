import DashboardLayout from "@/app/common/layouts/dashboardLayout";
import React from "react";
import Login from "./Login";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login",
  description: "This is the Login page of Demoviez web app",
  alternates: {
    canonical: "/login",
  },
};
const Page = () => {
  return (
    <DashboardLayout>
      <Login />
    </DashboardLayout>
  );
};

export default Page;
