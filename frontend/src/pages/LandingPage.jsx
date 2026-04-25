import Hero from "../components/sections/HeroSection"
import { useState } from "react";
import Navigation from "../components/layout/Navigation/NavigationPC"
import LandingBikes from "../components/sections/LandingBikesSection"
import BikeDetails from "../components/bikes/BikeDetails"

function LandingPage() {
  
  const [showModal, setShowModal] = useState(true);

  return (
    <>
        <div className='w-full'>
            <Navigation />
            <Hero />
            <LandingBikes />
            {showModal && <BikeDetails onClose={() => setShowModal(false)} />}
        </div>
        

    </>
  )
}

export default LandingPage
