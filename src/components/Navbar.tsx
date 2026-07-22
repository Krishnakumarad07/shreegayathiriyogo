import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles, Heart, ChevronRight, Compass } from "lucide-react";
import { IMAGES, FALLBACK_IMAGES } from "../assets-data";
import SafeImage from "./SafeImage";

interface NavItem {
  label: string;
  id: string;
}

interface NavbarProps {
  onOpenJoinModal: (program?: string) => void;
}

export default function Navbar({ onOpenJoinModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Chakras", id: "chakras" },
    { label: "Classes", id: "classes" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use IntersectionObserver to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/85 backdrop-blur-md shadow-md shadow-emerald-950/5 border-b border-stone-200/60"
          : "py-4 sm:py-5 bg-gradient-to-b from-white/95 via-white/80 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div 
          onClick={() => handleScrollTo("home")}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0.5 bg-gradient-to-tr from-emerald-600 via-teal-500 to-amber-500 shadow-md group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full overflow-hidden bg-white p-0.5">
              <SafeImage 
                src={IMAGES.logo} 
                fallbackSrc={FALLBACK_IMAGES.logo}
                alt="Shree Gayathri Yoga Logo" 
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div>
            <h1 className="font-display font-black text-base sm:text-lg text-stone-900 tracking-tight leading-none flex items-center gap-1.5">
              <span>Shree Gayathri Yoga</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            </h1>
            <p className="text-[10px] sm:text-xs font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-purple-600 bg-clip-text text-transparent uppercase tracking-widest leading-none mt-1">
              Yoga • Meditation • Lifestyle
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-stone-100/90 backdrop-blur-md p-1.5 rounded-full border border-stone-200/80 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-colors duration-200 cursor-pointer ${
                  isActive ? "text-white" : "text-stone-700 hover:text-emerald-700"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full z-0 shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenJoinModal()}
            className="group relative flex items-center gap-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold px-5 py-2.5 rounded-full shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 cursor-pointer text-xs active:scale-95"
          >
            <Heart className="w-3.5 h-3.5 fill-white/20 group-hover:scale-110 transition-transform" />
            <span>Join Class</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => onOpenJoinModal()}
            className="sm:hidden flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold px-3.5 py-1.5 rounded-full text-xs shadow-md active:scale-95"
          >
            <Heart className="w-3.5 h-3.5 fill-white/20" />
            <span>Join</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-stone-800 hover:bg-stone-100/80 focus:outline-none transition-colors border border-stone-200/60"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-5 h-5 text-stone-800" /> : <Menu className="w-5 h-5 text-stone-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden mx-3 mt-2 rounded-3xl bg-white/95 border border-stone-200/90 shadow-2xl backdrop-blur-2xl overflow-hidden"
          >
            <div className="p-4 space-y-1.5">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    onClick={() => handleScrollTo(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center justify-between transition-all ${
                      isActive
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                        : "text-stone-700 hover:bg-stone-100/70"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-white" : "bg-stone-300"}`} />
                      {item.label}
                    </span>
                    {isActive ? (
                      <span className="text-[10px] bg-white/20 text-white font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Active</span>
                    ) : (
                      <ChevronRight className="w-4 h-4 text-stone-400" />
                    )}
                  </motion.button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-stone-100">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenJoinModal();
                  }}
                  className="w-full py-3.5 px-4 rounded-2xl font-black text-xs text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 shadow-lg shadow-emerald-600/25 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white/20" />
                  <span>Join Shree Gayathri Yoga Class</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


