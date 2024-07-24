"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const DashboardLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="relative flex flex-col justify-between h-[100%] ">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
