import { useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Compass, ShieldAlert, Heart, RefreshCw } from "lucide-react";
import { IMAGES, FALLBACK_IMAGES } from "../assets-data";
import SafeImage from "./SafeImage";

interface Chakra {
  name: string;
  sanskrit: string;
  translation: string;
  location: string;
  color: string;
  accentClass: string;
  glowClass: string;
  focus: string;
  posture: string;
  description: string;
}

interface InteractiveChakrasProps {
  onOpenJoinModal?: (program?: string) => void;
}

const CHAKRAS_DATA: Chakra[] = [
  {
    name: "Crown Chakra",
    sanskrit: "Sahasrara",
    translation: "Thousand-Fold",
    location: "Top of the head",
    color: "#8B5CF6", // Violet
    accentClass: "text-purple-600 bg-purple-50 border-purple-200/50",
    glowClass: "shadow-[0_0_50px_rgba(139,92,246,0.35)]",
    focus: "Spiritual connection, pure awareness, and divine wisdom",
    posture: "Headstand (Sirsasana) or Half Lotus",
    description: "Sahasrara represents our connection to higher spiritual states, cosmos consciousness, and pure transcendental energy. It is the peak of our spiritual expansion.",
  },
  {
    name: "Third Eye Chakra",
    sanskrit: "Ajna",
    translation: "Command/Perceive",
    location: "Forehead, between the eyebrows",
    color: "#3B82F6", // Indigo
    accentClass: "text-blue-600 bg-blue-50 border-blue-200/50",
    glowClass: "shadow-[0_0_50px_rgba(59,130,246,0.35)]",
    focus: "Intuition, visualization, wisdom, and mental clarity",
    posture: "Child's Pose (Balasana) or Trataka meditation",
    description: "Ajna is the seat of inner guidance and insight. It allows us to look beyond physical sight and align with deep intuitive wisdom and spiritual vision.",
  },
  {
    name: "Throat Chakra",
    sanskrit: "Vishuddha",
    translation: "Especially Pure",
    location: "Throat, neck area",
    color: "#06B6D4", // Cyan
    accentClass: "text-cyan-600 bg-cyan-50 border-cyan-200/50",
    glowClass: "shadow-[0_0_50px_rgba(6,182,212,0.35)]",
    focus: "Honest communication, self-expression, and sound harmony",
    posture: "Shoulder Stand (Sarvangasana) or Fish Pose",
    description: "Vishuddha governs our voice and our capacity to speak our truth. Balanced Vishuddha leads to healthy communication, authentic self-expression, and active listening.",
  },
  {
    name: "Heart Chakra",
    sanskrit: "Anahata",
    translation: "Unstruck Sound",
    location: "Center of the chest",
    color: "#10B981", // Emerald Green
    accentClass: "text-emerald-600 bg-emerald-50 border-emerald-200/50",
    glowClass: "shadow-[0_0_50px_rgba(16,185,129,0.35)]",
    focus: "Compassion, unconditional love, relationships, and healing",
    posture: "Camel Pose (Ustrasana) or Cobra Pose (Bhujangasana)",
    description: "Anahata bridges lower physical chakras with higher spiritual chakras. It fosters our ability to forgive, accept, and love unconditionally both others and ourselves.",
  },
  {
    name: "Solar Plexus Chakra",
    sanskrit: "Manipura",
    translation: "City of Jewels",
    location: "Upper abdomen, stomach area",
    color: "#F59E0B", // Amber Gold
    accentClass: "text-amber-600 bg-amber-50 border-amber-200/50",
    glowClass: "shadow-[0_0_50px_rgba(245,158,11,0.35)]",
    focus: "Personal power, self-esteem, courage, and transformation",
    posture: "Boat Pose (Navasana) or Warrior I",
    description: "Manipura is the source of personal power, digestive fire, and internal willpower. It represents our identity, confidence, and capacity to manifest actions.",
  },
  {
    name: "Sacral Chakra",
    sanskrit: "Svadhisthana",
    translation: "One's Own Abode",
    location: "Lower abdomen, below the navel",
    color: "#F97316", // Orange
    accentClass: "text-orange-600 bg-orange-50 border-orange-200/50",
    glowClass: "shadow-[0_0_50px_rgba(249,115,22,0.35)]",
    focus: "Creativity, emotional balance, pleasure, and adaptability",
    posture: "Bound Angle Pose (Baddha Konasana)",
    description: "Svadhisthana is our center of feeling and creativity. It relates to our flow with life, our emotions, and our playful or artistic expression.",
  },
  {
    name: "Root Chakra",
    sanskrit: "Muladhara",
    translation: "Root Support",
    location: "Base of the spine",
    color: "#EF4444", // Red
    accentClass: "text-red-600 bg-red-50 border-red-200/50",
    glowClass: "shadow-[0_0_50px_rgba(239,68,68,0.35)]",
    focus: "Grounding, physical survival, stability, and inner security",
    posture: "Tree Pose (Vrikshasana) or Mountain Pose (Tadasana)",
    description: "Muladhara provides us with our foundation in life. It keeps us grounded to Earth, stable, secure, and physically and mentally anchored.",
  }
];

export default function InteractiveChakras({ onOpenJoinModal }: InteractiveChakrasProps) {
  const [selectedIdx, setSelectedIdx] = useState<number>(3); // Default is Heart Chakra
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const activeChakra = CHAKRAS_DATA[selectedIdx];

  // Compute 3D perspective rotation on Mouse Move
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Get mouse coordinate relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate rotation angles (scaled)
    const rotateXValue = -(mouseY / height) * 20; // Max 20 degrees
    const rotateYValue = (mouseX / width) * 20;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section id="chakras" className="py-24 bg-[#FAF9F5] relative overflow-hidden">
      {/* Decorative full size background patterns */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase font-extrabold tracking-widest text-purple-700 bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-100 mb-4">
            ENERGY WELLNESS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight">
            Explore the Seven{" "}
            <span className="text-emerald-700 font-serif italic font-semibold">
              Chakra Energies
            </span>
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            According to ancient yogic text, your physical body possesses seven primary spinning hubs of energy. Select each chakra below to visualize its spiritual field and alignment practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Interactive 3D Card Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Perspective Card Container */}
            <div 
              style={{ perspective: 1000 }}
              className="w-full max-w-[340px] flex justify-center cursor-pointer"
            >
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                animate={{
                  rotateX: isHovered ? rotateX : 0,
                  rotateY: isHovered ? rotateY : 0,
                  scale: isHovered ? 1.03 : 1,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 25 }}
                className={`relative w-full aspect-[3/4] rounded-3xl bg-white p-4 shadow-xl border border-stone-200/40 flex flex-col overflow-hidden ${activeChakra.glowClass} transition-shadow duration-300`}
              >
                {/* Back Light Glow corresponding to active chakra color */}
                <div 
                  style={{ backgroundColor: activeChakra.color }}
                  className="absolute inset-0 w-full h-full rounded-3xl opacity-5 blur-[40px] pointer-events-none"
                />

                {/* Animated halo indicator rings */}
                <div className="absolute inset-x-0 top-[40%] flex justify-center pointer-events-none">
                  <div 
                    style={{ borderColor: activeChakra.color }}
                    className="absolute w-44 h-44 rounded-full border-2 border-dashed opacity-25 animate-spin-slow"
                  />
                  <div 
                    style={{ backgroundColor: activeChakra.color }}
                    className="absolute w-36 h-36 rounded-full opacity-10 blur-xl animate-pulse-slow"
                  />
                </div>

                {/* Card Title Label (Top) */}
                <div className="relative z-10 flex justify-between items-center pb-3 border-b border-stone-100">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400">
                    SANSKRIT ENERGY
                  </span>
                  <span className="text-xs font-bold font-serif italic text-emerald-800">
                    {activeChakra.sanskrit}
                  </span>
                </div>

                {/* Main Image Frame */}
                <div className="relative flex-grow flex items-center justify-center p-4">
                  <SafeImage
                    src={IMAGES.chakrasAlignment}
                    fallbackSrc={FALLBACK_IMAGES.chakrasAlignment}
                    alt="Chakras Meditating Body"
                    className="h-full object-contain select-none pointer-events-none max-h-[220px]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info Overlay (Bottom) */}
                <div className="relative z-10 bg-stone-50 border border-stone-100 p-3 rounded-2xl flex items-center gap-3 mt-auto">
                  <div 
                    style={{ backgroundColor: activeChakra.color }}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md"
                  >
                    🧘
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-extrabold text-stone-800 tracking-wide">
                      {activeChakra.name}
                    </h4>
                    <p className="text-[10px] text-stone-500 font-medium">
                      Location: {activeChakra.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Instruction Badge */}
            <p className="mt-4 text-xs text-stone-400 font-medium flex items-center gap-1.5 animate-pulse">
              <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
              Hover & tilt card to explore in 3D perspective
            </p>
          </div>

          {/* Selector & Information Column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Tab Selectors list */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {CHAKRAS_DATA.map((ch, idx) => {
                const isSelected = selectedIdx === idx;
                return (
                  <button
                    key={ch.name}
                    onClick={() => setSelectedIdx(idx)}
                    style={{ 
                      borderColor: isSelected ? ch.color : "rgba(120,113,108,0.15)",
                      color: isSelected ? ch.color : "#44403C" 
                    }}
                    className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 border shadow-sm ${
                      isSelected 
                        ? "bg-white scale-105" 
                        : "bg-stone-50 hover:bg-stone-100"
                    }`}
                  >
                    {/* Tiny color dot */}
                    <span 
                      style={{ backgroundColor: ch.color }}
                      className="w-2.5 h-2.5 rounded-full shadow-inner"
                    />
                    <span>{ch.sanskrit}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Info Card with Framer Motion Switch */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/50 shadow-xl relative overflow-hidden"
              >
                {/* Visual Glow Header Element */}
                <div 
                  style={{ backgroundColor: activeChakra.color }}
                  className="absolute top-0 inset-x-0 h-2"
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    {/* Sanskrit + Name Header */}
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold border ${activeChakra.accentClass}`}>
                      <Sparkles className="w-3.5 h-3.5" />
                      {activeChakra.name} ({activeChakra.sanskrit})
                    </span>

                    <h3 className="font-display font-black text-2xl sm:text-3xl text-stone-900 mt-3 leading-none">
                      {activeChakra.sanskrit} Chakra
                    </h3>
                  </div>

                  <div className="flex-shrink-0 text-left sm:text-right">
                    <p className="text-[10px] text-stone-400 font-extrabold uppercase tracking-widest">
                      Literal Translation
                    </p>
                    <p className="text-base font-serif italic text-stone-700 font-semibold mt-0.5">
                      "{activeChakra.translation}"
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-stone-100 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column: Description & Focus */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs uppercase font-extrabold text-stone-400 tracking-wider">
                        Spiritual Energy Focus
                      </h4>
                      <p className="text-stone-700 text-sm mt-1.5 leading-relaxed font-medium">
                        {activeChakra.focus}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase font-extrabold text-stone-400 tracking-wider">
                        Core Description
                      </h4>
                      <p className="text-stone-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
                        {activeChakra.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Location & Recommended Postures */}
                  <div className="space-y-4 bg-stone-50 p-5 rounded-2xl border border-stone-100">
                    <div>
                      <h4 className="text-xs uppercase font-extrabold text-emerald-800 tracking-wider">
                        📍 Physical Location
                      </h4>
                      <p className="text-stone-700 text-sm font-semibold mt-1">
                        {activeChakra.location}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase font-extrabold text-purple-800 tracking-wider">
                        🧘 Recommended Posture
                      </h4>
                      <p className="text-stone-700 text-sm font-semibold mt-1">
                        {activeChakra.posture}
                      </p>
                      <p className="text-stone-500 text-xs mt-1 leading-relaxed">
                        Practicing these physical yoga configurations at Shree Gayathri Yoga helps open, stimulate, and balance this specific energy cluster.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Callout */}
                <div className="mt-6 flex items-center gap-2.5 bg-amber-500/5 text-amber-900 border border-amber-200/40 p-3.5 rounded-xl text-xs font-semibold leading-relaxed">
                  <Compass className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span>Learn alignment breath control (Pranayama) related to these fields in our active wellness programs.</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
