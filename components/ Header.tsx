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
  NavigationMenuList,NavigationMenuIndicator,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

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
        isScrolled ? "py-2 bg-white-100/90 backdrop-blur-xl shadow-sm" : "py-6",
        pathname != "/" && " bg-white-100/90 py-2 backdrop-blur-xl shadow-sm"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="Posta Uganda Logo"
              width={146}
              height={30}
              className={`object-contain w-auto ${isScrolled || pathname != "/" ? "h-12" : "md:h-20 h-12"}`}
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

                <NavigationMenuContent className="bg-white-100 border-none ring-0 shadow-lg">
                  <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-4">
                      <NavigationMenuLink asChild>
                        <div className="flex h-full w-full select-none flex-col justify-end rounded-md p-4 no-underline outline-none focus:shadow-md bg-[url(/images/posta-guy-and-client.png)] bg-cover bg-center relative isolate after:absolute after:bg-gradient-to-tr after:from-black-100 after:-z-10 after:w-full after:h-full after:left-0 after:top-0 overflow-hidden">
                          <div className="text-sm font-medium text-white-100 mb-2">
                            Posta Uganda
                          </div>
                          <p className="text-xs leading-tight text-white-10/80">
                            Flexible services, from local post to global
                            logistics.
                          </p>
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      href="/services/postal-addresses"
                      title="Postal Addresses Management"
                    >
                      Secure physical and virtual postal addresses
                    </ListItem>
                    <ListItem
                      href="/services/mail-services"
                      title="Mail Processing"
                    >
                      Reliable local and international mail delivery
                    </ListItem>
                    <ListItem
                      href="/services/express-services"
                      title="Financial Services"
                    >
                      Modern banking and money transfer solutions
                    </ListItem>
                    <Link
                      href={"/posta-services"}
                      className={cn(
                        buttonVariants({ variant: "neutral" }),
                        "flex items-center gap-2 text-xs bg-white-10/40"
                      )}
                    >
                      Explore all our services{" "}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about-posta" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      buttonVariants({ variant: "ghost" })
                    )}
                  >
                    Track & Trace
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/insights" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      buttonVariants({ variant: "ghost" })
                    )}
                  >
                    News & media
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/posta-careers" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      buttonVariants({ variant: "ghost" })
                    )}
                  >
                    Careers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="https://www.eposta.ug/web/register"
              className={cn(buttonVariants({}))}
            >
              Get an eAdress
            </Link>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Contact Us
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
  href:string
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, href }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md py-2 px-4 leading-none no-underline outline-none transition-colors  hover:bg-white-10/30 ",
              className
            )}
            href={href}
          >
            <h4 className="text-xs font-medium leading-none">{title}</h4>
            <p className="line-clamp-2 text-xs leading-snug text-black-10/60">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default Header;
