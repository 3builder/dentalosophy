"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@components/ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import navbarMenu from "@utils/static/navbarMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between py-3 px-3 mb-8 md:px-5 mx-auto container">
      <Link href="/" className="font-bold text-lg">
        <Image
          className="mx-auto"
          width="200"
          height="60"
          src="/images/logo.png"
          alt="dentalosophy logo"
        />
      </Link>

      <NavigationMenu className="hidden md:flex justify-end">
        <NavigationMenuList className="flex space-x-6">
          {navbarMenu.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild>
                {item.isButton ? (
                  <span className="cursor-pointer text-white bg-yellow rounded-md shadow-lg p-1 px-2 text-sm">
                    {item.name}
                  </span>
                ) : (
                  <Link className="dt-link text-sm" href={item.path}>
                    <span>{item.name}</span>
                  </Link>
                )}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="p-6">
          <VisuallyHidden asChild>
            <SheetTitle>menu</SheetTitle>
          </VisuallyHidden>
          <nav className="flex flex-col space-y-4">
            {navbarMenu.map((item, index) => (
              <Link
                key={index}
                className="dt-link text-sm"
                href={item.path}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
