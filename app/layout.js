import { Montserrat } from "next/font/google";
import Provider from "./Provider";
import Navbar from "./common/Navbar";

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
          <main className="dark text-foreground bg-background">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
