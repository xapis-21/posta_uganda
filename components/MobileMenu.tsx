import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "About", href: "/about" },
    {
      title: "Services",
      items: [
        { name: "Postal Addresses", href: "/services/postal-addresses" },
        { name: "Mail Services", href: "/services/mail-services" },
        { name: "Express Services", href: "/services/express-services" },
        { name: "Financial Services", href: "/services/financial-services" },
        { name: "Stamps & Philately", href: "/services/stamps-philately" },
        { name: "Additional Services", href: "/services/additional-services" },
        { name: "Property Services", href: "/services/property-services" },
      ],
    },
    {
      title: "Track & Trace",
      items: [
        { name: "Track a Package", href: "/track" },
        { name: "ePosta Login/Register", href: "/eposta" },
      ],
    },
    {
      title: "News & Media",
      items: [
        { name: "Blog", href: "/blog" },
        { name: "Image Gallery", href: "/gallery" },
      ],
    },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[400px] bg-background"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-center py-4 border-b">
            <Image
              src="/logo/logo-wide.png"
              alt="Posta Uganda Logo"
              width={146}
              height={30}
              className="object-contain"
            />
          </div>
          <nav className="flex-grow overflow-y-auto">
            <Accordion type="single" collapsible className="w-full">
              {menuItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  {item.items ? (
                    <>
                      <AccordionTrigger className="text-lg font-medium py-4">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="py-2">
                          {item.items.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.href}
                                className="block py-2 px-4 text-sm hover:bg-accent rounded-md transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center text-lg font-medium py-4 px-5 hover:bg-accent rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </nav>
          <div className="py-4 border-t">
            <Link href="/contact">
              <Button variant="ghost" className="w-full mb-2">
                Contact Us
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="default" className="w-full">
                Create ePosta Account
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
