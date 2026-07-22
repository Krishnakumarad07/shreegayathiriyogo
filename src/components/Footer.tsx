import { Heart, Sparkles, Youtube, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { IMAGES, FALLBACK_IMAGES } from "../assets-data";
import SafeImage from "./SafeImage";

interface FooterProps {
  onOpenJoinModal?: (program?: string) => void;
}

export default function Footer({ onOpenJoinModal }: FooterProps) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-900 pt-16 pb-8 relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-900 text-left">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleScrollTo("home")}>
              <SafeImage 
                src={IMAGES.logo} 
                fallbackSrc={FALLBACK_IMAGES.logo}
                alt="Shree Gayathri Yoga Logo" 
                className="w-12 h-12 rounded-full border border-stone-800"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="font-display font-black text-lg text-stone-100 tracking-tight leading-none">
                  Shree Gayathri Yoga
                </h3>
                <p className="text-[10px] font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 bg-clip-text text-transparent uppercase tracking-widest leading-none mt-1">
                  Yoga • Meditation • Lifestyle
                </p>
              </div>
            </div>

            <p className="mt-4 text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Shree Gayathri Yoga Centre serves the Madurai community by delivering traditional and therapeutic yoga sequences intended to cultivate complete holistic stability, spiritual peace, and physical vigor.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.youtube.com/@shreeGayathriYoga"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-red-500/10 hover:bg-red-600 text-red-500 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-red-500/20"
                title="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/shreegayathriyoga/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-pink-500/10 hover:bg-pink-600 text-pink-500 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-pink-500/20"
                title="Instagram Page"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {onOpenJoinModal && (
              <button
                onClick={() => onOpenJoinModal()}
                className="mt-5 flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-5 py-2.5 rounded-full text-xs shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 fill-white/20" />
                <span>Join Class Today</span>
              </button>
            )}
          </div>

          {/* Sitemap Col */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-emerald-400 mb-4">
              Explore Sitemap
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
              <li>
                <button 
                  onClick={() => handleScrollTo("home")} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("about")} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Our Studio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("chakras")} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Chakra Explorer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("classes")} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Yoga Offerings
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("contact")} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Info
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Hours & Location Col */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-emerald-400 mb-4">
              Studio Hours & Location
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-stone-300 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span>3400, Mela Anuppanadi, Housing Board, Madurai - 9</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="tel:+919976146261" className="hover:text-emerald-400 transition-colors">+91 9976146261</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="mailto:shreegayathriyoga@gmail.com" className="hover:text-emerald-400 transition-colors">shreegayathriyoga@gmail.com</a>
              </div>
              <p className="pt-2 text-stone-200 font-semibold">
                <span className="font-extrabold text-stone-100">Sessions:</span> Mon – Sat, 6:00 AM – 8:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-semibold">
          <p>© {year} Shree Gayathri Yoga. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for a Healthier Community</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
