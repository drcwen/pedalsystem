import { useState } from "react";
import { useBikes } from "../../hooks/useBikes";
import BikeCarousel from "../../components/bikes/BikesCarousel";
import BikeMobile from "../../components/bikes/BikesMobile"

function LandingBikes() {
  const { bikes, familyBikes } = useBikes();

  const [soloIndex, setSoloIndex] = useState(0);
  const [familyIndex, setFamilyIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSolo = () => {
    setDirection(1);
    setSoloIndex((p) => (p + 2 >= bikes.length ? 0 : p + 2));
  };

  const prevSolo = () => {
    setDirection(-1);
    setSoloIndex((p) => (p - 2 < 0 ? bikes.length - 2 : p - 2));
  };

  const nextFamily = () => {
    setDirection(1);
    setFamilyIndex((p) => (p + 2 >= familyBikes.length ? 0 : p + 2));
  };

  const prevFamily = () => {
    setDirection(-1);
    setFamilyIndex((p) => (p - 2 < 0 ? familyBikes.length - 2 : p - 2));
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7] md:py-25 md:px-30 md:flex md:flex-col md:gap-20 justify-center">

        {/*PC*/}
        <div className='hidden lg:flex lg:flex-col md:gap-20'>

            <h1 className='font-akagi font-black tracking-wide text-blue text-4xl'>Solo Bikes</h1>
            {/* Solo */}
            <BikeCarousel
                items={bikes}
                currentIndex={soloIndex}
                direction={direction}
                onNext={nextSolo}
                onPrev={prevSolo}
            />

            {/* Family Bikes */}
            <h1 className='font-akagi font-black tracking-wide text-blue text-4xl'>Family Bikes</h1>
            <BikeCarousel
                items={familyBikes}
                currentIndex={familyIndex}
                direction={direction}
                onNext={nextFamily}
                onPrev={prevFamily}
            />

        </div>

        {/*Mobile*/}

        <BikeMobile/>

    </div>
  );
}

export default LandingBikes;