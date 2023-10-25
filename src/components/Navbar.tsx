"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import clasnames from "classnames";

const links = [
  { label: "Dashboard", href: "/" },
  { label: "Issues", href: "/issues" },
];

export function Navbar() {
  const currentPath = usePathname();
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 items-center h-14 shadow">
      <Link
        href="/"
        className="text-zinc-600 hover:text-zinc-800 hover:scale-110 hover:transition-all hover:duration-300"
      >
        <AiFillBug size={24} />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li
            key={link.href}
            className={clasnames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-600": link.href !== currentPath,
              "hover:text-zinc-800 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-zinc-800 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center":
                true,
            })}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
