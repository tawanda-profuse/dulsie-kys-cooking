import { Aclonica, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const aclonica = Aclonica({
  variable: "--font-aclonica",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dulsie Kys Cooking",
  description: "Duslie Fadzai Mudekwa is the Executive Chef and Owner of Dulsie Kys Cooking School. A pioneer in the culinary arts, she is renowned as an Edible Insects Chef and serves as the host of a popular TV cooking show. She also presents The Menu on radio and is the Founder of Dulsie Investment Pvt Ltd. Dulsie holds an MBA in Global Entrepreneurship from the Catholic University of Zimbabwe and an additional Master of Business Administration from the Catholic University of Italy.",
  keywords: "Cooking School, Catering, Chef, Culinary Arts, Executive Chef, organic food, edible insects, African Food, Mentorship, Food, Birthday Cakes, Corporate Catering, Wedding Catering, Galas & Luncheons, Breakfast Meetings, Anniversary Catering."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${aclonica.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
