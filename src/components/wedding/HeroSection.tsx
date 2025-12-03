import { motion } from "framer-motion";
import heroBg from "@/assets/wedding-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-16 md:py-24">
        {/* Bible Verse */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-12"
        >
          <p className="font-display italic text-lg md:text-xl text-foreground/80 mb-2">
            "We love because He first loved us"
          </p>
          <p className="font-body text-sm text-muted-foreground tracking-wide">
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
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-4"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-primary tracking-wide">
            Sumani
          </h1>
          <p className="font-body text-xs md:text-sm text-muted-foreground mt-2">
            Grand Daughter of Mrs. Laxmi Devi & Late Mr. Banerjee
          </p>
        </motion.div>

        {/* With */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="my-6"
        >
          <span className="font-display text-2xl md:text-3xl italic text-gold">with</span>
        </motion.div>

        {/* Groom Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-primary tracking-wide">
            Prasanth Reddy
          </h2>
          <p className="font-body text-xs md:text-sm text-muted-foreground mt-2">
            Son of Mr. Thumma Inna Reddy & Mrs. Maria Rani
          </p>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
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
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2, duration: 0.5 },
            y: { delay: 2, duration: 1.5, repeat: Infinity },
          }}
          className="mt-12"
        >
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full mx-auto flex justify-center">
            <div className="w-1.5 h-3 bg-primary/60 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
