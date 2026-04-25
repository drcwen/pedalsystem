import { motion } from "framer-motion";
import { fadeScale } from "../../animations/fadeScale";
import {buttonClickBounce} from "../../animations/buttonClickBounce"
import { ImCross } from "react-icons/im";

function BikeDetails({ onClose }) {

  return (
  <div className="fixed inset-0 flex items-center justify-center z-50">

    <div className="absolute inset-0 bg-black/70" />

    <motion.div
      initial={fadeScale.initial}
      animate={fadeScale.animate}
      transition={fadeScale.transition}
      className="relative z-10"
    >
      <div className="relative rounded-3xl shadow-xl bg-darkblue px-20 py-20">

        <div className='absolute top-10 right-10'>
          <motion.button
              whileHover={buttonClickBounce.whileHover}
              whileTap={buttonClickBounce.whileTap}
              onHoverStart={buttonClickBounce.onHoverStart}
              onClick={onClose}
          > 
            <ImCross className='text-white cursor-pointer'
             />
          </motion.button>
        </div>

        <div className="flex flex-row gap-10">
          <div className='bg-white rounded-2xl shadow-xl p-5'>
            <img
              src="https://res.cloudinary.com/dp3vkgxtb/image/upload/v1775884918/family_bike_hkm9lu.png"
              className="w-60 rounded-2xl"
            />
          </div>

          <div className='w-70 flex flex-col justify-center items-start gap-5'>
              <div className=''>
                  <h1 className='text-3xl font-akagi text-white font-black tracking-wide'>Family Bike</h1>
                  <h1 className='text-lg font-akagi text-white font-bold'>P150/hr</h1>
              </div>
              
              <h1 className='text-md font-akagi text-[#a3a3a3] font-semibold'>This bike can be enjoyed by three people with two passengers and one driver.</h1>
              <motion.button
                  whileHover={buttonClickBounce.whileHover}
                  whileTap={buttonClickBounce.whileTap}
                  onHoverStart={buttonClickBounce.onHoverStart}
              >
                  <div className='px-4 py-2 bg-yellow rounded-lg cursor-pointer'>
                      <h1 className='text-lg font-akagi font-bold text-darkblue'>Reserve</h1>
                  </div>
              </motion.button>
          </div>
          

          
        </div>

      </div>
    </motion.div>

  </div>
  )

    
}

export default BikeDetails;