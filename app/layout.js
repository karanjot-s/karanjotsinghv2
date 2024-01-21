import { Montserrat } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Karanjot Singh",
  description: "Karanjot Singh Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main className="dark text-foreground bg-background">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
