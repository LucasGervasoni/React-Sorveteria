import "./globals.css";

import Topo from "@/componentes/Topo";
import Rodape from "@/componentes/Rodape"

export const metadata = {
  title: "Sorveteria",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topo/>
        {children}
        <Rodape/>
      </body>
    </html>
  );
}