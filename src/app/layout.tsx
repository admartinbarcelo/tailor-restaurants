import type { Metadata } from "next";
import "./globals.css";

import Nav from "../components/navbar";
import Footer from "../components/footer";

import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "TailorHub Restaurants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="grid min-h-screen grid-rows-[auto,1fr,auto]">
          <Nav />
          <div className="w-full px-4">{children}</div>
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
