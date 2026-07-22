import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Youtube, Instagram, Send, CheckCircle2, Sparkles, Heart } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    
    // Simulate message delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-vibrant-mesh relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Contact Information Column */}
          <div className="lg:col-span-5 text-left">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase font-extrabold tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              GET IN TOUCH
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 leading-tight">
              Begin Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-purple-600 bg-clip-text text-transparent italic font-serif">
                Yoga Journey Today
              </span>
            </h2>

            <p className="mt-6 text-stone-600 text-sm sm:text-base leading-relaxed">
              Whether you are taking your first step into yoga or seeking therapeutic relief, our instructors in Madurai are here to guide you every step of the way.
            </p>

            {/* Contact Details List */}
            <div className="mt-8 space-y-5">
              
              <div className="flex gap-4 items-center p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center flex-shrink-0 font-bold">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-xs sm:text-sm uppercase tracking-wider">Phone & WhatsApp</h4>
                  <a href="tel:+919976146261" className="text-stone-700 hover:text-emerald-700 text-sm sm:text-base font-extrabold mt-0.5 block">
                    +91 99761 46261
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-purple-100/80 text-purple-800 flex items-center justify-center flex-shrink-0 font-bold">
                  <Mail className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-xs sm:text-sm uppercase tracking-wider">Email Address</h4>
                  <a href="mailto:shreegayathriyoga@gmail.com" className="text-stone-700 hover:text-purple-700 text-sm sm:text-base font-extrabold mt-0.5 block truncate">
                    shreegayathriyoga@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-amber-100/80 text-amber-800 flex items-center justify-center flex-shrink-0 font-bold mt-0.5">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-xs sm:text-sm uppercase tracking-wider">Studio Location</h4>
                  <p className="text-stone-600 text-xs sm:text-sm mt-0.5 font-medium leading-relaxed">
                    Shree Gayathri Yoga Centre, Mela Anuppanadi, Housing Board, Madurai - 625009, Tamil Nadu, India
                  </p>
                </div>
              </div>

            </div>

            {/* Social Media Links */}
            <div className="mt-10">
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-stone-500 mb-4">
                Join Our Social Channels
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://www.youtube.com/@shreeGayathriYoga"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl bg-red-500/10 hover:bg-red-600 text-red-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 cursor-pointer"
                  title="YouTube Channel"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/shreegayathriyoga/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl bg-pink-500/10 hover:bg-pink-600 text-pink-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 cursor-pointer"
                  title="Instagram Page"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500" />
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-stone-900 text-left mb-2">
                      Send Us A Message
                    </h3>
                    <p className="text-stone-500 text-xs sm:text-sm text-left mb-6">
                      Have questions about class schedules or custom therapy? Leave your message below.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="text-left">
                          <label className="text-xs font-extrabold text-stone-700 uppercase tracking-wider block mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Anand Sharma"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-stone-50 border border-stone-200 focus:border-emerald-600 focus:bg-white text-stone-900 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all duration-200 focus:ring-2 focus:ring-emerald-500/20"
                          />
                        </div>

                        <div className="text-left">
                          <label className="text-xs font-extrabold text-stone-700 uppercase tracking-wider block mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="e.g. anand@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-stone-50 border border-stone-200 focus:border-emerald-600 focus:bg-white text-stone-900 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all duration-200 focus:ring-2 focus:ring-emerald-500/20"
                          />
                        </div>
                      </div>

                      <div className="text-left">
                        <label className="text-xs font-extrabold text-stone-700 uppercase tracking-wider block mb-1.5">
                          Phone / WhatsApp (Optional)
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. +91 99761 46261"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200 focus:border-emerald-600 focus:bg-white text-stone-900 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all duration-200 focus:ring-2 focus:ring-emerald-500/20"
                        />
                      </div>

                      <div className="text-left">
                        <label className="text-xs font-extrabold text-stone-700 uppercase tracking-wider block mb-1.5">
                          Your Message *
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Tell us about your health goals or enquiry..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200 focus:border-emerald-600 focus:bg-white text-stone-900 rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all duration-200 focus:ring-2 focus:ring-emerald-500/20 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold p-4 rounded-2xl shadow-lg shadow-emerald-600/25 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm active:scale-[0.99]"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            <span>Sending Securely...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>

                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 px-4 text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6 shadow-inner">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    
                    <h3 className="font-display font-extrabold text-2xl text-stone-900">
                      Message Delivered!
                    </h3>
                    
                    <p className="mt-3 text-stone-600 text-sm max-w-sm leading-relaxed">
                      Thank you for reaching out to <strong className="text-emerald-800">Shree Gayathri Yoga</strong>. Our team will get back to you shortly.
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

