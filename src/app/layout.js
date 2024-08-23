import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import { CartProvider } from "@/components/cart/CartContext";

const inter = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "Ecommerce Website",
  description: "Discover a world of fashion, electronics, home goods, and more. Enjoy free shipping, easy returns, and top-notch customer service. Shop now!",
};

export default function RootLayout({ children }) {
  return (
    <CartProvider>
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
    </CartProvider>
  );
}
