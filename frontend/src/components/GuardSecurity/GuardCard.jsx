import React from 'react'
import starIcon from '../../assets/images/Star.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs"
 
const GuardCard = ({guard}) => {
    const {name, averageRating, photo, specialization, totalRating} = guard
  return (
    <div className='p-3 lg:p-5'>
        <div>
          <img src={photo} className='w-full h-80' alt="guardimage" />
        </div>
        <h2 className='text-[18px] leading-[30px] lg:text-[20px] lg:leading-9 text-headingColor font-[500]'>
            {name}
        </h2>
        <div className='mt-2 lg:mt-4 flex items-center justify-between'>
         <span className='bg-[#ccf0f3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] 
                          leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'
         >
            {specialization}

         </span>
         <div className="flex items-center gap-[6px]">
        
          
        <Link
          to={`/guards/${guard._id}`}
          className=" w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex  items-center justify-center  group hover:bg-sky-600  hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
        <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-[200] text-headingColor">
            +{totalRating} Rating
          </h3>
          {/* <p className="text-[14px] leading-[24px] font-[400] text-textColor">
            At {experiences[0].experience}
          </p> */}
        </div>

       </div>
    </div>
  )
}

export default GuardCard
