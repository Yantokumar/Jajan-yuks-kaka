"use client";
import { useCart } from "../lib/cart";
import { buildCartWaMessage, formatRupiah, waLink } from "../lib/utils";
import { site } from "../../config/site";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CartDrawer() {
  const { items, updateQty, remove, total, count, open, setOpen, clear } = useCart();
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [catatan, setCatatan] = useState("");

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  const msg = buildCartWaMessage(items, total, nama || "(Belum diisi)", alamat || "(Belum diisi)", catatan || "-");
  const href = waLink(site.waNumber, msg);
  const valid = nama.trim().length >= 2 && alamat.trim().length >= 8;

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="relative flex flex-col w-full max-w-[440px] max-h-[100dvh] bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between px-4 sm:px-6 h-14 border-b border-[#E8E2DB] shrink-0">
              <h2 className="font-semibold text-[15px] sm:text-base">Keranjang <span className="text-sm font-normal text-[#8A8480]">({count} item)</span></h2>
              <button onClick={() => setOpen(false)} className="min-w-10 min-h-10 grid place-items-center rounded-full hover:bg-[#FAF7F2] active:bg-[#E8E2DB] border border-transparent hover:border-[#E8E2DB]" aria-label="Tutup">
                <X className="w-4 h-4" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 grid place-items-center p-8 text-center">
                <div>
                  <p className="font-medium">Keranjang masih kosong</p>
                  <p className="text-sm text-[#8A8480] mt-1">Tambah jajanan dari etalase, nanti total kehitung otomatis.</p>
                  <button onClick={() => setOpen(false)} className="mt-4 bg-[#262320] text-white px-5 py-3 rounded-full text-sm font-medium active:bg-black min-h-11">Lihat etalase</button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-auto overscroll-contain divide-y divide-[#E8E2DB]">
                  {items.map((it) => (
                    <div key={it.id} className="px-4 sm:px-6 py-4 flex gap-3 items-center">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium leading-tight truncate">{it.name}</p>
                        <p className="text-xs text-[#8A8480]">{formatRupiah(it.price)} / pouch</p>
                        <p className="text-sm font-semibold mt-1">{formatRupiah(it.price * it.qty)}</p>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0 bg-[#FAF7F2] border border-[#E8E2DB] rounded-full p-1">
                        <button onClick={() => updateQty(it.id, it.qty - 1)} className="w-8 h-8 grid place-items-center rounded-full hover:bg-white active:bg-zinc-100" aria-label="Kurangi"><Minus className="w-3.5 h-3.5" /></button>
                        <span className="w-6 text-center text-sm font-semibold">{it.qty}</span>
                        <button onClick={() => updateQty(it.id, it.qty + 1)} className="w-8 h-8 grid place-items-center rounded-full hover:bg-white active:bg-zinc-100" aria-label="Tambah"><Plus className="w-3.5 h-3.5" /></button>
                        <button onClick={() => remove(it.id)} className="ml-1 w-8 h-8 grid place-items-center rounded-full hover:bg-red-50 active:bg-red-100 text-[#8A8480] hover:text-red-600" aria-label="Hapus"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#E8E2DB] bg-[#FAF7F2] p-4 sm:p-6 space-y-3 pb-[max(16px,env(safe-area-inset-bottom))] shrink-0 overflow-auto max-h-[52dvh] sm:max-h-none">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">Nama *</label>
                      <input
                        type="text"
                        inputMode="text"
                        autoComplete="name"
                        placeholder="Nama penerima"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        className="w-full bg-white border border-[#E8E2DB] rounded-xl px-4 py-3 text-[16px] sm:text-sm focus:outline-none focus:border-[#C84B31] focus:ring-1 focus:ring-[#C84B31]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">Alamat lengkap *</label>
                      <textarea
                        rows={2}
                        autoComplete="street-address"
                        placeholder="Jalan, no. rumah, patokan, kecamatan"
                        value={alamat}
                        onChange={(e) => setAlamat(e.target.value)}
                        className="w-full bg-white border border-[#E8E2DB] rounded-xl px-4 py-2.5 text-[16px] sm:text-sm focus:outline-none focus:border-[#C84B31] focus:ring-1 focus:ring-[#C84B31]/20 resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">Catatan (opsional)</label>
                      <input
                        type="text"
                        placeholder="Level pedas / titip satpam, dll"
                        value={catatan}
                        onChange={(e) => setCatatan(e.target.value)}
                        className="w-full bg-white border border-[#E8E2DB] rounded-xl px-4 py-3 text-[16px] sm:text-sm focus:outline-none focus:border-[#C84B31] focus:ring-1 focus:ring-[#C84B31]/20"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between text-sm font-bold pt-2 border-t border-[#E8E2DB]">
                    <span>Total</span>
                    <span className="text-[#C84B31]">{formatRupiah(total)}</span>
                  </div>

                  {valid ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" onClick={() => clear()} className="block text-center bg-[#C84B31] hover:bg-[#B03D27] active:bg-[#9A3320] text-white font-semibold py-3.5 rounded-full transition min-h-11 grid place-items-center">
                      Kirim Pesanan via WhatsApp
                    </a>
                  ) : (
                    <button disabled className="w-full text-center bg-zinc-300 text-white font-semibold py-3.5 rounded-full cursor-not-allowed min-h-11">
                      Isi nama & alamat dulu
                    </button>
                  )}
                  <p className="text-[11px] text-center text-[#8A8480] leading-relaxed">Alamat diisi di sini, di WA tinggal klik Kirim. Tidak perlu ketik ulang.</p>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
