import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 justify-center ">
       
        <h1 className="bold-52 lg:bold-88">Ward Round</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          An app specifically designed for medical training. Aiming to provide students all around the world access to global medical schools' ward rounds.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(1).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            Bridging the Gap in Medical Education
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Download App" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        {/* <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Project</p>
              
            </div>
            <p className="bold-20 text-white">Ward Round</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Global</p>
              <p className="bold-20 text-white">Education</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Medical</p>
              <p className="bold-20 text-white">Mobile App</p>
            </div>
          </div>
        </div> */}
          <div className="flex flex-1 items-center justify-end">
          <Image src="/phoneward.png" alt="phones" width={550} height={870} />
        </div>

          
      </div>
    </section>
  )
}

export default Hero