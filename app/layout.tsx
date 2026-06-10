import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Using Inter for standard UI text (highly readable, geometric)
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

// Using JetBrains Mono for technical details, tags, and code
const mono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Doe | Software Engineer",
  description: "Portfolio of John Doe, an early-career Software Engineer focusing on scalable frontend architectures, deterministic UIs, and robust full-stack systems.",
  keywords: ["Software Engineer", "Frontend", "Backend", "React", "TypeScript", "Next.js"],
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe | Software Engineer",
    description: "Software Engineer focusing on scalable frontend architectures and robust full-stack systems.",
    url: "https://yourdomain.com",
    siteName: "John Doe Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 'scroll-smooth' enables smooth anchor link navigation
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} font-sans bg-background text-foreground antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
