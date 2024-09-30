import Button from "@/components/Button";
import { headers } from "next/headers";

export default function page() {
  const headersList = headers();
  const activePath = headersList.get("x-pathname");

  console.log(headersList.get("x-pathname"));
  console.log(headersList.get("next-url"));

  return (
    <div>
      <Button />
      <div className="relative w-fit px-20 py-8 before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-300 before:to-blue-600 before:z-[-1] hover:before:opacity-0 before:duration-300">
        hello
      </div>
    </div>
  );
}
