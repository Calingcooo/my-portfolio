// app/layout.js
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import MouseGradient from "./components/MouseGradient/MouseGradient";
import { ThemeProvider } from "./context/ThemeProvider";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
  title: "Jhon Edmir Calingco",
  description:
    "Welcome to my online portfolio, crafted with care and creativity by Jhon Edmir Calingco using Next.js. Dive into a showcase of my skills, projects, and experiences, presented with an elegant touch and powered by modern web technologies. Explore my journey, discover my expertise, and get inspired by the passion driving my work. Let this portfolio be a window into my world, where innovation meets design and where possibilities are endless. Join me on this digital journey, and let's create something remarkable together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ThemeProvider>
          <MouseGradient>
            <Header />
            <main className="w-full h-full my-5">{children}</main>
            <Navigation />
          </MouseGradient>
        </ThemeProvider>
      </body>
    </html>
  );
}
