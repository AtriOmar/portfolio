"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Button() {
  const pathname = usePathname();

  return <div className={`${pathname === "/tes" ? "bg-black" : "bg-red-500"}`}>Button</div>;
}
