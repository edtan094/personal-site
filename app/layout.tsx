import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./src/components/common/navbar";
import { ApolloWrapper } from "@/lib/apollo-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edwin Tan | Full Stack Developer",
  description: "Edwin's personal site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} py-32 px-5 md:px-36 h-screen`}
        data-theme="light"
      >
        <ApolloWrapper>
          <Navbar />
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}
