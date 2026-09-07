"use client";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "../../config/site";
import { useCart } from "../lib/cart";

const links = ["Produk", "Tentang", "Testimoni", "FAQ"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-zinc-200">
      <nav className="max-w-6xl mx-auto px-4 h-[56px] sm:h-16 flex items-center justify-between gap-3">
        <a href="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl text-zinc-700 shrink-0">
          <ShoppingBag className="w-6 h-6 text-orange-500 shrink-0" />
          <span className="truncate">{site.name}</span>
        </a>
        <ul className="hidden md:flex gap-6 text-sm font-medium text-zinc-700">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-orange-500 transition py-2">{l}</a></li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button onClick={() => setCartOpen(true)} className="relative border border-[#E8E2DB] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#FAF7F2] active:bg-[#E8E2DB] flex items-center gap-2 min-h-10">
            <ShoppingBag className="w-4 h-4" /> Keranjang {count > 0 && <span className="bg-[#C84B31] text-white text-[11px] font-bold min-w-5 h-5 px-1 rounded-full grid place-items-center">{count}</span>}
          </button>
          <a href="#produk" className="bg-[#C84B31] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#B03D27] active:bg-[#9A3320] transition min-h-10 grid place-items-center">Lihat etalase</a>
        </div>
        <div className="flex items-center gap-1 md:hidden shrink-0">
          <button onClick={() => setCartOpen(true)} className="relative min-w-11 min-h-11 grid place-items-center rounded-full hover:bg-zinc-100 active:bg-zinc-200" aria-label="Keranjang">
            <ShoppingBag className="w-5 h-5" />
            {count > 0 && <span className="absolute -top-0.5 -right-0.5 bg-[#C84B31] text-white text-[10px] font-bold min-w-4 h-4 px-1 rounded-full grid place-items-center">{count}</span>}
          </button>
          <button onClick={() => setOpen(!open)} className="min-w-11 min-h-11 grid place-items-center rounded-full hover:bg-zinc-100 active:bg-zinc-200" aria-label="Menu" aria-expanded={open}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden bg-white border-t px-4 pt-3 pb-[max(16px,env(safe-area-inset-bottom))] space-y-2">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="block text-[15px] font-medium text-zinc-700 active:text-orange-500 py-2.5" onClick={() => setOpen(false)}>{l}</a>
          ))}
          <button onClick={() => { setOpen(false); setCartOpen(true); }} className="mt-2 block w-full border border-[#E8E2DB] px-5 py-3 rounded-full text-sm font-medium text-center active:bg-[#FAF7F2] min-h-11">Lihat keranjang ({count})</button>
        </div>
      )}
    </header>
  );
}
