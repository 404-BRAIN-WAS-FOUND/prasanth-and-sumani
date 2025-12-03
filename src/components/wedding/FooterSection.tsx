import { motion } from "framer-motion";
import { Heart, Cross, Sparkles } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-background via-lavender-light/30 to-lavender-light/50 overflow-hidden">
      {/* Decorative Background Elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 bg-lavender/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-48 h-48 bg-rose/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container max-w-2xl mx-auto text-center relative z-10">
        {/* Cross Icon with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="mb-8 relative"
        >
          <motion.div
            className="absolute inset-0 bg-gold/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <Cross className="w-12 h-12 text-gold mx-auto relative z-10 drop-shadow-lg" />
        </motion.div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="font-display text-xl md:text-3xl italic text-foreground/90 mb-4 leading-relaxed">
            "What God has joined together,
            <br />
            let no one separate"
          </p>
          <p className="font-body text-sm text-muted-foreground tracking-widest uppercase">
            — Mark 10:9
          </p>
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 my-8"
        >
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-lavender/60" />
          <Sparkles className="w-4 h-4 text-gold" />
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-lavender/60" />
        </motion.div>

        {/* Names with Heart */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 md:gap-6"
        >
          <motion.span
            className="font-display text-2xl md:text-4xl text-primary"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Sumani
          </motion.span>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-rose fill-rose drop-shadow-lg" />
          </motion.div>
          <motion.span
            className="font-display text-2xl md:text-4xl text-primary"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Prasanth
          </motion.span>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 glass-card rounded-2xl p-6 border border-lavender/20"
        >
          <p className="font-display text-lg md:text-xl text-foreground/80 italic">
            We look forward to celebrating with you!
          </p>
          <p className="font-body text-sm text-muted-foreground mt-2">
            Your presence will make our special day even more memorable
          </p>
        </motion.div>

        {/* Year with Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <span className="font-display text-2xl md:text-3xl text-gold font-medium tracking-wider">
              December 2025
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </motion.div>

        {/* Bottom Decorative Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-lavender/40 to-transparent" />
          <div className="flex justify-center mt-4 gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-lavender/40"
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
