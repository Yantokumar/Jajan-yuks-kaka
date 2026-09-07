import { site } from "../../config/site";

export function Footer() {
  return (
    <footer className="py-8 bg-[#1A1816] text-[#8A8480] text-sm border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row justify-between gap-3">
        <p>© {new Date().getFullYear()} {site.name} — dapur kecil, rasa nggak kecil.</p>
        <p className="text-xs">Bukan pabrik • Goreng manual tiap pagi • Foto asli, bukan AI</p>
      </div>
    </footer>
  );
}
