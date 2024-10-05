import Footer from '@/components/footer';
import { Navbar } from '@/components/navbar';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./theme/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const navItems = [
  { nome: 'Home', link: '/' },
  { nome: 'Code', link: '/code' },
  { nome: 'Curriculum', link: '/curriculum' },
];

export const metadata: Metadata = {
  title: "Lademir Júnior",
  description: "Lademir Júnior's personal website",
  icons: {
    icon: 'icon.ico',
    shortcut: 'icon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar itens={navItems} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
