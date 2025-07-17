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
import TransitionEffect from '@/components/TransitionEffect';
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
        <title> About  of kamda tezebo dibrey jonatan</title>
        <meta name="description" content="About Page of an Embedded systems Developer Portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center
       text-dark dark:text-light">
        <Layout className='pt-16'>
          <AnimatedText text="Passion fuels purpose !" className="text-center mb-16 lg:!text-7xl 
          sm:!text-6xl xs:!text-4xl 
          sm:mb-8 "/>
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4
            md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 
              dark:text-light/75"> Biography</h2>
              <p className="font-medium">
                Hi, I am Dibrey Jonatan, a passionate embedded systems Engineer with a strong foundation in electronic systems, computer science and a keen interest in creating efficient, reliable, and innovative solutions for real-world challenges. My journey in the field has been driven by a desire to push the boundaries of technology and deliver high-quality software that meets the unique demands of embedded systems.
              </p>
              <p className="my-4 font-medium">
                With a solid background in embedded systems engineering, I have honed my skills in designing and implementing software solutions that operate seamlessly within resource-constrained environments. My expertise lies in developing efficient algorithms, optimizing performance, and ensuring the reliability of embedded applications.
              </p>
              <p className="font-medium">
                I thrive on tackling complex problems and finding creative solutions that enhance the functionality and performance of embedded systems. My commitment to continuous learning and staying updated with the latest advancements in the field allows me to deliver cutting-edge solutions that meet the evolving needs of clients and industries.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
             bg-light p-8 dark:bg-dark dark:border-light
             xl:col-span-4 md:order-1  md:col-span-8"
              >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]
               bg-dark dark:bg-dark" />
              <Image src={profilePic} alt="dibrey jonatan " className="w-full h-auto rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between mr-20
            xl:col-span-8 xl:flex-row  xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center
              xl:items-center">
                <span className="inline-block mb-2 text-7xl font-bold
                md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={15} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm">Technology used</h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block mb-2 text-7xl font-bold
                 md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm"> projects completed</h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold
                 md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm"> Experience</h2>
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
