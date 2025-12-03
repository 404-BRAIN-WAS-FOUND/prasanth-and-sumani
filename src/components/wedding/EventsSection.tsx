import { motion } from "framer-motion";
import EventCard from "./EventCard";
import CountdownTimer from "./CountdownTimer";

const EventsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-lavender-light/50">
      <div className="container max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Save the Date
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        {/* Countdown */}
        <div className="mb-12 md:mb-16">
          <CountdownTimer />
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <EventCard
            title="Holy Matrimony"
            date="Monday, 29th December 2025"
            time="10:00 AM"
            venue="Infant Jesus Church"
            address="Thallacheruvu Village, Atchampet Mandal, Palnadu District, A.P."
            delay={0}
          />
          <EventCard
            title="Reception"
            date="Tuesday, 30th December 2025"
            time="7:00 PM"
            venue="SNR KALA Convention"
            address="Pedda Amberpet, Hyderabad, Telangana"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
