import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StoreProvider from "@/store/storeProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FlashMart",
  description: "A quick-commerce, e-commerce, online, delivery service",
};

export default function RootLayout({ children }) {


  return (
    <StoreProvider>
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
    </StoreProvider>
  );
}
