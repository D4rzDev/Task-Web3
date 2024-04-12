import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./themeProvider";
import { Web3Modal } from "@/context/web3modal";

const poppins = Poppins({ subsets: ["latin"], weight: ['100','200','300','400','500','600','700','800','900'] });

export const metadata: Metadata = {
  title: 'Web3Modal',
  description: 'Web3Modal Task'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=' grid place-items-center'>
        <ThemeProvider  attribute="class" defaultTheme="system" enableSystem>
          <Web3Modal>
          {children}
          </Web3Modal>
        </ThemeProvider>

        </body>
    </html>
  );
}
