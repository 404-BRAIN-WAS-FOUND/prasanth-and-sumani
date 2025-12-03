import { motion } from "framer-motion";
import { MapPin, Clock, Calendar } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  delay?: number;
}

const EventCard = ({ title, date, time, venue, address, delay = 0 }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="relative glass-card rounded-2xl p-6 md:p-8 border border-lavender/20 hover:border-lavender/40 transition-colors duration-300"
    >
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.2 }}
        viewport={{ once: true }}
        className="font-display text-2xl md:text-3xl font-semibold text-primary mb-6 text-center"
      >
        {title}
      </motion.h3>

      {/* Divider */}
      <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />

      {/* Date */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <Calendar className="w-5 h-5 text-gold" />
        <span className="font-display text-lg md:text-xl text-foreground">{date}</span>
      </div>

      {/* Time */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <Clock className="w-5 h-5 text-gold" />
        <span className="font-body text-xl md:text-2xl font-semibold text-primary">{time}</span>
      </div>

      {/* Venue */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-rose" />
          <span className="font-display text-lg text-foreground font-medium">{venue}</span>
        </div>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{address}</p>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-lavender/30 rounded-tl-lg" />
      <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-lavender/30 rounded-br-lg" />
    </motion.div>
  );
};

export default EventCard;
