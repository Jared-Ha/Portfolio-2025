import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Jared Harrison's Developer Portfolio",
  description: "Full Stack Web Developer portfolio site with projects and info",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-white text-gray-900">
        <Header />
        <main className="mx-auto max-w-7xl px-6 md:px-16 lg:px-40">
          {children}
        </main>
      </body>
    </html>
  );
}
