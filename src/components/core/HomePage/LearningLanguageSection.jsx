import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import Compare_with_others from "../../../assets/Images/Compare_with_others.png"
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png"
import CTABUTTON from "../HomePage/Button"
const LearningLanguageSection = () => {
  return (
    <div className='mt-[120px]'>
      <div className='flex flex-col gap-5 items-center'>
        <div className='text-4xl font-semibold text-center'>
            Your Swiss knife for
                <HighlightText text={"learning any language"}/>
        </div>
        <div className='text-center text-richblack-700 mx-auto text-base font-medium w-[70%]'>
            using spin make learning multiple language easy. with 20+ language realistict voice over, progress tracking and custom schedule and more
        </div>
        <div className='flex flex-row items-center justify-center mt-5'>
            <img src={know_your_progress} alt="" className='object-contain -mr-32' />
            <img src={Compare_with_others} alt=""className='object-contain ' />
            <img src={Plan_your_lessons} alt="" className='object-contain -ml-36' />
        </div>
        <div>
            <CTABUTTON active={true} linto={"/singup"} className="w-fit">
             <div>Learn More</div></CTABUTTON> 
        </div>
      </div>
    </div>
  )
}

export default LearningLanguageSection
