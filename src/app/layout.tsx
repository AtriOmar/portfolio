import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Nav from "@/components/Nav";
import CursorFollower2 from "@/components/CursorFollower2";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omar Atri",
  description: "Portfolio of the Full Stack Developer Omar Atri",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:30000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className + " bg-slate-900"}>
        {/* <Navbar /> */}
        <div className="pointer-events-none fixed right-[500px] top-[100px] w-[100px] h-[700px] rotate-[-30deg] bg-slate-700  opacity-50 blur-[70px]"></div>
        <div className="pointer-events-none fixed left-[-200px] bottom-[-200px] w-[500px] h-[500px] rounded-full bg-slate-700  opacity-50 blur-[70px]"></div>
        <Nav />
        <CursorFollower2 />
        {children}
      </body>
    </html>
  );
}
