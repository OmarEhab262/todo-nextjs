import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";

export const metadata: Metadata = {
  title: "Todo App ",
  description: "Todo App with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
