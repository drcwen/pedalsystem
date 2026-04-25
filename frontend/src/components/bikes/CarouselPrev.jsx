import { motion } from "framer-motion";
import { GrFormPrevious } from "react-icons/gr";

function CarouselPrev({ onPrev }) {
  return (
    <div className="flex items-center gap-5">
      
      {/* Prev */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPrev}
      >
        <GrFormPrevious className="text-6xl cursor-pointer text-blue" />
      </motion.button>

    </div>
  );
}

export default CarouselPrev;