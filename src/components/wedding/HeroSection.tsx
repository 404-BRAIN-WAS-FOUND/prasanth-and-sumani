import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/wedding-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/90" />
      <motion.div 
        className="absolute inset-0 bg-gradient-radial from-lavender/20 via-transparent to-transparent"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-16 md:py-24">
        {/* Decorative Sparkle */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4"
        >
          <svg className="w-10 h-10 text-gold animate-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7V2z" />
          </svg>
        </motion.div>

        {/* Bible Verse */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-12"
        >
          <p className="font-display italic text-lg md:text-xl text-foreground/90 mb-2 drop-shadow-sm">
            "We love because He first loved us"
          </p>
          <p className="font-body text-sm text-muted-foreground tracking-widest uppercase">
            — 1 John 4:19
          </p>
        </motion.div>

        {/* Parents */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6"
        >
          <p className="font-display text-base md:text-lg text-foreground/90">
            Mr. Chopra Sabhodh & Mrs. Anuradha
          </p>
          <p className="font-body text-sm text-muted-foreground mt-1">
            Request the honour of your presence at the Holy Matrimony of their beloved daughter
          </p>
        </motion.div>

        {/* Bride Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring", bounce: 0.3 }}
          className="mb-4 relative"
        >
          <motion.h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-primary tracking-wide relative z-10"
            animate={{
              textShadow: [
                "0 0 20px hsl(270 40% 55% / 0.3)",
                "0 0 40px hsl(270 40% 55% / 0.5)",
                "0 0 20px hsl(270 40% 55% / 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Sumani
          </motion.h1>
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-transparent via-lavender/20 to-transparent blur-xl -z-10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <p className="font-body text-xs md:text-sm text-muted-foreground mt-2">
            Grand Daughter of Mrs. Laxmi Devi & Late Mr. Banerjee
          </p>
        </motion.div>

        {/* Decorative Ampersand */}
        <motion.div
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
          className="my-6 relative"
        >
          <span className="font-display text-3xl md:text-4xl italic text-gold drop-shadow-lg">&</span>
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent -bottom-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          />
        </motion.div>

        {/* Groom Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8, type: "spring", bounce: 0.3 }}
          className="relative"
        >
          <motion.h2 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-primary tracking-wide relative z-10"
            animate={{
              textShadow: [
                "0 0 20px hsl(270 40% 55% / 0.3)",
                "0 0 40px hsl(270 40% 55% / 0.5)",
                "0 0 20px hsl(270 40% 55% / 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            Prasanth Reddy
          </motion.h2>
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-transparent via-lavender/20 to-transparent blur-xl -z-10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
          <p className="font-body text-xs md:text-sm text-muted-foreground mt-2">
            Son of Mr. Thumma Inna Reddy & Mrs. Maria Rani
          </p>
        </motion.div>

        {/* Decorative Flourish */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10 flex justify-center items-center gap-4"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/60" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-gold" />
          </motion.div>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/60" />
        </motion.div>

        {/* Grace of God */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-6 font-display italic text-base md:text-lg text-foreground/80"
        >
          Which by the Grace of God will be solemnized at
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-body text-xs text-muted-foreground/60 uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1.5 h-3 bg-gradient-to-b from-primary/80 to-primary/20 rounded-full"
                animate={{ opacity: [1, 0.3, 1], y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
