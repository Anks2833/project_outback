import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Wp_icon from "./Components/Wp_icon";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Outback Resorts",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar />
        {children}
        <Wp_icon />
      </body>
    </html>
  );
}
