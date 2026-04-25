import { useBikes } from "../../hooks/useBikes";
import { carouselVariants } from "../../animations/carouselVariants";
import { motion, AnimatePresence } from "framer-motion";


import BikeCard from "../bikes/BikeCard";

function BikesMobile() {
    const { allBikes } = useBikes();

  return (

    <div className='lg:hidden lg:flex flex flex-1 flex-col py-20 justify-center items-center gap-20'>

        <div className='flex bg-blue rounded-lg px-5 py-4 items-center text-center font-black '>
            <h1 className='text-3xl text-[#ffffff] tracking-wide font-akagi '>All Bikes</h1>
        </div>
        <AnimatePresence mode="wait">

            {allBikes.map((bike) => (
                <motion.div
                    key={bike._id}
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
  );
}

export default BikesMobile;