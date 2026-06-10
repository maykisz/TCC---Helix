import "./globals.css";

export const metadata = {
  title: "Hélix Software",
  description: "Soluções tecnológicas sob medida para empresas que buscam crescimento acelerado."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
