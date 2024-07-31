import type { Metadata } from "next";
import { Rajdhani, Manrope } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/ Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";



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
      <body className={cn(manrope.variable, "font-sans min-h-screen flex flex-col justify-between")}>
        <Header />

        <main className="w-full overflow-hidden">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
