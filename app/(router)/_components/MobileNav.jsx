"use client";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTitle,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; 
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { menu } from "./menuData";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
         <Menu width={36} height={36} /> 
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
        <SheetTitle className="hidden">
          <VisuallyHidden>menu</VisuallyHidden>
        </SheetTitle>
        <div className="flex gap-2 items-center">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <h2 className="text-2xl font-bold">Logo</h2>
      </div>
      <hr className="mt-7" />
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto ">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-gray-500">
                {menu.map((item) => {
                  const isActive = pathname === item.route;

                  return (
                    <SheetClose asChild key={item.id}>
                      <Link
                        href={item.route}
                        className={cn(
                          "flex bg-transparent gap-4 items-center p-4 w-full max-w-60 cursor-pointer rounded-md transition-all ease-in-out duration-75",
                          {
                            "bg-primary text-white": isActive,
                          }
                        )}
                      >
                        <item.icon />
                        <h2 className="font-semiblod">{item.name}</h2>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;