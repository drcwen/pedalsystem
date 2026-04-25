import { fadeScale } from "../../animations/fadeScale"
import {buttonClickBounce} from "../../animations/buttonClickBounce"
import { motion } from "motion/react"

function ForgotPasswordSection() {

  return (

    <div className='flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:gap-10 gap-10 lg:flex-1'>

        <motion.div
            initial={fadeScale.initial}
            animate={fadeScale.animate}
            transition={fadeScale.transition}
        >

            {/*3Jremy Title*/}
            <div className='lg:flex lg:h-full items-center justify-center'>
                <h1 className='lg:text-6xl lg:text-2xl text-3xl font-akagi text-center leading-tight font-black 
                text-yellow [text-shadow:2px_2px_8px_rgba(0,0,0,0.8)]'>3Jremy's <br/> Rent A Bike!</h1>
            </div>
        </motion.div>

    
        {/*Login Grid*/}
        <motion.div
            initial={fadeScale.initial}
            animate={fadeScale.animate}
            transition={fadeScale.transition}
        >
            <div className='md:h-full md:flex items-center justify-center'>
                <div className='bg-white md:rounded-3xl md:px-20 px-5 py-10 rounded-xl md:py-20 flex flex-col gap-10 md:gap-10'>

                    <div className='flex flex-col gap-15'>
                        
                        <div className='flex flex-col gap-2'>
                            <h1 className='md:text-3xl text-2xl font-bold tracking-wide text-darkblue'>Find your account</h1>
                            <h1 className='md:text-xl text-md font-semibold tracking-wide text-gray'>Enter your email associated with <br className='hidden lg:flex'/> your account.</h1>
                        </div>

                        <form className='flex flex-col gap-10 items-center'>
                           
                            <div className='flex flex-col gap-5'>
                                
                                {/*Username*/}
                                <input className='w-full md:w-90 border border-2 border-gray rounded-xl md:px-3 px-2 py-1 md:py-2 font-akagi 
                                md:text-xl text-lg font-semibold text-gray' required placeholder='Username'/>

                               
                            </div>

                            {/*Login Button*/}
                            <motion.button
                                whileHover={buttonClickBounce.whileHover}
                                whileTap={buttonClickBounce.whileTap}
                                onHoverStart={buttonClickBounce.onHoverStart}
                            >
                                <div className='cursor-pointer hover:bg-navyblue transition-all duration-300 text-lg rounded-xl bg-blue w-fit px-6 py-2 font-akagi font-bold text-white'>Next</div>
                            </motion.button>
                        </form>

                    </div>

                   
                </div>
                
            </div>

        </motion.div>
    </div>

  )

  }

export default ForgotPasswordSection