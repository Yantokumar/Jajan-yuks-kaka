"use client";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Products } from "../components/Products";
import { Testimonials } from "../components/Testimonials";
import { About } from "../components/About";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { CartProvider } from "../lib/cart";
import { CartDrawer } from "../components/CartDrawer";
import { CartButton } from "../components/CartButton";

export default function Home() {
  return (
    <CartProvider>
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Features />
          <Products />
          <Testimonials />
          <About />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <CartButton />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
