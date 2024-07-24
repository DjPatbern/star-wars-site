import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";
import { links } from "@/src/data";

const LinkItems = () => {
  const pathname = usePathname();
  const cleanURL = (name: string) => name.split("/").filter(Boolean)[0];
  const matchPath = (href: string) => cleanURL(pathname) === cleanURL(href);
  return (
    <ul className="flex items-center gap-11">
      {links.map((link, index) => (
        <li
          key={index}
          className={cn(
            "py-1.5",
            matchPath(link.href) && "border-[#F9F871] border-b-2"
          )}
        >
          <Link
            href={link.href}
            className={cn(
              "font-normal text-xs",
              "text-ts-white",
              matchPath(link.href) && "font-bold"
            )}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkItems;
