import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2025-12-29T10:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lavender/20 to-transparent blur-2xl -z-10" />
      
      <div className="flex justify-center gap-3 md:gap-6">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Card */}
            <div className="relative glass-card rounded-2xl p-4 md:p-6 min-w-[70px] md:min-w-[100px] border border-lavender/30 overflow-hidden">
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{
                  translateX: ["100%", "-100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.5,
                }}
              />
              
              {/* Number */}
              <motion.span
                key={unit.value}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="block font-display text-3xl md:text-5xl font-bold text-primary relative z-10"
              >
                {String(unit.value).padStart(2, "0")}
              </motion.span>
              
              {/* Label */}
              <span className="block font-body text-xs md:text-sm text-muted-foreground mt-1 uppercase tracking-wider relative z-10">
                {unit.label}
              </span>

              {/* Corner Accents */}
              <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-gold/40 rounded-tl" />
              <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-gold/40 rounded-br" />
            </div>

            {/* Separator Dots */}
            {index < timeUnits.length - 1 && (
              <motion.div
                className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1"
                animate={{
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
