import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import { MeshGradient } from "@/components/global/MeshGradient";
import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
const manrope = Manrope({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: 'transparent',
};

export const metadata: Metadata = {
  title: "Template",
  description: "a gay nigga template yahurd.",
  twitter: {
    site: 'https://nigga.com/',
    card: 'player'
  },
  openGraph: {
    url: 'https://nigga.com/',
    type: 'website',
    title: 'Template',
    siteName: 'nigga.com',
    description: "a gay nigga template yahurd.",
    images: [
      {
        url: '/yes.png',
        width: 500,
        height: 500,
        alt: 'Template'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={manrope.className}>
        <MeshGradient />
        <Navbar title="Template" link="https://discord.com/oauth2/" />
        {children}
        <Footer title="Template" invite="https://discord.com/oauth2" documentation="https://docs.com" support="https://discord.gg/yes" />
        </body>
    </html>
  );
}
