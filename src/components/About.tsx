"use client";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="tentang" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs tracking-[0.18em] uppercase text-[#8A8480] font-semibold">— Cerita dapur</p>
          <h2 className="heading-serif text-[32px] leading-none mt-2">Dapur kecil, <span className="italic font-normal">gorengan tiap hari</span> sejak 2020</h2>
          <p className="mt-4 text-[15px] leading-7 text-[#6B6560]">Bukan pabrik. Kami goreng di dapur rumah, pagi-pagi sebelum subuh. Minyak ganti tiap batch, bumbu racik sendiri — bukan bubuk instan kiloan. Makanya rasanya konsisten, nggak bau tengik.</p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="bg-white border border-[#E8E2DB] rounded-2xl py-4">
              <p className="heading-serif text-2xl leading-none">1.200+</p>
              <p className="text-xs text-[#8A8480] mt-1">pelanggan</p>
            </div>
            <div className="bg-white border border-[#E8E2DB] rounded-2xl py-4">
              <p className="heading-serif text-2xl leading-none">Tiap pagi</p>
              <p className="text-xs text-[#8A8480] mt-1">goreng fresh</p>
            </div>
            <div className="bg-white border border-[#E8E2DB] rounded-2xl py-4">
              <p className="heading-serif text-2xl leading-none">No MSG</p>
              <p className="text-xs text-[#8A8480] mt-1">berlebih</p>
            </div>
          </div>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex gap-2"><span className="text-[#C84B31]">—</span> Bisa custom hampers & paket arisan/kantor</li>
            <li className="flex gap-2"><span className="text-[#C84B31]">—</span> Terima reseller, harga khusus mulai 20 pouch</li>
            <li className="flex gap-2"><span className="text-[#C84B31]">—</span> Packing kardus + bubble, aman di ekspedisi</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-[22px] border border-[#E8E2DB] bg-white p-2 rotate-[0.6deg]">
            <div className="aspect-[4/3] rounded-[16px] bg-[#FAF7F2] border border-dashed border-[#E8D9CC] flex flex-col items-center justify-center text-center p-6">
              <p className="text-sm font-semibold">Foto dapur asli di sini</p>
              <p className="text-xs text-[#8A8480] mt-1">Ganti dengan <code className="bg-white border px-1 rounded">/public/about/dapur.jpg</code></p>
              <p className="text-xs text-[#8A8480] mt-3 max-w-[28ch]">Foto candid: wajan, sutil kayu, celemek tepung — pencahayaan jendela pagi, bukan studio.</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-2 bg-[#262320] text-white text-xs font-semibold px-3 py-2 rounded-full rotate-[-2deg] shadow">Goreng jam 05.00 • Kirim jam 10.00</div>
        </motion.div>
      </div>
    </section>
  );
}
