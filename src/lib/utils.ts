import type { CartItem } from "./cart";

export function waLink(n: string, msg = "Halo Jajan Yuks, mau pesan") {
  return `https://wa.me/${n}?text=${encodeURIComponent(msg)}`;
}

export function formatRupiah(n: number) {
  return `Rp ${n.toLocaleString("id-ID")}`;
}

export function priceToNumber(price: string): number {
  const normalized = price.toLowerCase().replace("k", "000").replace(/\D/g, "");
  const num = parseInt(normalized, 10);
  return Number.isNaN(num) ? 0 : num;
}

export function buildCartWaMessage(items: CartItem[], total: number, nama: string, alamat: string, catatan: string) {
  const lines = items.map((it, idx) => `${idx + 1}. ${it.name} x${it.qty} — ${formatRupiah(it.price * it.qty)}`);
  return [
    "Halo Jajan Yuks, mau pesan:",
    "",
    ...lines,
    "",
    `Total: ${formatRupiah(total)}`,
    "",
    `Nama: ${nama}`,
    `Alamat: ${alamat}`,
    `Catatan: ${catatan}`,
  ].join("\n");
}
