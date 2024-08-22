import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";

export const metadata: Metadata = {
  title: "Home - Sebastian Portfolio",
  description: "Fullstack developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
