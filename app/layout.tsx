import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://camper-booking-platform.vercel.app"),

  title: {
    default: "TravelTrucks",
    template: "%s | TravelTrucks",
  },

  description:
    "TravelTrucks is a modern web application for renting camper vans. Browse, filter, and book campers easily.",

  keywords: [
    "campers",
    "van rental",
    "travel",
    "road trip",
    "camper booking",
  ],

  authors: [{ name: "Serhii Yemets" }],

  openGraph: {
    title: "TravelTrucks",
    description:
      "Find and book your perfect camper van for your next adventure.",
    url: "https://camper-booking-platform.vercel.app",
    siteName: "TravelTrucks",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "uk_UA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TravelTrucks",
    description:
      "Browse and book campers easily with TravelTrucks.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/icons/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
              <Toaster position="top-right" />
        </TanStackProvider>
      </body>
    </html>
  );
};


