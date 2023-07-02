/* eslint-disable prettier/prettier */
// @ts-nocheck
import { useState } from "react";
import { ChevronLeftOutline, ChevronRightOutline } from "@/Icons";
import Link from "next/link";
import { sidebarMenu } from "@/constants";
export default function Sidebar({isExpanded}) {
  return (
    <div
      className={`${
        isExpanded ? "w-[105px] " : "w-[60px] "
      }  border-r-1 h-screen fixed top-15  duration-500 ease-in-out xs:hidden md:block `}
    >
      <div>
        {sidebarMenu.map((item, i) => {
          return (
            <Link href={item.to} key={i}>
              <div
                className={`${
                  isExpanded
                    ? "flex gap-2 items-center my-2 px-2 py-2 hover:bg-gray-700 rounded-lg"
                    : "flex flex-col my-3 px-2 items-center justify-center hover:bg-gray-700  w-full h-12 py-1.5"
                }`}
              >
                <item.icon
                  className={`${isExpanded ? "w-5 h-5" : "w-6 h-6 "}`}
                />
                <p className={`${isExpanded ? "text-sm" : "text-xs"}`}>
                  {item.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      
    </div>
  );
}
