import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // or ["100", "300", "400", "500", "600", "700"]
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
        <header className="bg-gray-900 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">
              <a href="/">Jared Harrison</a>
            </h1>
            <ul className="flex gap-6 text-sm">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
