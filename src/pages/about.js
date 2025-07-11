import React, { use } from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import profilePic from '../../public/images/profile/profile_jonatan.jpg'; // Adjust the path as necessary
import {useEffect,useRef} from 'react';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
const AnimatedNumbers=({value})=>{
  const ref=useRef(null);
  const motionValue=useMotionValue(0);
  const springValue=useSpring(motionValue,{duration:3000})
  const isInView=useInView(ref,{once:true});
  useEffect(()=>{
    if(isInView){
      motionValue.set(value);
    }
  },[isInView,value,motionValue]);
  useEffect(()=>{
    springValue.on("change",(latest)=>{
      if(ref.current && latest.toFixed(0)<=value){
        ref.current.textContent=latest.toFixed(0);
      }
    })
  },[springValue,value]);
  
  return <span ref={ref}></span>
}

const About = () => {
  return (
    <>
      <Head>
        <title> About Page</title>
        <meta name="description" content="About Page of an Embedded systems Developer Portfolio" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center text-dark dark:text-light">
        <Layout className='pt-16'>
          <AnimatedText text="Passion fuels purpose !" className="mb-16"/>
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 "> Biography</h2>
              <p className="font-medium">
                Hi, I am Dibrey Jonatan, a passionate embedded systems developer with a strong foundation in software engineering and a keen interest in creating efficient, reliable, and innovative solutions for real-world challenges. My journey in the field has been driven by a desire to push the boundaries of technology and deliver high-quality software that meets the unique demands of embedded systems.
              </p>
              <p className="my-4 font-medium">
                With a solid background in embedded systems engineering, I have honed my skills in designing and implementing software solutions that operate seamlessly within resource-constrained environments. My expertise lies in developing efficient algorithms, optimizing performance, and ensuring the reliability of embedded applications.
              </p>
              <p className="font-medium">
                I thrive on tackling complex problems and finding creative solutions that enhance the functionality and performance of embedded systems. My commitment to continuous learning and staying updated with the latest advancements in the field allows me to deliver cutting-edge solutions that meet the evolving needs of clients and industries.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
             bg-light p-8 dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image src={profilePic} alt="dibrey jonatan " className="w-full h-auto rounded-2xl" />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between mr-20">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block mb-2 text-7xl font-bold">
                <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75"> satisfied clients</h2>
              </div>

              <div className="flex flex-col items-end justify-center ">
                <span className="inline-block mb-2 text-7xl font-bold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2> projects completed</h2>
              </div>

              <div className="flex flex-col items-end justify-center ">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2> Experience</h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
