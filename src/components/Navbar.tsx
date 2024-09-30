import Link from "next/link";

export default async function Navbar() {
  return (
    <header className="h-[60px] px-4">
      <nav className="h-full">
        <ul className="h-full flex gap-4 justify-center items-center">
          <li>
            <Link href="/" className="px-4 py-2 rounded-lg bg-slate-200 shadow-md ring-gray-400 duration-300 hover:shadow-none hover:ring-2">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="px-4 py-2 rounded-lg bg-slate-200 shadow-md ring-gray-400 duration-300 hover:shadow-none hover:ring-2">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/" className="px-4 py-2 rounded-lg bg-slate-200 shadow-md ring-gray-400 duration-300 hover:shadow-none hover:ring-2">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
