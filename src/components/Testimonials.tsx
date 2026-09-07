"use client";
import { motion } from "framer-motion";

const data = [
  { name: "Sinta — langganan Kemang", text: "Basreng daun jeruknya nggak pelit bumbu. Tiap gigit wangi, pedesnya nempel tapi nggak nyiksa.", meta: "Order ke-7 • via WA" },
  { name: "Riko — beli buat kantor, Bekasi", text: "Pesen 30 pouch buat hampers Lebaran, packing rapi + kartu tulisan tangan. Bos sampai nanya vendornya siapa.", meta: "Paket hampers • 30 pouch" },
  { name: "Ayu — ibu 2 anak, Depok", text: "Anakku picky eater, tapi makaroni kejunya ludes. Nggak terlalu asin, kejunya berasa.", meta: "Repeat 4x" },
];

export function Testimonials() {
  return (
    <section id="testimoni" className="py-16 sm:py-20 bg-white border-y border-[#E8E2DB]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="heading-serif text-[28px] leading-none">Kata yang udah <span className="italic font-normal">nyoba duluan</span></h2>
          <p className="hidden sm:block text-xs text-[#8A8480]">Screenshot WA asli — bukan karangan ✨</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {data.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="rounded-2xl p-6 bg-[#FAF7F2] border border-[#E8E2DB] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-[15px] leading-6">"{t.text}"</p>
              <p className="mt-4 text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-[#8A8480]">{t.meta}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-[#8A8480]">Mau lihat bukti chat? <a href="https://instagram.com/jajanyuks" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted">Cek highlight IG kami</a> — story testimoni update tiap minggu.</p>
      </div>
    </section>
  );
}
