import { motion, AnimatePresence } from "framer-motion";
import BikeCard from "./BikeCard";
import CarouselPrev from "./CarouselPrev";
import CarouselNext from "./CarouselNext";
import { carouselVariants } from "../../animations/carouselVariants";

function BikeCarousel({
  items,
  currentIndex,
  direction,
  onNext,
  onPrev,
}) {
  const visibleItems = items.slice(currentIndex, currentIndex + 2);

  return (

    
    <div className="flex items-center justify-center gap-10">

      <CarouselPrev onPrev={onPrev} />

      <div className="grid grid-cols-2 gap-30">
        <AnimatePresence mode="wait" custom={direction}>
          {visibleItems.map((bike) => (
            <motion.div
              key={bike._id}
              custom={direction}
              variants={carouselVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <BikeCard bike={bike} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <CarouselNext onNext={onNext} />

    </div>
  );
}

export default BikeCarousel;