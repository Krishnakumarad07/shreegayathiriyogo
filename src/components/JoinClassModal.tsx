import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, Sparkles, Send, Clock, Calendar, Heart, ShieldCheck } from "lucide-react";

interface JoinClassModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
  preselectedProgram?: string;
}

export default function JoinClassModal({ 
  isOpen, 
  onClose, 
  defaultProgram = "Hatha Yoga",
  preselectedProgram 
}: JoinClassModalProps) {
  const [selectedProgram, setSelectedProgram] = useState(preselectedProgram || defaultProgram);
  const [selectedBatch, setSelectedBatch] = useState("Morning 06:00 AM");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync state when modal opens or preselectedProgram changes
  React.useEffect(() => {
    if (preselectedProgram) {
      setSelectedProgram(preselectedProgram);
    }
  }, [preselectedProgram, isOpen]);

  const programs = [
    "Hatha Yoga",
    "Pranayama & Breathwork",
    "Meditation & Dhyana",
    "Power Yoga",
    "Kids Yoga & Focus",
    "Therapeutic Relief"
  ];

  const batches = [
    { label: "Morning Batch 1", time: "05:30 AM - 06:30 AM" },
    { label: "Morning Batch 2", time: "07:00 AM - 08:00 AM" },
    { label: "Evening Batch 1", time: "05:00 PM - 06:00 PM" },
    { label: "Evening Batch 2", time: "06:30 PM - 07:30 PM" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName("");
    setPhone("");
    setEmail("");
    setNote("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/70 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100 z-10 my-8"
          >
            {/* Top Decorative Gradient Line */}
            <div className="h-2 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500" />

            {/* Modal Header */}
            <div className="p-6 sm:p-8 pb-4 flex items-start justify-between border-b border-stone-100">
              <div className="text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100/80 text-emerald-800 border border-emerald-200">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  SHREE GAYATHRI YOGA
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-stone-900 mt-2">
                  Join Yoga Class
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm mt-1">
                  Reserve your place in our serene Madurai studio or live online batches.
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer flex-shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 pt-4">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  
                  {/* Select Program */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                      1. Select Program *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {programs.map((prog) => {
                        const isSelected = selectedProgram === prog;
                        return (
                          <button
                            key={prog}
                            type="button"
                            onClick={() => setSelectedProgram(prog)}
                            className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer border ${
                              isSelected
                                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20"
                                : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
                            }`}
                          >
                            {prog}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Select Batch */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                      2. Preferred Batch Timing *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {batches.map((batch) => {
                        const isSelected = selectedBatch === batch.time;
                        return (
                          <button
                            key={batch.label}
                            type="button"
                            onClick={() => setSelectedBatch(batch.time)}
                            className={`p-3 rounded-xl text-left transition-all cursor-pointer border flex items-center justify-between ${
                              isSelected
                                ? "bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/20"
                                : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                            }`}
                          >
                            <div>
                              <p className="text-xs font-bold">{batch.label}</p>
                              <p className="text-[11px] text-stone-500 mt-0.5 flex items-center gap-1">
                                <Clock className="w-3 h-3 text-emerald-600" />
                                {batch.time}
                              </p>
                            </div>
                            {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-100">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priyadarshini"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 focus:border-emerald-600 focus:bg-white text-stone-900 rounded-xl px-3.5 py-2.5 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 99761 46261"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 focus:border-emerald-600 focus:bg-white text-stone-900 rounded-xl px-3.5 py-2.5 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 focus:border-emerald-600 focus:bg-white text-stone-900 rounded-xl px-3.5 py-2.5 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  {/* Submit button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-600/25 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Reserving Your Seat...</span>
                        </>
                      ) : (
                        <>
                          <Heart className="w-4 h-4 fill-white/20" />
                          <span>Confirm & Join Class</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-stone-400 text-center mt-2 flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Free admission consultation • No immediate payment needed
                    </p>
                  </div>

                </form>
              ) : (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-display font-extrabold text-2xl text-stone-900">
                    Welcome to Shree Gayathri Yoga!
                  </h4>
                  <p className="text-stone-600 text-sm mt-2 max-w-md leading-relaxed">
                    Thank you, <strong className="text-emerald-800">{fullName}</strong>! You have requested to join <strong className="text-teal-700">{selectedProgram}</strong> ({selectedBatch}).
                  </p>
                  <div className="bg-emerald-50 border border-emerald-200/60 p-4 rounded-2xl mt-4 max-w-md text-left text-xs text-emerald-900 space-y-1">
                    <p className="font-bold flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      Next Steps:
                    </p>
                    <p>Our instructors will connect with you at <strong>{phone}</strong> via WhatsApp or Call within 24 hours to guide you through your first class arrival!</p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="mt-6 bg-stone-900 hover:bg-stone-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
