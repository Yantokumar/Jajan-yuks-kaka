"use client";
import { Truck, ShieldCheck, BadgePercent, Clock } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Truck, title: "Gratis Ongkir", desc: "Area Jabodetabek minimal belanja 50k. Luar kota subsidi ongkir.", accent: "border-l-4 border-l-orange-400" },
  { icon: ShieldCheck, title: "Goreng Sendiri", desc: "Setiap hari mulai jam 5 pagi. Fresh tanpa pengawet.", accent: "border-l-4 border-l-stone-400" },
  { icon: BadgePercent, title: "Harga Ramah", desc: "Mulai 12k saja per porsi. Paket hemat ada juga.", accent: "border-l-4 border-l-amber-400" },
  { icon: Clock, title: "Sameday Ready", desc: "Order pagi, kirim sore. Nggak pake nunggu lama.", accent: "border-l-4 border-l-orange-300" },
];

export function Features() {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`p-6 bg-white rounded-2xl border border-[#E8E2DB] shadow-sm hover:shadow-md transition-all duration-300 ${accent} flex flex-col justify-between h-full`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF1E6] grid place-items-center mb-4">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-semibold text-lg text-zinc-800">{title}</h3>
                <p className="mt-2 text-sm text-[#6B6560] leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}