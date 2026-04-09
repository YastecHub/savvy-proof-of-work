import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "IM_SAVVY | Web3 Portfolio",
  description:
    "Portfolio of IM_SAVVY — Web3 operator, alpha caller, and on-chain royalty. Proof of work. No cap.",
  other: {
    "format-detection": "telephone=no",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
  openGraph: {
    title: "IM_SAVVY — Web3 Operator & Community Architect",
    description:
      "I build operations & community architecture. Proof of work, real receipts, and results that speak.",
    url: "https://savvychad.com",
    siteName: "IM_SAVVY",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "IM_SAVVY — Web3 Portfolio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IM_SAVVY — Web3 Operator & Community Architect",
    description: "I build operations & community architecture. Proof of work, real receipts, and results that speak.",
    images: ["/api/og"],
  },
  metadataBase: new URL("https://savvychad.com"),
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
