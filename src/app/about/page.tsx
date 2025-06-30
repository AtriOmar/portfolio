"use client";

import { logIpAddress } from "@/app/test/actions";
import { useEffect } from "react";

export default function page() {
  useEffect(() => {
    async function main() {
      await logIpAddress();
    }

    main();
  }, []);

  return <div>page</div>;
}
