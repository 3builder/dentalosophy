import { Chivo, Rufina } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Navbar";
import { ChatUs } from "@components/ChatUs";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

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
      <head>
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${
            process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX"
          }');`}
        </Script>

        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${
            process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXX"
          }`}
        ></Script>
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXX"}');`}
        </Script>
      </head>
      <body
        className={`${chivo.variable} ${rufina.variable} font-serif font-sans antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${
              process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX"
            }`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main style={{ minHeight: "calc(100vh - 168px)" }}>
          {children}
          <ChatUs />
          <Analytics />
        </main>
        <footer className="py-2 text-center text-gray mt-20">
          Dentalosophy &copy; {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
