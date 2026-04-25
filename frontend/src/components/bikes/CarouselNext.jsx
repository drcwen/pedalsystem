import { motion } from "framer-motion";
import { MdOutlineNavigateNext } from "react-icons/md";
import { buttonClickBounce } from "../../animations/buttonClickBounce";

function CarouselNext({ onNext }) {
  return (
    <div className="flex items-center gap-5">
      
      {/* Next */}
      <motion.button
        whileHover={buttonClickBounce.whileHover}
        whileTap={buttonClickBounce.whileTap}
        onClick={onNext}
      >
        <MdOutlineNavigateNext className="text-6xl cursor-pointer text-blue" />
      </motion.button>

    </div>
  );
}

export default CarouselNext;
