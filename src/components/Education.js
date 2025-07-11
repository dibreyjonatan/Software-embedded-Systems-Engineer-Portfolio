import React, { useRef } from 'react'   
import { motion,useScroll } from 'framer-motion'
import LiIcon from './LiIcon'; // Assuming you have a component for the list icon
const Details= ({type, time, place, info}) => {
    const ref=useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
         <LiIcon reference={ref}/>
         <motion.div
         initial={{y:50}}
         whileInView={{y:0}}
         transition={{duration:0.5, type:"spring"}}
         >
            <h3 className='capitalize font-bold text-2xl'>
                {type}
            </h3>
            <span className='capitalize font-medium  text-dark/75'>{time} | {place}</span>
            <p className="font-medium w-full">{info}</p>
         </motion.div>
        </li>
    )
}
const Education = () => {
    const ref=useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "end start"]
        }
    );
    return (    
        <div className="my-64">
            <h2 className='text-8xl font-bold mb-32 w-full text-center'>Experience</h2>
            <div  ref={ref} className="w-[75%] mx-auto relative">
                <motion.div 
                style={{ scaleY: scrollYProgress }}
                className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                   <Details type="Engineering Diploma in Electronics systems, Computer Science and Networking" 
                   time="Oct 2022 - July 2025" 
                    place="National School of Applied Sciences, Oujda, Morocco"
                    info="Specializing in embedded systems, software engineering, and networking." />
                    <Details type="Bachelor's Degree in Electronics Computer Science and Automation Engineering" 
                   time="Oct 2019 - July 2022" 
                   place="Faculty of Sciences and Techniques, Beni Mellal, Morocco"
                    info="Fundamentals of embedded systems, computer science, and automation engineering." />


                </ul>
            </div>
        </div>
    )
}

export default Education;       