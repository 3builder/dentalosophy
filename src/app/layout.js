import { Chivo, Rufina } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Navbar";
import { ChatUs } from "@components/ChatUs";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import Image from "next/image";
import FacebookPixelTracker from "@components/FacebookPixelTracker";
import { Suspense } from "react";

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
  title: "Dentalosophy Klinik Gigi Terbaik Dan Terpercaya",
  robots: "index, follow",
  alternates: {
    canonical: "https://dentalosophy.id/",
  },
  description: "Dentalosophy klinik gigi terbaik dan terpercaya untuk mengatasi seluruh permasalahan gigi dan mulut anda dengan harga yang terjangkau.",
  openGraph: {
    title: "Dentalosophy Klinik Gigi Terbaik Dan Terpercaya",
    description: "Dentalosophy klinik gigi terbaik dan terpercaya untuk mengatasi seluruh permasalahan gigi dan mulut anda dengan harga yang terjangkau.",
    url: "https://dentalosophy.id",
    siteName: "Dentalosophy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://wp.dentalosophy.id/wp-content/uploads/2021/12/cropped-tooth.png",
        width: 512,
        height: 512,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentalosophy Klinik Gigi Terbaik Dan Terpercaya",
    description: "Dentalosophy klinik gigi terbaik dan terpercaya untuk mengatasi seluruh permasalahan gigi dan mulut anda dengan harga yang terjangkau.",
    images: ["https://wp.dentalosophy.id/wp-content/uploads/2021/12/cropped-tooth.png"],
  },
  other: {
    "article:modified_time": "2025-10-20T11:41:23+00:00",
  },
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

        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${
            process.env.NEXT_PUBLIC_FB_PIXEL_ID || "0000000000000000"
          }');`}
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
        <Image
          src={`https://www.facebook.com/tr?id=${
            process.env.NEXT_PUBLIC_FB_PIXEL_ID || "0000000000000000"
          }&ev=PageView`}
          alt=""
          width={1}
          height={1}
          unoptimized
          style={{ display: "none" }}
          priority
        />
        <Navbar />
        <Suspense fallback={null}>
          <FacebookPixelTracker />
        </Suspense>
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
