import { FC } from "react";
import { Button } from "@/components/ui/Button";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
} from "@/components/ui/Sheet";
import { Icons } from "./Icons";
import { MainMenu } from "@/lib/menus/main";
import Link from "next/link";

interface MobileNavProps {}

const MobileNav: FC<MobileNavProps> = ({}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Icons.menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="py-12 max-w-fit">
        <ul className="flex flex-col items-end">
          {MainMenu.map((menuItem, index) => (
            <li key={index}>
              <Link href={menuItem.href}>{menuItem.name}</Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
