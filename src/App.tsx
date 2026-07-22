import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import InteractiveChakras from "./components/InteractiveChakras";
import Classes from "./components/Classes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import JoinClassModal from "./components/JoinClassModal";
import Preloader from "./components/Preloader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>(undefined);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Hide preloader after assets/initial delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenJoinModal = (program?: string) => {
    setSelectedProgram(program);
    setIsJoinModalOpen(true);
  };

  const handleCloseJoinModal = () => {
    setIsJoinModalOpen(false);
    setSelectedProgram(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-800 selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden font-sans">
      {/* Sleek Branded Preloader Overlay */}
      <AnimatePresence>
        {isLoading && <Preloader isLoading={isLoading} />}
      </AnimatePresence>

      {/* Top Emerald Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 origin-left z-50 shadow-sm"
        style={{ scaleX }}
      />

      {/* Dynamic Sticky Header */}
      <Navbar onOpenJoinModal={handleOpenJoinModal} />

      {/* Main Sections */}
      <main>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Hero onOpenJoinModal={handleOpenJoinModal} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <About onOpenJoinModal={handleOpenJoinModal} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <InteractiveChakras onOpenJoinModal={handleOpenJoinModal} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Classes onOpenJoinModal={handleOpenJoinModal} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Contact />
        </motion.div>
      </main>

      {/* Fully Configured Footer */}
      <Footer onOpenJoinModal={handleOpenJoinModal} />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 transition-colors cursor-pointer flex items-center justify-center border border-emerald-400/30"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Global Join Class Modal */}
      <JoinClassModal
        isOpen={isJoinModalOpen}
        onClose={handleCloseJoinModal}
        preselectedProgram={selectedProgram}
      />
    </div>
  );
}
