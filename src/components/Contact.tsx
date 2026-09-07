import { site } from "../../config/site";
import { waLink } from "../lib/utils";
import { MapPin, Phone } from "lucide-react";

function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Contact() {
  const igHandle = site.instagram.replace("@", "");
  return (
    <section id="kontak" className="py-16 sm:py-20 bg-[#262320] text-[#FAF7F2]">
      <div className="mx-auto max-w-6xl px-4 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-xs tracking-[0.18em] uppercase text-[#C4B8AD] font-semibold">— Mampir / chat</p>
          <h2 className="heading-serif text-[32px] leading-none mt-2">Mau tanya dulu <span className="italic font-normal text-[#E8CFC2]">juga boleh</span></h2>
          <p className="mt-3 text-sm text-[#C4B8AD]">Jam 08.00–20.00 WIB • Balas manual, bukan bot. Kalau agak telat, lagi goreng.</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-white/10 grid place-items-center shrink-0"><MapPin className="w-4 h-4" /></span>{site.address}</li>
            <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-white/10 grid place-items-center shrink-0"><Phone className="w-4 h-4" /></span><a href={waLink(site.waNumber)} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">{site.waNumber} (WhatsApp)</a></li>
            <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-white/10 grid place-items-center shrink-0"><Instagram className="w-4 h-4" /></span><a href={`https://instagram.com/${igHandle}`} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">{site.instagram}</a></li>
          </ul>
          <a href={waLink(site.waNumber)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-[#C84B31] px-6 py-3 rounded-full font-semibold hover:bg-[#B03D27] transition">Chat WhatsApp — dibales orang beneran</a>
        </div>
        <iframe title="Lokasi Jajan Yuks" src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`} className="w-full min-h-[340px] rounded-[18px] border border-white/10" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      </div>
    </section>
  );
}
