import { Chivo, Rufina } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Navbar";
import { ChatUs } from "@components/ChatUs";

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
});

const rufina = Rufina({
  variable: "--font-rufina",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  metadataBase: new URL("https://dentalosophy.id"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${chivo.variable} ${rufina.variable} font-serif font-sans antialiased`}
      >
        <Navbar />
        <main style={{ minHeight: "calc(100vh - 168px)" }}>
          {children}
          <ChatUs />
        </main>
        <footer className="py-2 text-center text-gray mt-20">
          Dentalosophy &copy; {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
