import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helix",
  description: "Estúdio de desenvolvimento web para criar software moderno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
