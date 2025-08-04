import { motion } from "framer-motion";
import { Crown, Clock, MapPin, Phone, Utensils, Star, Sparkles } from "lucide-react";
import { useLocation } from "wouter";
import FloatingParticles from "@/components/floating-particles";
import GoogleReview from "@/components/google-review";

export default function Welcome() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen elegant-gradient relative overflow-hidden">
      <FloatingParticles />

      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
      </div>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Star style={{ color: 'var(--elegant-gold)' }} className="text-4xl" />
      </div>
      <div className="absolute top-20 right-20 opacity-20">
        <Sparkles style={{ color: 'var(--elegant-gold)' }} className="text-5xl" />
      </div>
      <div className="absolute bottom-10 left-20 opacity-20">
        <Star style={{ color: 'var(--elegant-gold)' }} className="text-3xl" />
      </div>

      <div className="relative z-20 min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo and Restaurant Name */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            {/* Golden Crown Logo */}
            <motion.div
              className="w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center elegant-shadow border-4"
              style={{
                backgroundColor: 'white',
                borderColor: 'var(--elegant-gold)'
              }}
              animate={{
                y: [0, -8, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Crown className="text-8xl" style={{ color: 'var(--elegant-gold)' }} />
            </motion.div>

            <motion.h1
              className="font-cinzel text-6xl md:text-8xl font-bold drop-shadow-lg mb-4"
              style={{ color: 'var(--elegant-gold)' }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Maharaja Feast
            </motion.h1>
            <motion.p
              className="font-cormorant text-xl md:text-2xl italic mt-6 font-medium"
              style={{ color: 'var(--elegant-cream)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Where Royal Traditions Meet Culinary Excellence
            </motion.p>
          </motion.div>

          {/* View Menu Button - Moved to middle */}
          <motion.button
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLocation("/menu")}
            className="px-12 py-4 rounded-full font-cinzel text-xl font-bold transition-all duration-300 elegant-shadow border-2 mb-12"
            style={{
              color: 'var(--elegant-gold)',
              borderColor: 'var(--elegant-gold)',
              backgroundColor: 'transparent'
            }}
          >
            <span className="flex items-center">
              <Utensils className="inline-block mr-3 text-xl" />
              Explore Our Royal Menu
            </span>
          </motion.button>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            className="elegant-card rounded-3xl p-10 md:p-16 elegant-shadow border-2"
            style={{ borderColor: 'var(--elegant-gold)' }}
          >
            <motion.h2
              className="font-cinzel text-4xl md:text-5xl font-bold mb-8"
              style={{ color: 'var(--elegant-gold)' }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
            >
              Royal Heritage
            </motion.h2>
            <motion.p
              className="font-cormorant text-xl md:text-2xl leading-relaxed mb-10 font-medium"
              style={{ color: 'var(--elegant-gray)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            >
              Experience the grandeur of royal dining at Maharaja Feast, where authentic flavors meet
              regal ambiance. Our master chefs craft each dish with centuries-old recipes passed down
              through generations, creating an unforgettable culinary journey fit for royalty.
            </motion.p>

            {/* Restaurant Details */}
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
            >
              <motion.div
                className="text-center p-6 rounded-2xl border-2"
                style={{ borderColor: 'var(--elegant-gold)' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Clock className="text-3xl mx-auto mb-4" style={{ color: 'var(--elegant-gold)' }} />
                <h3 className="font-playfair text-2xl font-bold mb-3" style={{ color: 'var(--elegant-gold)' }}>
                  Timings
                </h3>
                <p className="font-cormorant text-lg" style={{ color: 'var(--elegant-gray)' }}>Mon - Sun<br />11:00 AM - 11:00 PM</p>
              </motion.div>
              <motion.div
                className="text-center p-6 rounded-2xl border-2"
                style={{ borderColor: 'var(--elegant-gold)' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="text-3xl mx-auto mb-4" style={{ color: 'var(--elegant-gold)' }} />
                <h3 className="font-playfair text-2xl font-bold mb-3" style={{ color: 'var(--elegant-gold)' }}>
                  Address
                </h3>
                <p className="font-cormorant text-lg" style={{ color: 'var(--elegant-gray)' }}>Royal Palace Complex<br />Heritage Lane, Mumbai</p>
              </motion.div>
              <motion.div
                className="text-center p-6 rounded-2xl border-2"
                style={{ borderColor: 'var(--elegant-gold)' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Phone className="text-3xl mx-auto mb-4" style={{ color: 'var(--elegant-gold)' }} />
                <h3 className="font-playfair text-2xl font-bold mb-3" style={{ color: 'var(--elegant-gold)' }}>
                  Contact
                </h3>
                <p className="font-cormorant text-lg" style={{ color: 'var(--elegant-gray)' }}>+91 98765 43210<br />info@maharajafeast.com</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Google Review Section */}
          <GoogleReview className="mt-12" />
        </div>
      </div>
    </div>
  );
}
