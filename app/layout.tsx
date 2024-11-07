import "@/styles/globals.css";
import "material-symbols";
import React from "react";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";
// import SideNav from "@/components/SideNav";
// import Footer from "@/components/Footer";
import NotificationProvider from "@/components/NotificationProvider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers>
          <NotificationProvider>
            <div className="relative flex flex-col bg-gray-100 min-h-screen">
              <div className="flex relative">
                <main className="container mx-auto max-w-7xl pt-8 md:pt-8 px-3 md:px-8 flex-grow">
                  {children}
                </main>
              </div>
            </div>
          </NotificationProvider>
        </Providers>
      </body>
    </html>
  );
}
