import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion} from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { experiences } from '../constants';
import { textVariant } from '../utils/motion';

const  ExperienceCard = ({ experience}) => {
  return(
    <VerticalTimelineElement 
      contentStyle={{ background: '#12063b', color:'green'}}
      contentArrowStyle={{ borderRight: '7px solid blue'}}
      date={experience.date}
      iconStyle={{ background: experience.iconBg}}
      iconClassName={"icon_box"}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.journey_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }>
        <div>
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
          <p className='font-semibold text-[16px] text-violet' style={{margin: 0}}>
            {experience.journey_name}
          </p>
        </div>
        <ul className='list-disc space-y-2 mt-5 ml-5'>
          {experience.Notes.map((Note, index) => (
            <li key={`experience-Note-${index}`} className="text-white tracking-wider pl-1 text-[14px]">
              {Note}
            </li>
           
          ))}
        </ul>
     </VerticalTimelineElement>
  )
  
}
const Experience = () => {
  return (
    <>
      <motion.div className={`${styles.sectionHeadText} flex flex-row bouncing-text`} variants={textVariant}>
          <div class="b">M</div>
          <div class="o">Y &nbsp;</div>
          <div class="u">J</div>
          <div class="n">O</div>
          <div class="c">U</div>
          <div class="e">R</div>
          <div class="d">N</div>
          <div class="s">E</div>
          <div class="y">Y</div>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline className='line_color '>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience)