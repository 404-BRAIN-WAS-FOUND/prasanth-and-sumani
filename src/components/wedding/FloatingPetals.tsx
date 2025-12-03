import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const petals = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 10 + Math.random() * 8,
  size: 6 + Math.random() * 14,
  type: i % 4, // 0: circle, 1: heart, 2: diamond, 3: sparkle
}));

const sparkles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 2 + Math.random() * 3,
}));

const FloatingPetals = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Elements */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
          }}
          initial={{ y: -20, opacity: 0, rotate: 0 }}
          animate={{
            y: ["0vh", "110vh"],
            opacity: [0, 0.7, 0.7, 0],
            rotate: [0, petal.type === 2 ? 180 : 360],
            x: [0, Math.sin(petal.id) * 60, Math.cos(petal.id) * 30, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {petal.type === 0 && (
            <div
              className="rounded-full bg-gradient-to-br from-lavender/40 to-rose/30"
              style={{ width: petal.size, height: petal.size }}
            />
          )}
          {petal.type === 1 && (
            <Heart
              className="text-rose/40 fill-rose/20"
              style={{ width: petal.size, height: petal.size }}
            />
          )}
          {petal.type === 2 && (
            <div
              className="bg-gradient-to-br from-gold/40 to-gold-light/30 rotate-45"
              style={{ width: petal.size * 0.7, height: petal.size * 0.7 }}
            />
          )}
          {petal.type === 3 && (
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              className="text-gold/50"
            >
              <path
                fill="currentColor"
                d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z"
              />
            </svg>
          )}
        </motion.div>
      ))}

      {/* Twinkling Sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          className="absolute w-1 h-1 bg-gold/60 rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Ambient Light Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-lavender/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-rose/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-gold/5 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

export default FloatingPetals;
