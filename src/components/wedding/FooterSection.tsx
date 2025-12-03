import { motion } from "framer-motion";
import { Heart, Cross } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 md:py-16 px-4 bg-gradient-to-b from-background to-lavender-light/30">
      <div className="container max-w-2xl mx-auto text-center">
        {/* Cross Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <Cross className="w-10 h-10 text-gold mx-auto" />
        </motion.div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-display text-xl md:text-2xl italic text-foreground/90 mb-4">
            "What God has joined together, let no one separate"
          </p>
          <p className="font-body text-sm text-muted-foreground mb-8">
            — Mark 10:9
          </p>
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4"
        >
          <span className="font-display text-2xl md:text-3xl text-primary">Sumani</span>
          <Heart className="w-5 h-5 text-rose fill-rose animate-pulse" />
          <span className="font-display text-2xl md:text-3xl text-primary">Prasanth</span>
        </motion.div>

        {/* Thank You */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 font-body text-sm text-muted-foreground"
        >
          We look forward to celebrating with you!
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-lavender to-transparent mx-auto" />
        </motion.div>

        {/* Year */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 font-display text-lg text-gold"
        >
          December 2025
        </motion.p>
      </div>
    </footer>
  );
};

export default FooterSection;
