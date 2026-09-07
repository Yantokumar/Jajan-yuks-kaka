"use client";
import { motion } from "framer-motion";

const faqs = [
  { q: "Minimal order berapa?", a: "Nggak ada minimal. Cuma kalau di bawah 50k, ongkir ditanggung pembeli ya. Di atas 50k gratis ongkir Jabodetabek." },
  { q: "Bayarnya gimana?", a: "Transfer, QRIS, atau COD buat yang dekat. Mau bayar pas kurir datang juga bisa — janji." },
  { q: "Tahan berapa lama?", a: "Suhu ruang 7–14 hari (tutup rapat). Masuk kulkas bisa 30 hari. Jangan dijemur matahari langsung." },
  { q: "Bisa kirim luar kota / luar pulau?", a: "Bisa. Packing kardus + bubble wrap. Estimasi 1–3 hari tergantung kurir." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs tracking-[0.18em] uppercase text-[#8A8480] font-semibold">— Tanya dulu boleh</p>
          <h2 className="heading-serif text-[32px] leading-none mt-2">Yang sering <span className="italic font-normal">ditanyain</span></h2>
          <p className="mt-3 text-sm text-[#6B6560]">Kalau nggak ada jawabannya di sini, langsung WA aja — dibales manually, bukan bot.</p>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.details
              key={f.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="group rounded-2xl border border-[#E8E2DB] bg-white px-6 py-4 open:bg-[#FFF8F2]"
            >
              <summary className="font-medium cursor-pointer list-none flex justify-between items-center gap-4">{f.q}<span className="shrink-0 w-7 h-7 rounded-full border border-[#E8E2DB] grid place-items-center text-[#8A8480] group-open:rotate-45 transition">+</span></summary>
              <p className="mt-3 text-sm leading-6 text-[#6B6560]">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
