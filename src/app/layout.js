import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FooterCTA from "@/components/common/FooterCTA";
import Instagram from "@/components/Instagram";
import Cart from "@/components/shop/Cart";
import Head from "next/head";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["500"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "",
  description:
    "Moons skaber rum for dig, der søger en pause fra hverdagen. Gennem saunagus, naturterapi, breathwork og traumeterapi guider vi dig nænsomt hjem i dig selv.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        <Header />
        {children}
        <Instagram />
        <FooterCTA />
        <Footer />
        <Cart />
      </body>
    </html>
  );
}
