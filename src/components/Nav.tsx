"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const tabs = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

const Nav = () => {
  const [selected, setSelected] = useState<string>(tabs[0].text);
  const pathname = usePathname();

  return (
    <div className="fixed top-0 z-50 w-full h-[60px] ">
      <div className="my-1 px-3 py-3 rounded-lg flex items-center gap-2 bg-slate-800 w-fit mx-auto">
        {tabs.map((tab) => (
          <Chip href={tab.href} text={tab.text} selected={pathname === tab.href} setSelected={setSelected} key={tab.text} />
        ))}
      </div>
    </div>
  );
};

type TabProps = {
  text: string;
  href: string;
};

type ChipProps = {
  href: string;
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
};

const Chip = ({ href, text, selected, setSelected }: ChipProps) => {
  return (
    <Link
      href={href}
      className={`${
        selected ? "text-white" : "text-slate-200 hover:text-slate900 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-1 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="bubble"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-red-600 to-red-500 rounded-md"
        ></motion.span>
      )}
    </Link>
  );
};

export default Nav;
