"use server";

import { headers } from "next/headers";

export async function logIpAddress() {
  const hdrs = headers();
  const forwarded = hdrs.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "Unknown IP";
  console.log("Client IP Address:", ip);
}
