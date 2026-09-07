"use client";
import { site } from "../../config/site";
import { waLink } from "../lib/utils";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-10 sm:pt-16 pb-10 sm:pb-14 border-b border-zinc-200 overflow-hidden bg-gradient-to-br from-amber-50/60 via-white to-white">
      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.3 }}
            className="inline-block bg-white px-3 sm:px-4 py-1.5 rounded-full border border-zinc-200 text-[11px] sm:text-xs font-semibold text-zinc-700 mb-4 shadow-sm"
          >
            🔥 Gorengan pagi ini, siap kirim sore ini!
          </motion.span>
          <h1 className="heading-serif text-[28px] sm:text-5xl leading-[1.15] text-zinc-900 text-balance">
            {site.name} — <span className="text-orange-500">cemilan</span> yang <span className="italic font-normal">bikin nagih, harga temenan.</span>
          </h1>
          <p className="mt-4 text-[15px] sm:text-lg text-zinc-600 max-w-xl leading-relaxed">
            Keripik gurih, basreng renyah, makaroni keju lumer. Semua digoreng <strong>tadi pagi</strong>. Masukin keranjang & checkout via WhatsApp!
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href="#produk" className="bg-[#C84B31] text-white px-6 sm:px-8 py-3.5 rounded-full font-semibold hover:bg-[#B03D27] active:bg-[#9A3320] transition shadow text-center min-h-11 grid place-items-center">
              Lihat Menu Jajanan
            </a>
            <a href={waLink(site.waNumber)} target="_blank" rel="noopener noreferrer" className="border border-zinc-300 bg-white px-6 sm:px-8 py-3.5 rounded-full font-semibold hover:bg-zinc-50 active:bg-zinc-100 text-zinc-800 transition text-center min-h-11 grid place-items-center">
              Chat Admin WA
            </a>
          </div>
          <p className="mt-5 text-xs sm:text-sm text-zinc-500 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse shrink-0" />
            Gratis ongkir Jabodetabek • Min. pesan 50k
          </p>
        </motion.div>
      </div>
    </section>
  );
}
