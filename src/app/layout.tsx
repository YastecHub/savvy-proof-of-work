import type { Metadata } from "next";
import { Cinzel, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IM_SAVVY | Web3 Portfolio",
  description:
    "Portfolio of IM_SAVVY — Web3 operator, alpha caller, and on-chain royalty. Proof of work. No cap.",
  openGraph: {
    title: "IM_SAVVY — Web3 Operator & Alpha Caller",
    description:
      "I orchestrate clarity in the digital crowd. Proof of work, on-chain receipts, and alpha calls from IM_SAVVY.",
    url: "https://imsavvy.xyz",
    siteName: "IM_SAVVY",
    images: [{ url: "/avatar.jpg", width: 1200, height: 630, alt: "IM_SAVVY — Web3 Portfolio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IM_SAVVY — Web3 Operator & Alpha Caller",
    description: "Proof of work. On-chain receipts. No cap.",
    images: ["/avatar.jpg"],
  },
  metadataBase: new URL("https://imsavvy.xyz"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${cinzel.variable} ${ibmPlexMono.variable} antialiased bg-base text-t-primary font-mono`}
      >
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
