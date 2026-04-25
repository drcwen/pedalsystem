import { fadeScale } from "../../animations/fadeScale"
import NumberField from "../../components/ui/NumberField"
import { motion } from "motion/react"

function VerifyCode() {

    return (

    <div className='fixed inset-0 flex items-center justify-center z-50'>

        <div className="absolute inset-0 bg-black/70" />

        <motion.div
            initial={fadeScale.initial}
            animate={fadeScale.animate}
            transition={fadeScale.transition}
            className="relative z-10"
        >
            <div className='px-10 py-10 bg-darkblue rounded-2xl flex flex-col gap-10 shadow-xl'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-4xl font-akagi font-black text-yellow tracking-wide'>VERIFY CODE</h1>
                    <h1 className='text-md font-akagi font-semibold text-white'>Enter the code sent to your provided email.</h1>
                </div>  

                <div className=''>
                    <form className='flex flex-col items-center gap-10'>
                        <NumberField Placeholder="Enter 6-Digit Code"
                            Length="6"/>

                        <div className='bg-blue rounded-lg px-3 py-2 w-fit shadow-xl'>
                            <h1 className='text-xl font-akagi font-bold text-white'>Submit</h1>
                        </div>
                    </form>
                </div>
            </div>

        </motion.div>

    </div>
    )
}

export default VerifyCode