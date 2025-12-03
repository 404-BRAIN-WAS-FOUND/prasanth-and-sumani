import { motion } from "framer-motion";
import { MapPin, Clock, Calendar, ExternalLink } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl?: string;
  delay?: number;
}

const EventCard = ({ title, date, time, venue, address, mapsUrl, delay = 0 }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative glass-card rounded-3xl p-6 md:p-8 border border-lavender/20 hover:border-lavender/50 transition-all duration-500 group overflow-hidden"
    >
      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-lavender/10 via-transparent to-rose/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Shimmer Effect on Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
      />

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.2 }}
        viewport={{ once: true }}
        className="font-display text-2xl md:text-3xl font-semibold text-primary mb-6 text-center relative z-10"
      >
        {title}
      </motion.h3>

      {/* Divider */}
      <div className="relative flex items-center justify-center gap-3 mb-6">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/60" />
        <div className="w-2 h-2 rounded-full bg-gold/60" />
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/60" />
      </div>

      {/* Date */}
      <motion.div 
        className="flex items-center justify-center gap-3 mb-4 relative z-10"
        whileHover={{ scale: 1.02 }}
      >
        <div className="p-2 rounded-full bg-gold/10">
          <Calendar className="w-5 h-5 text-gold" />
        </div>
        <span className="font-display text-lg md:text-xl text-foreground font-bold">{date}</span>
      </motion.div>

      {/* Time */}
      <motion.div 
        className="flex items-center justify-center gap-3 mb-6 relative z-10"
        whileHover={{ scale: 1.02 }}
      >
        <div className="p-2 rounded-full bg-primary/10">
          <Clock className="w-5 h-5 text-primary" />
        </div>
        <span className="font-body text-xl md:text-2xl font-semibold text-primary">{time}</span>
      </motion.div>

      {/* Venue */}
      <div className="text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="p-1.5 rounded-full bg-rose/10">
            <MapPin className="w-4 h-4 text-rose" />
          </div>
          <span className="font-display text-lg text-foreground font-medium">{venue}</span>
        </div>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">{address}</p>
        
        {mapsUrl && (
          <motion.a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-lavender/20 hover:from-primary/20 hover:to-lavender/30 text-primary font-medium rounded-full transition-all duration-300 text-sm border border-primary/20 hover:border-primary/40 shadow-sm hover:shadow-md"
          >
            <MapPin className="w-4 h-4" />
            View on Maps
            <ExternalLink className="w-3 h-3" />
          </motion.a>
        )}
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-lavender/30 rounded-tl-xl group-hover:border-lavender/50 transition-colors duration-300" />
      <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-lavender/30 rounded-br-xl group-hover:border-lavender/50 transition-colors duration-300" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold/20 rounded-tr-lg group-hover:border-gold/40 transition-colors duration-300" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold/20 rounded-bl-lg group-hover:border-gold/40 transition-colors duration-300" />
    </motion.div>
  );
};

export default EventCard;
