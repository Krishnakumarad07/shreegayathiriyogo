import { motion } from "motion/react";
import { Sparkles, Heart } from "lucide-react";
import { IMAGES, FALLBACK_IMAGES } from "../assets-data";
import SafeImage from "./SafeImage";

interface PreloaderProps {
  isLoading: boolean;
}

export default function Preloader({ isLoading }: PreloaderProps) {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-stone-950 text-stone-100 overflow-hidden"
    >
      {/* Background ambient glow circles */}
      <div className="absolute w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] animate-pulse pointer-events-none" />
      <div className="absolute w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Animated Rings & Logo */}
        <div className="relative flex items-center justify-center mb-8">
          {/* Outer rotating decorative ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-dashed border-emerald-500/40 absolute"
          />

          {/* Inner pulsing glow ring */}
          <motion.div
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-emerald-500/20 absolute blur-md"
          />

          {/* Center Logo Avatar */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-stone-900 border-2 border-emerald-500/60 p-2 shadow-2xl flex items-center justify-center relative z-10 overflow-hidden">
            <SafeImage
              src={IMAGES.logo}
              fallbackSrc={FALLBACK_IMAGES.logo}
              alt="Shree Gayathri Yoga Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white"
        >
          Shree Gayathri Yoga
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-2 text-xs uppercase font-extrabold tracking-widest bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent flex items-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
          Yoga • Meditation • Lifestyle
        </motion.p>

        {/* Loading Progress bar */}
        <div className="w-48 sm:w-56 h-1 bg-stone-800 rounded-full mt-8 overflow-hidden relative">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 rounded-full"
          />
        </div>

        <p className="mt-3 text-[11px] text-stone-400 font-medium tracking-wide">
          Cultivating Peace & Vitality...
        </p>
      </div>
    </motion.div>
  );
}
