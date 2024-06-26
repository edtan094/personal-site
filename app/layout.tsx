import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./src/components/common/navbar";
import { ApolloWrapper } from "@/lib/apollo-provider";
import background from "./background.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edwin Tan | Full Stack Developer",
  description: "Edwin's personal site",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    siteName: "Edwin Tan",
    title: "Edwin Tan",
    description: "Welcome to Edwin's personal website",
    type: "website",
    images: ["/personal-site.png"],
  },
  keywords: [
    "Edwin Tan",
    "developer",
    "software engineer",
    "portfolio",
    "personal website",
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} py-32 px-5 h-screen`}
        data-theme="dark"
      >
        <div className={background.background}></div>
        <ApolloWrapper>
          <Navbar />
          <div className="relative">{children}</div>
        </ApolloWrapper>
      </body>
    </html>
  );
}
