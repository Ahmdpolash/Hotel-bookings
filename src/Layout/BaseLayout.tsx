"use client";
import Navbar from "@/components/share/Navbar";
import { usePathname } from "next/navigation";
import React from "react";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div>
      {pathname === "/sign-in" || pathname == "/sign-up" ? (
        <>{children}</>
      ) : (
        <div>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </div>
      )}
    </div>
  );
};

export default BaseLayout;
