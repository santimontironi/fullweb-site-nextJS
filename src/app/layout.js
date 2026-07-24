import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/ui/Header";
import Footer from "@/components/landing/Footer";
import AosInit from "@/components/ui/AosInit";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "FullWeb - Desarrollo de Software",
    template: "%s | FullWeb",
  },
  description:
    "Una agencia de desarrollo de software enfocada en transformar ideas en soluciones digitales bien pensadas, funcionales y orientadas a resultados.",
  icons: {
    icon: "/images/logo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <AosInit />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}