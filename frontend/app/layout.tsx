import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";

export const metadata: Metadata = {
  title: "Sebastian Portfolio",
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
        <Navbar />
        <main> {children}</main>
      </body>
    </html>
  );
}
