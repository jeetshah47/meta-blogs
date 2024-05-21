import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/common/nav/nav";
import Footer from "./components/common/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meta Blogs",
  description: "A Free Metaverse Blog Aoo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " " + "bg-white dark:bg-dark-primary dark:text-white duration-300"}>
        <div className="flex-initial  w-3/5 py-4">
          <NavBar  />
        </div>
        <div className="flex-auto w-3/5">{children}</div>
        <div className="flex-initial w-full flex justify-center bg-white-footer dark:bg-black-footer">
          <Footer />
        </div>
      </body>
    </html>
  );
}
