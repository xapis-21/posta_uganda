import React from "react";
import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black-100 text-white-10/80">
      <div className="container mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="max-w-sm">
            <Link href="/" className="text-2xl font-bold text-pav-sky">
              <Image
                src={"/logo/logo.png"}
                alt=""
                width={100}
                height={40}
                className={cn("h-32 w-auto object-contain")}
              />
            </Link>
          </div>
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white-10 text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white-10  text-sm transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/rentals"
                  className="hover:text-white-10  text-sm transition-colors"
                >
                  News & media
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white-10 text-sm transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Customer support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white text-pav-100 text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white text-pav-100 text-sm transition-colors"
                >
                  Track & Trace
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white text-pav-100 text-sm transition-colors"
                >
                  Find a Post Office
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Follow us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white-10 flex items-center gap-2 text-sm transition-colors"
                >
                  X (formerly Twitter) <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white-10 flex items-center gap-2  text-sm transition-colors"
                >
                  Instagram <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/rentals"
                  className="hover:text-white-10 flex items-center gap-2  text-sm transition-colors"
                >
                  Linked In <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Get in touch</h3>
            <p className="text-sm text-pav-100 hover:text-white">
              Plot 35, Kampala Road
            </p>
            <p className="text-sm text-pav-100 hover:text-white">
              P.O Box 7106, Kampala, Uganda
            </p>
            <p className="text-sm text-pav-100 hover:text-white">
              Phone: 256-414-255511/5
            </p>
            <p className="text-sm text-pav-100 hover:text-white">
              Whatsapp: 0741566374
            </p>
            <p className="text-sm text-pav-100 hover:text-white">
              Email:{" "}
              <a href="mailto:inquiries@ugapost.co.ug">
                inquiries@ugapost.co.ug
              </a>{" "}
              or{" "}
              <a href="mailto:customercare@ugapost.com">
                customercare@ugapost.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 py-6 flex items-center justify-center border-t border-white-10/10 text-white-10/60">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Posta Uganda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
