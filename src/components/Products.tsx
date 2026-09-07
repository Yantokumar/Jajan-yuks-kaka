"use client";
import { useCart } from "../lib/cart";
import { formatRupiah, priceToNumber } from "../lib/utils";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  { id: "keripik-kentang-balado", name: "Keripik Kentang Balado", price: "15k", tag: "Paling laku", desc: "Iris tipis, balado nampol — bukan bubuk micin doang." },
  { id: "basreng-pedas-daun-jeruk", name: "Basreng Pedas Daun Jeruk", price: "18k", tag: "Pedas nagih", desc: "Bakso goreng garing, wangi daun jeruk asli, level 3." },
  { id: "makaroni-keju-lumer", name: "Makaroni Keju Lumer", price: "12k", tag: "Anak kos fav", desc: "Spiral crunchy, keju gurih, porsi 100g kenyang." },
  { id: "cireng-isi-ayam-suwir", name: "Cireng Isi Ayam Suwir", price: "16k", tag: "Baru", desc: "Luar garing dalam lumer, ayam pedasnya berlimpah." },
  { id: "popcorn-caramel-butter", name: "Popcorn Caramel Butter", price: "14k", tag: "Manis legit", desc: "Wangi butter, karamel nggak eneg, buat nonton." },
  { id: "kue-cubit-setengah-matang", name: "Kue Cubit Setengah Matang", price: "20k", tag: "Lumer", desc: "Adonan lembut, topping keju / meses seenak kafe." },
];

export function Products() {
  const { add, items } = useCart();
  return (
    <section id="produk" className="py-10 sm:py-16 bg-[#FAF7F2] border-y border-[#E8E2DB]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-[#8A8480] font-semibold">— Etalase hari ini</p>
            <h2 className="heading-serif text-2xl sm:text-4xl leading-tight mt-2">Yang lagi digoreng <span className="italic font-normal">hari ini</span></h2>
          </div>
          <p className="text-sm text-[#8A8480] sm:max-w-xs leading-relaxed">Pilih jajanan, isi alamat di keranjang, kirim ke WA — beres.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((p, index) => {
            const priceNum = priceToNumber(p.price);
            const inCart = items.find((i) => i.id === p.id);
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.2) }}
                className="bg-white border border-[#E8E2DB] rounded-2xl p-5 relative flex flex-col justify-between shadow-sm active:border-[#C84B31]/40"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold bg-[#FFF1E6] text-[#C84B31] border border-[#E8CFC2] rounded-full px-2.5 py-1 whitespace-nowrap">{p.tag}</span>
                    <span className="text-[11px] text-[#8A8480] shrink-0">100g • fresh</span>
                  </div>
                  <div className="mt-4 h-28 sm:h-32 rounded-xl bg-[#FAF7F2] border border-dashed border-[#E8E2DB] flex items-center justify-center text-xs text-[#8A8480] text-center p-2">
                    Foto produk asli • {p.id}.jpg
                  </div>
                  <h3 className="mt-4 font-semibold text-[15px] sm:text-base leading-snug">{p.name}</h3>
                  <p className="text-[13px] sm:text-sm text-[#6B6560] mt-1 leading-relaxed">{p.desc}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E8E2DB]/50 flex items-center justify-between gap-3">
                  <p className="text-base sm:text-lg font-bold text-zinc-900 whitespace-nowrap">{formatRupiah(priceNum)} <span className="text-xs font-normal text-[#8A8480]">/pouch</span></p>
                  {inCart ? (
                    <span className="inline-flex items-center gap-1.5 bg-[#FFF1E6] border border-[#E8CFC2] text-[#C84B31] text-[13px] sm:text-sm font-semibold px-3.5 sm:px-4 py-2.5 rounded-full min-h-10">
                      <Check className="w-4 h-4" /> {inCart.qty} di keranjang
                    </span>
                  ) : (
                    <button
                      onClick={() => add({ id: p.id, name: p.name, price: priceNum })}
                      className="bg-[#262320] text-white text-[13px] sm:text-sm font-medium px-4 py-2.5 rounded-full active:bg-black active:scale-[0.97] transition min-h-10"
                    >
                      + Keranjang
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
