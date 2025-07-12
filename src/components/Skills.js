import React from 'react'
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark
             text-light p-3 px-3 shadow-dark absolute cursor-pointer text-center
             dark:text-dark dark:bg-light"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
           
           // viewport={{ once: true }} if i don't want repeated animation 
        >
            {name}
        </motion.div>
    );
};

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills </h2>
            <div className="w-full h-screen relative flex items-center justify-center 
            rounded_full bg-circularLight dark:bg-circularDark">
                <motion.div className="flex items-center justify-center rounded-full font-semibold
              bg-dark text-light p-4 shadow-dark  dark:text-dark dark:bg-light"
                    whileHover={{ scale: 1.05 }}>
                    Git
                </motion.div>

                {/* See it as a Cartesian plane with the origin at git element*/}
                <Skill name="Jenkins" x="-0vw" y="-10vw" /> {/* -5vw + 5vw = 0vw, -15vw + 5vw = -10vw */}
                <Skill name="Docker" x="10vw" y="-5vw" />
                <Skill name="Gitlab" x="-15vw" y="0vw" />
                <Skill name="GitHub" x="20vw" y="10vw" />

                <Skill name="Python" x="-15vw" y="-13vw" />
                <Skill name="Java" x="5vw" y="20vw" />
                <Skill name="C" x="5vw" y="10vw" />
                <Skill name="C++" x="-20vw" y="-5vw" />

                <Skill name="Assembly" x="15vw" y="-15vw" />
                <Skill name="Linux" x="-25vw" y="-10vw" />
                <Skill name="Bash" x="-10vw" y="10vw" />
                <Skill name="Make" x="-6vw" y="-4vw" />

                <Skill name="CMake" x="-5vw" y="5vw" />
                <Skill name="VHDL" x="-25vw" y="15vw" />
                <Skill name="Qt" x="25vw" y="-0vw" />
                <Skill name="Matlab" x="5vw" y="-20vw" />
                <Skill name="Verilog" x="-20vw" y="5vw" />
            </div>
        </>
    );
}

export default Skills;