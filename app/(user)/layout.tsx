import type { Metadata } from "next";
import { Rajdhani, Manrope } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/ Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
// import { AI } from "../actions/bot";

// export const dynamic = "force-dynamic";
// export const maxDuration = 30;

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-title",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Posta Uganda",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(rajdhani.variable, manrope.variable, "font-sans min-h-screen flex flex-col justify-between")}>
        <Header />
        {/* <AI> */}
        <main className="w-full overflow-hidden">{children}</main>
        {/* </AI> */}
        <Footer />
      </body>
    </html>
  );
}
