import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Oz",
  description: "Fashion Delivered Fast",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
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
