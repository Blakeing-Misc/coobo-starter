import Link from "next/link";
import { FC } from "react";
import { Icons } from "./Icons";
import MobileNav from "./MobileNav";
import { MainMenu } from "@/lib/menus/main";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header>
      <div className="container w-full flex items-center justify-between py-4">
        <Icons.logo className="w-auto h-16" />
        <ul className="hidden lg:flex space-x-4">
          {MainMenu.map((menuItem, index) => (
            <li key={index}>
              <Link href={menuItem.href}>{menuItem.name}</Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
