import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Darker_Grotesque } from "next/font/google";

export const metadata = {
  title: "Todo list Application",
  description: "A todo list app where users can create their daily tasks!",
};

const dG = Darker_Grotesque({
  weight: ["800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dG.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
