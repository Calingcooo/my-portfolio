import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to Jhon Edmir Calingco's Online Portfolio",
  description:
    "Welcome to my online portfolio, crafted with care and creativity by Jhon Edmir Calingco using Next.js. Dive into a showcase of my skills, projects, and experiences, presented with an elegant touch and powered by modern web technologies. Explore my journey, discover my expertise, and get inspired by the passion driving my work. Let this portfolio be a window into my world, where innovation meets design and where possibilities are endless. Join me on this digital journey, and let's create something remarkable together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
