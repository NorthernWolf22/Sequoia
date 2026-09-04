import type { Metadata } from "next";
// this imports a function called Inter provided by next.js from google fonts
import { Inter } from "next/font/google";
import { League_Gothic } from "next/font/google";
import "./globals.css";

//Modules
import HeaderModule from "@/modules/HeaderModule";
import FooterModule from "@/modules/FooterModule";

// It fetches Inter from Google Fonts.
// It generates optimised font files (woff2).
// It serves them locally (no external Google request).
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  // next generates a class (__variable_abc123) which has a variable (--font-inter) whose value is the inter font 
  // .__variable_abc123 {
  //   --font-inter: 'Inter', ui - sans - serif, system - ui;
  //}
});

const league_gothic = League_Gothic({
  variable: "--font-league-gothic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sequoia",
  description: "A B2B marketing agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // apply the generated class to the html element e.g. class="__variable_abc123" making this class and therefore the inter font variable it contains globally accessible
    <html lang="en" className={`${inter.variable} ${league_gothic.variable} scroll-smooth`}>
      <body>
        <main>
          <HeaderModule />
          {children}
          <FooterModule />
        </main>
      </body>
    </html>
  );
}
