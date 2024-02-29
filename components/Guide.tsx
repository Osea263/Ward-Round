// import Image from 'next/image'
// import React from 'react'

// const Guide = () => {
//   return (
//     <section className="flex  flex-col">
//       <div className="padding-container max-container w-full pb-24">
//         <Image src="/camp.svg" alt="camp" width={50} height={50} />
//         <p className="uppercase  -mt-1 mb-3 text-green-50 bold-40 lg:bold-64">
//           About Ward Round
//         </p>
//         <h2 className="regular-16 xl:max-w-[390px] mb-8">Democratizing access to quality medical education</h2>
//         <div className="flex flex-wrap justify-between lg:gap-10">
          
//           <Image
//             src="/phone.png"
//             alt="phone"
//             width={440}
//             height={1000}
//             className="feature-phone"
//           />
      
//           <p className="xl:max-w-[520px] font-semibold mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">Ward Round is a Mobille app designed to address the significant challenges faced by many countries in their health sectors and medical training. Through Ward Round, we aim to bridge the gap in medical education by providing access to ward rounds of medical schools worldwide, enabling students to learn from global practices in healthcare and optimizing patient care globally. </p>
//         </div>
//       </div>

//       {/* <div className="flexCenter max-container relative w-full">
//         <Image 
//           src="/boat.png"
//           alt="boat"
//           width={1440}
//           height={580}
//           className="w-full object-cover object-center 2xl:rounded-5xl"
//         />

//         <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
//           <Image 
//             src="/meter.svg"
//             alt="meter"
//             width={16}
//             height={158}
//             className="h-full w-auto"
//           />
//           <div className="flexBetween flex-col">
//             <div className='flex w-full flex-col'>
//               <div className="flexBetween w-full">
//                 <p className="regular-16 text-gray-20">Destination</p>
//                 <p className="bold-16 text-green-50">48 min</p>
//               </div>
//               <p className="bold-20 mt-2">Aguas Calientes</p>
//             </div>

//             <div className='flex w-full flex-col'>
//               <p className="regular-16 text-gray-20">Start track</p>
//               <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </section>
//   )
// }

// export default Guide







import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flex-col flexCenter items-center justify-center overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className=" relative w-full flex justify-center">
        <div className="flex flex-1 justify-center items-center align-middle ">
          <Image
            src="/wardphone.png"
            alt="phone"
            width={440}
            height={500}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex flex-col justify-center w-full xl:w-[60%] px-8 ">
          <div className='relative'>
             <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">Democratizing access to quality medical education</p>
            <h2 className="bold-40 lg:bold-64"> About Ward Round</h2>
          </div>


          <p className=" font-semibold mt-10  gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20  w-[70%] text-xl">Ward Round is a Mobille app designed to address the significant challenges faced by many countries in their health sectors and medical training. Through Ward Round, we aim to bridge the gap in medical education by providing access to ward rounds of medical schools worldwide, enabling students to learn from global practices in healthcare and optimizing patient care globally. </p>
   
          
        </div>
      </div>
    </section>
  )
}

export default Guide