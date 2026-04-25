import {buttonClickBounce} from "../../animations/buttonClickBounce"
import { motion } from "motion/react"
import BackButton from "../ui/BackButton"
import { fadeBack } from "../../animations/fadeBack"
import CompanyLogo from "../../components/ui/CompanyLogo"
import TextField from "../../components/ui/TextField"

function ForgotPasswordSection() {

  return (

    <div className='flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:gap-10 gap-10 lg:flex-1'>

        <CompanyLogo />

        {/*Login Grid*/}
        <motion.div
            initial={fadeBack.initial}
            animate={fadeBack.animate}
            transition={fadeBack.transition}
        >
            <div className='md:h-full md:flex items-center justify-center'>
                <div className='relative bg-white md:rounded-3xl md:px-20 px-10 py-10 rounded-xl md:py-20 flex flex-col gap-10 md:gap-10'>

                    {/*Back Button*/}
                    <BackButton backRoute={"/login"}/>

                    <div className='flex flex-col gap-15'>
                        
                        <div className='flex flex-col gap-2'>
                            <h1 className='md:text-3xl text-2xl font-bold tracking-wide text-darkblue'>Find your account</h1>
                            <h1 className='md:text-xl text-md font-semibold tracking-wide text-gray'>Enter your email associated with <br className='hidden lg:flex'/> your account.</h1>
                        </div>

                        <form className='flex flex-col gap-10 items-center'>
                           
                           <TextField Type="email" Placeholder="Email"/>

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