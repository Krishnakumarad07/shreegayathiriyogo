import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Sparkles, ArrowRight, Play, Compass, Heart, ShieldCheck, Star } from "lucide-react";
import { IMAGES, FALLBACK_IMAGES } from "../assets-data";
import SafeImage from "./SafeImage";

interface HeroProps {
  onOpenJoinModal: (program?: string) => void;
}

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const heroChildVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const rightVisualVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 25 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1],
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const floatingBadgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function Hero({ onOpenJoinModal }: HeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgGlowY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[92vh] bg-vibrant-mesh overflow-hidden flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20"
    >
      {/* Visual Accent Backdrops with Parallax */}
      <motion.div
        style={{ y: bgGlowY }}
        className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-[130px] pointer-events-none animate-pulse-glow"
      />
      <motion.div
        style={{ y: bgGlowY }}
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/15 rounded-full blur-[130px] pointer-events-none animate-pulse-glow"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Hero Left Content Column */}
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            
            {/* Vibrant Location Badge */}
            <motion.div
              variants={heroChildVariants}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50 border border-emerald-200/80 text-emerald-900 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-sm mb-6"
            >
              <Compass className="w-4 h-4 text-emerald-600 animate-spin-slow" />
              <span>Shree Gayathri Yoga Centre • Madurai</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </motion.div>

            {/* Headline with Vibrant Gradient Text */}
            <motion.h1
              variants={heroChildVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-[1.1]"
            >
              Find Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent italic font-serif font-medium">
                Inner Harmony
              </span>{" "}
              Through Authentic Yoga
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={heroChildVariants}
              className="mt-6 text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed font-sans"
            >
              Welcome to <strong className="text-emerald-800 font-bold">Shree Gayathri Yoga</strong> in Madurai. Rejuvenate your mind, awaken physical vigor, and cultivate spiritual peace with our traditional Hatha Yoga, Pranayama, and Therapeutic sessions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={heroChildVariants}
              className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => onOpenJoinModal()}
                className="group relative flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 active:scale-95 text-white font-extrabold px-8 py-4 rounded-full shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 transition-all duration-300 text-base cursor-pointer"
              >
                <Heart className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                <span>Join Class Now</span>
                <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300" />
              </button>

              <button
                onClick={() => handleScrollTo("classes")}
                className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-md border-2 border-stone-200 hover:border-emerald-600 hover:text-emerald-700 text-stone-800 font-bold px-7 py-4 rounded-full transition-all duration-300 text-base shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Explore Offerings</span>
                <ArrowRight className="w-4 h-4 text-emerald-600" />
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={heroChildVariants}
              className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-500"
            >
              <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Certified Instructors
              </span>
              <span className="flex items-center gap-1 text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> 5.0 Rated Yoga Studio
              </span>
            </motion.div>

            {/* Stat Counter Grid */}
            <motion.div
              variants={heroChildVariants}
              className="mt-10 pt-6 border-t border-stone-200/80 w-full grid grid-cols-3 gap-3 sm:gap-6"
            >
              <div className="text-left bg-white/60 p-3 sm:p-4 rounded-2xl border border-stone-100">
                <h3 className="font-display font-black text-2xl sm:text-3xl bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                  100+
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-600 font-semibold mt-0.5">Active Practitioners</p>
              </div>

              <div className="text-left bg-white/60 p-3 sm:p-4 rounded-2xl border border-stone-100">
                <h3 className="font-display font-black text-2xl sm:text-3xl bg-gradient-to-r from-purple-600 to-indigo-700 bg-clip-text text-transparent">
                  5+
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-600 font-semibold mt-0.5">Years Experience</p>
              </div>

              <div className="text-left bg-white/60 p-3 sm:p-4 rounded-2xl border border-stone-100">
                <h3 className="font-display font-black text-2xl sm:text-3xl bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                  100%
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-600 font-semibold mt-0.5">Holistic Wellness</p>
              </div>
            </motion.div>

          </motion.div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              style={{ y: imageY }}
              variants={rightVisualVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full max-w-[400px] lg:max-w-none aspect-[4/5] rounded-3xl p-3 bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-amber-500/20 shadow-2xl border border-white/60 backdrop-blur-sm"
            >
              {/* Outer Golden Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 to-purple-500/30 rounded-3xl blur-2xl opacity-60 -z-1 animate-pulse-slow" />

              {/* Main Image Frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-stone-100 shadow-inner">
                <SafeImage
                  src={IMAGES.meditationSunset}
                  fallbackSrc={FALLBACK_IMAGES.meditationSunset}
                  alt="Yoga Meditation Sunset"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid linear gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent" />

                {/* Bottom Card Title Overlay */}
                <div className="absolute bottom-5 left-5 right-5 text-left text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300 bg-emerald-950/70 backdrop-blur-md px-2.5 py-1 rounded-full">
                    HERITAGE YOGA STUDIO
                  </span>
                  <h4 className="font-display font-extrabold text-lg text-white mt-1">
                    Serene Atmosphere in Madurai
                  </h4>
                  <p className="text-xs text-stone-300 mt-0.5">
                    Morning & Evening Batch Sessions
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Top Left */}
              <motion.div
                variants={floatingBadgeVariants}
                whileHover={{ scale: 1.05 }}
                className="absolute top-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-xl p-3 sm:p-3.5 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-base shadow-sm">
                  🧘‍♀️
                </div>
                <div className="text-left">
                  <h5 className="text-xs font-bold text-stone-900 leading-tight">Authentic Hatha</h5>
                  <p className="text-[10px] text-stone-500 font-medium mt-0.5">Traditional Postures</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Right Middle */}
              <motion.div
                variants={floatingBadgeVariants}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-20 -right-4 sm:-right-6 bg-white/95 backdrop-blur-xl p-3 sm:p-3.5 rounded-2xl shadow-xl border border-purple-100 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-base shadow-sm">
                  🌬️
                </div>
                <div className="text-left">
                  <h5 className="text-xs font-bold text-stone-900 leading-tight">Pranayama</h5>
                  <p className="text-[10px] text-stone-500 font-medium mt-0.5">Breath & Energy Control</p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

