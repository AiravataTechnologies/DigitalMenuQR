import { motion } from "framer-motion";
import { Star, ExternalLink, MessageSquare, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GoogleReviewProps {
  className?: string;
}

export default function GoogleReview({ className = "" }: GoogleReviewProps) {
  const handleReviewClick = () => {
    window.open("https://g.co/kgs/7e6k6y2", "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      className={`elegant-card rounded-3xl p-8 md:p-12 elegant-shadow border-2 ${className}`}
      style={{ borderColor: 'var(--elegant-gold)' }}
    >
      {/* Header Section */}
      <motion.div
        className="text-center mb-8"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
      >
        <div className="flex justify-center items-center mb-4">
          <Heart 
            className="text-3xl mr-3" 
            style={{ color: 'var(--elegant-gold)' }} 
            fill="currentColor"
          />
          <h3 className="font-cinzel text-3xl md:text-4xl font-bold" 
              style={{ color: 'var(--elegant-gold)' }}>
            Love Our Royal Experience?
          </h3>
          <Heart 
            className="text-3xl ml-3" 
            style={{ color: 'var(--elegant-gold)' }} 
            fill="currentColor"
          />
        </div>
        
        <motion.p
          className="font-cormorant text-lg md:text-xl font-medium mb-6"
          style={{ color: 'var(--elegant-gray)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
        >
          Share your royal dining experience with fellow food enthusiasts and help us serve better!
        </motion.p>
      </motion.div>

      {/* Review Stats */}
      <motion.div
        className="flex justify-center items-center mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
      >
        <div className="flex items-center bg-white rounded-full px-6 py-3 elegant-shadow border-2"
             style={{ borderColor: 'var(--elegant-gold)' }}>
          <div className="flex items-center mr-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star}
                className="h-5 w-5 mr-1" 
                style={{ color: 'var(--elegant-gold)' }}
                fill="currentColor"
              />
            ))}
          </div>
          <span className="font-cinzel text-lg font-bold" style={{ color: 'var(--elegant-gold)' }}>
            4.8 Rating
          </span>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
      >
        {/* Main Review Button */}
        <motion.div
          className="text-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={handleReviewClick}
            data-testid="button-google-review"
            className="px-10 py-4 rounded-full font-cinzel text-lg font-bold transition-all duration-300 elegant-shadow border-2 hover:shadow-xl transform hover:-translate-y-1"
            style={{
              backgroundColor: 'var(--elegant-gold)',
              borderColor: 'var(--elegant-gold)',
              color: 'white'
            }}
          >
            <div className="flex items-center">
              <Star className="mr-3 h-5 w-5" fill="currentColor" />
              <span>Rate & Review Us on Google</span>
              <ExternalLink className="ml-3 h-5 w-5" />
            </div>
          </Button>
        </motion.div>

        {/* Supporting Text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
        >
          <p className="font-cormorant text-base md:text-lg italic"
             style={{ color: 'var(--elegant-gray)' }}>
            Your feedback helps us maintain our royal standards and reach more food lovers
          </p>
        </motion.div>

        {/* Quick Action Buttons */}
        <motion.div
          className="grid md:grid-cols-2 gap-4 mt-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={handleReviewClick}
              variant="outline"
              data-testid="button-quick-rate"
              className="w-full py-3 rounded-full font-cinzel font-semibold border-2 transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: 'var(--elegant-gold)',
                color: 'var(--elegant-gold)',
                backgroundColor: 'transparent'
              }}
            >
              <Star className="mr-2 h-4 w-4" />
              Quick Rate
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={handleReviewClick}
              variant="outline"
              data-testid="button-write-review"
              className="w-full py-3 rounded-full font-cinzel font-semibold border-2 transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: 'var(--elegant-gold)',
                color: 'var(--elegant-gold)',
                backgroundColor: 'transparent'
              }}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Write Review
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}