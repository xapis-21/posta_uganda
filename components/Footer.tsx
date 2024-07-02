import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Image
              src="/logo/logo-wide.png"
              alt="Posta Uganda Logo"
              width={146}
              height={30}
              className="mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4">
              Connecting Uganda through innovative postal and financial
              solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/postaug"
                className="text-muted-foreground hover:text-primary"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/postaug"
                className="text-muted-foreground hover:text-primary"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/postaug"
                className="text-muted-foreground hover:text-primary"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/company/posta-uganda"
                className="text-muted-foreground hover:text-primary"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">ePosta Services</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/eposta/box"
                  className="text-muted-foreground hover:text-primary"
                >
                  eBox Postal Address
                </Link>
              </li>
              <li>
                <Link
                  href="/eposta/physical"
                  className="text-muted-foreground hover:text-primary"
                >
                  Physical Postal Address
                </Link>
              </li>
              <li>
                <Link
                  href="/eposta/renew"
                  className="text-muted-foreground hover:text-primary"
                >
                  Renew Postal Address
                </Link>
              </li>
              <li>
                <Link
                  href="/eposta/delivery"
                  className="text-muted-foreground hover:text-primary"
                >
                  Request For Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/eposta/track"
                  className="text-muted-foreground hover:text-primary"
                >
                  Track Your Items
                </Link>
              </li>
              <li>
                <Link
                  href="/eposta/update"
                  className="text-muted-foreground hover:text-primary"
                >
                  Update Your Postal Address Details
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Site Map</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/track"
                  className="text-muted-foreground hover:text-primary"
                >
                  Track & Trace
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-muted-foreground hover:text-primary"
                >
                  News & Media
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Contact Information</h4>
            <ul className="space-y-2 text-xs">
              <li className="text-muted-foreground">
                Plot 35, Kampala Road, Kampala, Uganda
              </li>
              <li>
                <a
                  href="tel:+256414231707"
                  className="text-muted-foreground hover:text-primary"
                >
                  +256 41 4231707
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ugapost.co.ug"
                  className="text-muted-foreground hover:text-primary"
                >
                  info@ugapost.co.ug
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-muted pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Posta Uganda. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Posta Uganda, formerly known as Uganda Post Limited, has been at the
            forefront of Uganda's postal and communication landscape since 1951.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
