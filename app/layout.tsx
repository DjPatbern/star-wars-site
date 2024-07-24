import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { NextTopLoader } from "./common/NextTopLoader";
import { cn } from "@/lib/utils";
import styles from "@/styles.module.css";
import { geologica } from "@/src/utils/font";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { AuthProvider } from "@/src/user.context";

export const metadata: Metadata = {
  title: "Demovie",
  description: "This is Demovie web app, best place to watch movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${cn(styles["bg-gradient-to-custom-services"])} ${cn(
          geologica.className,
          "font-sans"
        )}`}
      >
        <ReactQueryProvider>
          <AuthProvider>
            <Toaster position="top-right" />
            <NextTopLoader />
            {children}
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
