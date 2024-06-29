"use client";
import { useCallback, useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import { Button } from "./ui/button";
import Logo from "./Logo";
import Container from "./Container";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setIsScrolled(prevScrollPos > 600);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isScrolled, handleScroll]);

  return (
    <header className="w-full py-4 fixed top-0 left-0">
      <Container>
        <nav className="flex items-center w-full justify-between">
          <Link href="/">
            <Logo image="/logo/logo-wide.png" className="w-40" />
          </Link>

          <div className="flex gap-12">
            <NavLinks />
            <Button>Contact Us</Button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
