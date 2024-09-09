import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const viewport: Viewport = {
    themeColor: "#000001",
};

export const metadata: Metadata = {

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={manrope.className}>
                {children}
            </body>
        </html>
    );
}
