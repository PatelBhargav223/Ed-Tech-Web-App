import React from 'react'
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timeLineImgae from "../../../assets/Images/TimelineImage.png"

const Timeline =[
    {
        Logo: logo1,
        heading:"Leadership",
        Description:"Fully committed to the success of the company"
    },
    {
        Logo: logo2,
        heading:"Leadership",
        Description:"Fully committed to the success of the company"
    },
    {
        Logo: logo3,
        heading:"Leadership",
        Description:"Fully committed to the success of the company"
    },
    {
        Logo: logo4,
        heading:"Leadership",
        Description:"Fully committed to the success of the company"
    },
]
const TimeLineSection = () => {
  return (
    <div>
      <div className=' flex flex-col items-center gap-10'>
        {/* this is  left part */}
        <div className='w-[45%] flex flex-col gap-5'>
            {
                Timeline.map((element, index)=>{
                    return(
                        <div className='flex flex-row gap-6' key={index}>

                            {/* left side */}
                            <div className='w-[50px] h-[50px] bg-white flex items-center'>
                                <img src={element.Logo}></img>
                            </div>
                            {/* right side  */}
                            <div>
                                <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                                <p className='text-base'>{element.Description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>

        {/* this is right side part */}
        <div className='relative shadow-blue-400'>
            <img src={timeLineImgae} alt="timeLine Image"
            className='shadow-white object-cover h-fit' />

            <div className='absolute bg-caribbeangreen-600 flex flex-row text-white uppercase py-10 left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <div className='flex flex-row gap-5 items-center justify-between border-r border-caribbeangreen-300'>
                    <p className='text-3xl font-bold'>10</p>
                    <p className=' text-caribbeangreen-300 text-sm'>years of Experience</p>
                </div>
                <div className='flex flex-row gap-5 items-center justify-between'>
                    <p className='text-3xl font-bold'>250</p>
                    <p className=' text-caribbeangreen-300 text-sm'>type of courses</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TimeLineSection
