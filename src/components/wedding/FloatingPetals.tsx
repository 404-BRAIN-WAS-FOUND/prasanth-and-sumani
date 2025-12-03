import { motion } from "framer-motion";

const petals = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 8 + Math.random() * 6,
  size: 8 + Math.random() * 12,
}));

const FloatingPetals = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute rounded-full bg-lavender/30"
          style={{
            left: `${petal.x}%`,
            width: petal.size,
            height: petal.size,
          }}
          initial={{ y: -20, opacity: 0, rotate: 0 }}
          animate={{
            y: ["0vh", "110vh"],
            opacity: [0, 0.6, 0.6, 0],
            rotate: [0, 360],
            x: [0, Math.sin(petal.id) * 50, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
