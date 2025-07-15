// import { motion } from "framer-motion";
// import type { MenuItem } from "@shared/schema";

// interface DishCardProps {
//   item: MenuItem;
// }

// export default function DishCard({ item }: DishCardProps) {
//   return (
//     <motion.div
//       whileHover={{ y: -2, scale: 1.01 }}
//       className="dish-card bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 elegant-shadow h-full flex flex-col"
//     >
//       <div className="flex flex-col h-full">
//         {/* Image Section */}
//         <div className="relative aspect-[4/3] overflow-hidden">
//           <img
//             src={item.image}
//             alt={item.name}
//             className="w-full h-full object-cover"
//           />
//           <div
//             className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 border-white shadow-sm ${item.isVeg ? 'bg-green-500' : 'bg-red-500'
//               }`}
//           />
//         </div>

//         {/* Content Section */}
//         <div className="p-2 md:p-3 flex-1 flex flex-col">
//           <div className="flex-1 space-y-1">
//             <h3
//               className="font-serif text-sm md:text-base font-bold leading-tight line-clamp-2"
//               style={{ color: 'var(--elegant-gold)' }}
//             >
//               {item.name}
//             </h3>
//             <p
//               className="font-sans text-xs md:text-sm leading-tight line-clamp-2"
//               style={{ color: 'var(--elegant-gray)' }}
//             >
//               {item.description}
//             </p>
//           </div>

//           {/* Price Section */}
//           <div className="mt-2 pt-2 border-t border-gray-100">
//             <div className="flex justify-center">
//               <span
//                 className="font-serif font-bold text-sm md:text-base"
//                 style={{ color: 'var(--elegant-gold)' }}
//               >
//                 ₹{item.price}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
import { motion } from "framer-motion";
import type { MenuItem } from "@shared/schema";

interface DishCardProps {
  item: MenuItem;
}

export default function DishCard({ item }: DishCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.01 }}
      className="dish-card bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 elegant-shadow h-full flex flex-col"
    >
      <style jsx>{`
        .dish-card .title-text {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.2;
        }
        
        .dish-card .description-text {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.3;
        }
        
        /* Mobile styles */
        @media (max-width: 767px) {
          .dish-card .title-text {
            min-height: 2rem;
            max-height: 2.5rem;
          }
          
          .dish-card .description-text {
            min-height: 1.8rem;
            max-height: 2.2rem;
          }
        }
        
        /* Desktop styles */
        @media (min-width: 768px) {
          .dish-card .title-text {
            min-height: 2.8rem;
            max-height: 4rem;
          }
          
          .dish-card .description-text {
            min-height: 2.5rem;
            max-height: 4rem;
            -webkit-line-clamp: 3;
          }
        }
      `}</style>

      <div className="flex flex-col h-full">
        {/* Image Section - Fixed aspect ratio */}
        <div className="relative w-full overflow-hidden">
          <div className="aspect-[4/3] w-full">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              style={{
                objectPosition: 'center center',
                imageRendering: 'crisp-edges'
              }}
            />
          </div>
          <div
            className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 border-white shadow-sm ${item.isVeg ? 'bg-green-500' : 'bg-red-500'
              }`}
          />
        </div>

        {/* Content Section - Fixed height distribution */}
        <div className="p-2 md:p-4 flex-1 flex flex-col justify-between min-h-0">
          {/* Title and Description - Fixed heights */}
          <div className="flex-1 flex flex-col justify-start space-y-1 md:space-y-2">
            <h3
              className="title-text font-serif text-sm md:text-base lg:text-lg font-bold leading-tight"
              style={{
                color: 'var(--elegant-gold)'
              }}
            >
              {item.name}
            </h3>
            <p
              className="description-text font-sans text-xs md:text-sm lg:text-base leading-tight flex-1"
              style={{
                color: 'var(--elegant-gray)'
              }}
            >
              {item.description}
            </p>
          </div>

          {/* Price Section - Fixed at bottom */}
          <div className="mt-2 md:mt-3 pt-2 md:pt-3 border-t border-gray-100">
            <div className="flex justify-center">
              <span
                className="font-serif font-bold text-sm md:text-lg lg:text-xl"
                style={{ color: 'var(--elegant-gold)' }}
              >
                ₹{item.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
