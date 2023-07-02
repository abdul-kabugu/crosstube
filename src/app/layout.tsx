// @ts-nocheck
"use client";
/* eslint-disable prettier/prettier */

import "./globals.css";
import "@crossbell/connect-kit/colors.css";
import React from "react";
import { Providers } from "./providers";
import { TopNav } from "@/components/TopNavigation";
import { useSelectedTags, useToggleSidebar } from "@/store/toggleState";
import { Sidebar } from "@/components/sidebar";
import MobileNav from "@/components/MobileNav";


export default function RootLayout({ children }: React.PropsWithChildren) {
  const { isSidebarExpanded, toggleSidebar} = useToggleSidebar()
  //const {useSelectedTags, selectedTags} = useSelectedTags()
  return (
    <html lang="en">
      <body>
        <Providers>
          <TopNav />
        <main className="flex ">
            <section
              className={`${
                isSidebarExpanded ? "md:ml-[106px] bg-red-600" : "md:ml-[66px] bg-yellow-600"
              } xs:ml-0  w-full`}
            >
              {children}
              <MobileNav  />
            </section>
            <Sidebar
              isExpanded={isSidebarExpanded}
              toggleSidebar={toggleSidebar}
            />
          </main>
          </Providers>
      </body>
    </html>
  );
}
