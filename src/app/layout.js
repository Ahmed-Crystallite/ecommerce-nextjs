import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Header, Toaster } from "@/components";
import { CartProvider } from "@/components/cart/CartContext";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "Ecommerce Website",
  description: "Discover a world of fashion, electronics, home goods, and more. Enjoy free shipping, easy returns, and top-notch customer service. Shop now!",
};

export default function RootLayout({ children }) {
  return (
    <CartProvider>
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        <main>
          {children}
          <Toaster/>
        </main>
        <Footer/>
      </body>
    </html>
    </CartProvider>
  );
}
