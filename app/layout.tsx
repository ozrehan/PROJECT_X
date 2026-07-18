import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Oz",
  description: "Fashion Delivered Fast",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans")}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
