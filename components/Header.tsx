"use client";
import Image from "next/image";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex py-2 bg-black h-[60px] px-16">
      <div className="w-full   flex">
        <Image
          src="https://res.cloudinary.com/dshvydi5f/image/upload/v1712392158/vNetwork/4112786_dslfxy.png"
          alt="logo"
          width={50}
          height={50}
          className="mr-8"
        ></Image>
        <div className="flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white">
                  Home
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink></NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white ">
                  Trending
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink></NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent  text-white">
                  Artist
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink></NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div>
        <Button className="bg-red-500 rounded-full">Login</Button>
      </div>
    </div>
  );
};

export default Header;
