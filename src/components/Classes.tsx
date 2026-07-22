import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Youtube, Sparkles, ExternalLink, Play, CheckCircle, Heart } from "lucide-react";
import { IMAGES, FALLBACK_IMAGES } from "../assets-data";
import SafeImage from "./SafeImage";

interface YogaClass {
  icon: string;
  title: string;
  desc: string;
  image: string;
  duration: string;
  level: string;
}

interface ClassesProps {
  onOpenJoinModal: (program?: string) => void;
}

const YOGA_CLASSES: YogaClass[] = [
  {
    icon: "🧘",
    title: "Hatha Yoga",
    desc: "Restore bodily alignment, flexibility, balance, and general physical calmness through traditional static postures.",
    image: IMAGES.hathaSunMoon,
    duration: "60 Mins",
    level: "All Levels"
  },
  {
    icon: "🌬️",
    title: "Pranayama",
    desc: "Master proper respiratory retention and breath expansion patterns to increase lung capacity and vital life force.",
    image: IMAGES.pranayamaPark,
    duration: "45 Mins",
    level: "All Levels"
  },
  {
    icon: "✨",
    title: "Meditation & Dhyana",
    desc: "Acquire mental clarity, physical stress relief, and deep tranquility via structured concentration techniques.",
    image: IMAGES.silhouetteLotus,
    duration: "30 Mins",
    level: "Beginner Friendly"
  },
  {
    icon: "💪",
    title: "Power Yoga",
    desc: "A high-momentum configuration designed to fortify physical core strength, muscle tone, and metabolism rate.",
    image: IMAGES.abstractLightMeditation,
    duration: "60 Mins",
    level: "Intermediate"
  },
  {
    icon: "👧",
    title: "Kids Yoga & Focus",
    desc: "Playful, interactive movements tailored to help young children cultivate coordination, attention, and calm energy.",
    image: IMAGES.logo,
    duration: "45 Mins",
    level: "Children"
  },
  {
    icon: "❤️",
    title: "Therapeutic Relief",
    desc: "Targeted posture routines centered around chronic back discomfort, diabetes management, and nervous system relief.",
    image: IMAGES.mandalaSilhouette,
    duration: "50 Mins",
    level: "Therapeutic"
  }
];

const SHORTS_DATA = [
  { id: "sKdYi7EPX5Y", title: "Yoga Warmup Sequence" },
  { id: "QsNrkroiVfs", title: "Mindfulness Breathing Tips" },
  { id: "1tzHOm8nGtE", title: "Spine Alignment Routine" }
];

const sectionHeaderVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const headerChildVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const shortsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const shortCardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export default function Classes({ onOpenJoinModal }: ClassesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgGlowY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const getFallbackSrc = (src: string) => {
    const key = Object.keys(IMAGES).find(k => IMAGES[k as keyof typeof IMAGES] === src);
    return key ? FALLBACK_IMAGES[key as keyof typeof FALLBACK_IMAGES] : undefined;
  };

  return (
    <section ref={sectionRef} id="classes" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Visual background glows with parallax */}
      <motion.div style={{ y: bgGlowY }} className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      <motion.div style={{ y: bgGlowY }} className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Staggered Revealed Children */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            variants={headerChildVariants}
            className="inline-flex items-center gap-1.5 text-xs uppercase font-extrabold tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            OUR YOGA OFFERINGS
          </motion.span>
          <motion.h2
            variants={headerChildVariants}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 leading-tight"
          >
            Programs Designed For{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent italic font-serif">
              Every Goal & Skill Level
            </span>
          </motion.h2>
          <motion.p
            variants={headerChildVariants}
            className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed"
          >
            Browse through our traditional and therapeutic programs curated by experienced instructors in Madurai.
          </motion.p>
        </motion.div>

        {/* Classes Grid with Staggered Cards */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {YOGA_CLASSES.map((cls) => (
            <motion.div
              key={cls.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-stone-50 rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
            >
              {/* Image Header with Badge Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                <SafeImage
                  src={cls.image}
                  fallbackSrc={getFallbackSrc(cls.image)}
                  alt={cls.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                
                {/* Float level tag */}
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-stone-900 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {cls.level}
                </span>

                <span className="absolute bottom-4 right-4 bg-emerald-950/80 backdrop-blur-md text-emerald-200 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                  🕒 {cls.duration}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-grow flex flex-col text-left justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" role="img" aria-label={cls.title}>
                      {cls.icon}
                    </span>
                    <h3 className="font-display font-black text-xl text-stone-900 tracking-tight">
                      {cls.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {cls.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between gap-3">
                  <span className="text-[11px] text-stone-500 font-bold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    Daily Batches
                  </span>

                  <button
                    onClick={() => onOpenJoinModal(cls.title)}
                    className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white/20" />
                    <span>Join Class</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* YouTube Video Showcase Module */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Neon YouTube back light effect */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* YouTube Info Column */}
            <div className="lg:col-span-6 text-left">
              <span className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 rounded-full mb-6">
                <Youtube className="w-4 h-4 text-red-500 fill-red-500" />
                Watch & Learn Free
              </span>

              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-100 leading-tight">
                Learn Yoga From Home <br />
                <span>With Our YouTube Videos</span>
              </h2>

              <p className="mt-4 text-stone-400 text-xs sm:text-sm leading-relaxed">
                Continue your physical and mental alignment practices outside of the classroom. We upload guided yoga posture guides, breathing tips, and healthy lifestyle content regularly on our channel.
              </p>

              <div className="mt-8">
                <a
                  href="https://www.youtube.com/@shreeGayathriYoga"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-full transition-transform duration-300 hover:scale-105 shadow-lg shadow-red-600/20 cursor-pointer"
                >
                  <Youtube className="w-5 h-5 fill-white" />
                  <span>Visit @shreeGayathriYoga</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Shorts Showcase Grid Column with Staggered Motion */}
            <div className="lg:col-span-6 w-full">
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-stone-400 mb-4 text-left flex items-center gap-2">
                <Play className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> Featured Practice Guides
              </h4>

              {/* Grid of Youtube embeds */}
              <motion.div
                variants={shortsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full"
              >
                {SHORTS_DATA.map((short) => (
                  <motion.div
                    key={short.id}
                    variants={shortCardVariants}
                    className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 shadow-lg flex flex-col w-full group"
                  >
                    {/* YouTube responsive embed wrapper */}
                    <div className="relative w-full aspect-[9/16] bg-black">
                      <iframe
                        src={`https://www.youtube.com/embed/${short.id}`}
                        title={short.title}
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                      />
                    </div>
                    {/* Footer note */}
                    <div className="p-3 text-center bg-stone-950/80">
                      <p className="text-[10px] font-bold text-stone-300 truncate tracking-wide">
                        {short.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
