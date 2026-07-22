import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Sparkles, Shield, Heart, Award, Users, Activity } from "lucide-react";
import { IMAGES, FALLBACK_IMAGES } from "../assets-data";
import SafeImage from "./SafeImage";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  const values = [
    {
      icon: <Heart className="w-5 h-5 text-emerald-600" />,
      title: "Mindfulness & Body Harmony",
      desc: "Nurturing deep alignment between physical posture, breath awareness, and mental stillness."
    },
    {
      icon: <Shield className="w-5 h-5 text-purple-600" />,
      title: "Traditional Authenticity",
      desc: "Delivering pure Hatha Yoga, Pranayama, and Meditation practices untampered by modern trends."
    },
    {
      icon: <Activity className="w-5 h-5 text-amber-600" />,
      title: "Therapeutic Wellness",
      desc: "Customized techniques aimed at relieving back pain, joint stiffness, stress, and insomnia."
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative ambient background glows with parallax */}
      <motion.div style={{ y: glowY }} className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      <motion.div style={{ y: glowY }} className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Images Section */}
          <div className="lg:col-span-6 relative">
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/5] sm:aspect-[4/3] md:aspect-[4/5] max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl p-2 bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-amber-500/20"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-stone-100">
                <SafeImage
                  src={IMAGES.abstractLightMeditation}
                  fallbackSrc={FALLBACK_IMAGES.abstractLightMeditation}
                  alt="Meditation Energy Flow"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-left text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
                    TRADITIONAL SANCTUARY
                  </span>
                  <h4 className="font-display font-extrabold text-xl text-white mt-2">
                    Madurai's Trusted Yoga Studio
                  </h4>
                </div>
              </div>
            </motion.div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.3 }}
              className="absolute -top-6 -right-2 sm:right-4 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800 text-white p-5 sm:p-6 rounded-3xl shadow-2xl max-w-[170px] text-center border border-white/20"
            >
              <h4 className="font-display font-black text-4xl sm:text-5xl text-amber-300">5+</h4>
              <p className="text-[11px] font-extrabold uppercase tracking-widest mt-1 text-emerald-100 leading-tight">
                Years of Holistic Excellence
              </p>
            </motion.div>

            {/* Accent Small Overlay Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-2 sm:left-4 bg-stone-900 text-stone-100 p-5 rounded-2xl shadow-xl max-w-xs border border-stone-800 hidden sm:block text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-stone-100">Certified Guidance</h5>
                  <p className="text-[11px] text-stone-400">Individualized posture correction</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Text Content Section */}
          <div className="lg:col-span-6 text-left">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase font-extrabold tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              ABOUT OUR STUDIO
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 leading-tight">
              A Serene Path Towards{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-purple-600 bg-clip-text text-transparent italic font-serif">
                Strength & Peace
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              At <strong className="text-emerald-800 font-bold">Shree Gayathri Yoga</strong>, we treat yoga as a sacred science of body, breath, and spirit. Located in Madurai, our sanctuary offers structured guidance for beginners and advanced yogis alike.
            </p>

            {/* Values Cards */}
            <div className="mt-8 space-y-3">
              {values.map((val, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  className="flex gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200/80 hover:bg-emerald-50/50 hover:border-emerald-200 transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-0.5 p-2.5 rounded-xl bg-white shadow-sm border border-stone-100">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                      {val.title}
                    </h4>
                    <p className="text-stone-600 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mission & Vision Mini Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="border-l-4 border-emerald-600 bg-emerald-50/60 p-4 sm:p-5 rounded-r-2xl border border-emerald-100/80">
                <h4 className="font-extrabold text-emerald-900 text-xs sm:text-sm uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <span>🌿 Our Mission</span>
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To empower practitioners with genuine yoga practices that build physical resilience, emotional poise, and spiritual clarity.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 bg-purple-50/60 p-4 sm:p-5 rounded-r-2xl border border-purple-100/80">
                <h4 className="font-extrabold text-purple-900 text-xs sm:text-sm uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <span>👁️ Our Vision</span>
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To nurture a conscious community in Madurai where daily yoga brings holistic wellbeing and inner harmony.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

