"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const DashboardLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="relative">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
