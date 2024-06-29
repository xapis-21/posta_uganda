"use client";

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const NavLinks = () => {
  const products: {
    title: string;
    href: string;
    description: string;
    icon: string;
  }[] = [
    {
      title: "eBox Postal Address",
      href: "/docs/primitives/alert-dialog",
      description:
        "Register for a digital postal address for easy online mail management and notifications.",
      icon: "/icons/ebox.png",
    },
    {
      title: "Physical Postal Address",
      href: "/docs/primitives/hover-card",
      description:
        "Secure a personal physical postal box at your nearest Post Office for convenient mail collection.",
      icon: "/icons/mail.png",
    },
    {
      title: "Renew Postal Address",
      href: "/docs/primitives/progress",
      description:
        "Easily renew your existing postal address subscription online.",
      icon: "/icons/write.png",
    },
    {
      title: "Request For Delivery",
      href: "/docs/primitives/scroll-area",
      description:
        "Submit a delivery request for your mail and packages directly to your location.",
      icon: "/icons/deliver.png",
    },
    {
      title: "Track Your Items",
      href: "/docs/primitives/tabs",
      description:
        "Monitor the status and location of your mail and packages with our tracking system.",
      icon: "/icons/map.png",
    },
    {
      title: "Update Your Postal Address Details",
      href: "/docs/primitives/tooltip",
      description:
        "Update your postal address information quickly and easily online.",
      icon: "/icons/gear.png",
    },
    {
      title: "Your mails Inbox",
      href: "/docs/primitives/tooltip",
      description:
        "Check your digital mail inbox for received items and notifications.",
      icon: "/icons/envelope.png",
    },
    {
      title: "Deliver Request Status",
      href: "/docs/primitives/tooltip",
      description:
        "Check the status of your submitted delivery requests online.",
      icon: "/icons/scroll.png",
    },
    {
      title: "Online Application Status",
      href: "/docs/primitives/tooltip",
      description:
        "Monitor the progress of your online postal service applications.",
      icon: "/icons/checklist.png",
    },
  ];

  return (
    <nav className="hidden md:block h-full w-full">
      <ul className="flex items-center h-full gap-6">
        <li className="text-sm font-medium">
          <Link
            href="/about-us"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            About us
          </Link>
        </li>
        <li className="text-sm font-medium">
          <Popover>
            <PopoverTrigger
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-sm font-medium flex gap-2 items-center"
              )}
            >
              Products <ChevronDownIcon className="w-4 h-4" />
            </PopoverTrigger>
            <PopoverContent className="w-fit">
              <ul className="grid grid-cols-2 gap-2">
                {products.map(({ icon, title, href, description }) => (
                  <ListItem icon={icon} key={title} title={title} href={href}>
                    {description}
                  </ListItem>
                ))}
              </ul>
            </PopoverContent>
          </Popover>
        </li>
        <li className="text-sm font-medium">
          <Link
            href="/portfolio"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            Portfolio
          </Link>
        </li>
        <li className="text-sm font-medium">
          <Link
            href="/blog"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
    // <NavigationMenu>
    //   <NavigationMenuList>
    //     <NavigationMenuItem>
    //       <Link href="/docs" legacyBehavior passHref>
    //         <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //           About us
    //         </NavigationMenuLink>
    //       </Link>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger>Products</NavigationMenuTrigger>
    //       <NavigationMenuContent
    //         dir="rtl"
    //         // className="right:0 absolute left-auto top-full w-auto"
    //       >
    //         <ul className="grid w-[200px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
    //           {products.map(({ icon, title, href, description }) => (
    //             <ListItem icon={icon} key={title} title={title} href={href}>
    //               {description}
    //             </ListItem>
    //           ))}
    //         </ul>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <Link href="/docs" legacyBehavior passHref>
    //         <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //           Portfolio
    //         </NavigationMenuLink>
    //       </Link>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <Link href="/docs" legacyBehavior passHref>
    //         <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //           Blog
    //         </NavigationMenuLink>
    //       </Link>
    //     </NavigationMenuItem>
    //     <NavigationMenuIndicator />
    //   </NavigationMenuList>
    //   {/* <NavigationMenuViewport/> */}
    // </NavigationMenu>
  );
};

export default NavLinks;

interface ListItemProps {
  className?: string;
  title: string;
  href: string;
  icon: string;
  children: React.ReactNode;
}

const ListItem = ({
  className,
  title,
  children,
  href,
  icon,
}: ListItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
      >
        <div className="flex items-center max-w-[200px] gap-4">
          <Image
            src={icon}
            width={100}
            height={100}
            alt={title + "Posta Uganda"}
            className="h-4 w-4 object-contain"
          />

          <div>
            <h3 className="text-xs font-medium mb-2 leading-none text-popover-foreground">
              {title}
            </h3>
            {/* <p className="text-xs line-clamp-1 text-muted-foreground">{children}</p> */}
          </div>
        </div>
      </Link>
    </li>
  );
};
// ListItem.displayName = "ListItem";
