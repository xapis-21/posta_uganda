"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, ButtonProps, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Container from "./Container";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setIsScrolled(currentScrollPos > 0);
    setPrevScrollPos(currentScrollPos);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const pathname = usePathname();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full transition-all duration-300 z-50",
        isScrolled
          ? "py-2 bg-background/80 backdrop-blur-xl border-b border-border"
          : "py-6",
        pathname != "/" &&
          " bg-secondary/95 py-2 backdrop-blur-xl"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo/logo-wide.png"
              alt="Posta Uganda Logo"
              width={146}
              height={30}
              className="object-contain"
            />
          </Link>

          <div className="md:hidden">
            <MobileMenu />
          </div>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/about-posta" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      buttonVariants({ variant: "ghost" })
                    )}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(buttonVariants({ variant: "ghost" }))}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Posta Uganda Services
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Connecting Uganda through innovative postal and
                            financial solutions.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      href="/services/postal-addresses"
                      title="Postal Addresses"
                    >
                      Secure physical and virtual postal addresses
                    </ListItem>
                    <ListItem
                      href="/services/mail-services"
                      title="Mail Services"
                    >
                      Reliable local and international mail delivery
                    </ListItem>
                    <ListItem
                      href="/services/express-services"
                      title="Express Services"
                    >
                      Fast and efficient courier services
                    </ListItem>
                    <ListItem
                      href="/services/financial-services"
                      title="Financial Services"
                    >
                      Modern banking and money transfer solutions
                    </ListItem>
                    <ListItem
                      href="/services/stamps-philately"
                      title="Stamps & Philately"
                    >
                      Collectible stamps and philatelic items
                    </ListItem>
                    <ListItem
                      href="/services/additional-services"
                      title="Additional Services"
                    >
                      Complementary postal and logistics offerings
                    </ListItem>
                    <ListItem
                      href="/services/property-services"
                      title="Property Services"
                    >
                      Real estate and property management
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(buttonVariants({ variant: "ghost" }))}
                >
                  Track & Trace
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <ListItem href="/track" title="Track a Package">
                      Monitor your shipment's journey in real-time
                    </ListItem>
                    <ListItem href="/eposta" title="ePosta Login/Register">
                      Access your digital postal services account
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(buttonVariants({ variant: "ghost" }))}
                >
                  News & Media
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <ListItem href="/blog" title="Blog">
                      Stay updated with our latest news and articles
                    </ListItem>
                    <ListItem href="/gallery" title="Image Gallery">
                      Visual showcase of our services and events
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }) as string,
                "text-foreground hover:text-primary"
              )}
            >
              Contact Us
            </Link>
            <Link
              href="/register"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }) as string,
                "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              Create ePosta Account
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
};

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  children: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default Header;