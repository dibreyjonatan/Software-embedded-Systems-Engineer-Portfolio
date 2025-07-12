import React, { useRef } from 'react'   
import { motion,useScroll } from 'framer-motion'
import LiIcon from './LiIcon'; // Assuming you have a component for the list icon
const Details= ({position, company, companyLink, time, address, work}) => {
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
                {position} &nbsp;<a href={companyLink} target="_blank" 
                className='text-primary capitalize dark:text-primaryDark'>@{company}</a>
            </h3>
            <span className='capitalize font-medium  text-dark/75 dark:text-light/75'>{time} | {address}</span>
            <p className="font-medium w-full">{work}</p>
         </motion.div>
        </li>
    )
}
const Experience = () => {
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
                className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light "/>
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                   <Details position="System Verification Engineering Intern" 
                   company="SECURE-IC" companyLink="https://www.secure-ic.fr/" 
                   time="Feb 2025 - Aug 2025" 
                    address="Oujda, Morocco"
                    work="Developing and executing test plans for secure embedded systems." />
                    <Details position="AI embedded Engineering Intern" 
                   company="CHU Mohammed VI Oujda" companyLink="http://www.chuoujda.ma/" 
                   time="Juillet 2024 - August 2024" address="Oujda, Morocco"
                    work="Developping an AI computer Vision system to detect and Alarm patients falling off from bed" />
                    <Details position="Network Engineering Intern" 
                   company="CHU Mohammed VI Oujda" companyLink="http://www.chuoujda.ma/" 
                   time="15 Juillet 2023 - 15 August 2023" address="Oujda, Morocco"
                    work="Observation and study of the network architecture of the Hospital" />
                </ul>
            </div>
        </div>
    )
}

export default Experience;       