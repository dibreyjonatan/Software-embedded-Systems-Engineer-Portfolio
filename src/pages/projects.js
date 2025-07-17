import React from 'react'   
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import TransitionEffect from '@/components/TransitionEffect';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
// import images as static paths or use them directly as strings in the Image component

import Project1 from '../../public/images/projects/projet-1.PNG' ;
import Project2 from '../../public/images/projects/project-2.png' ;
import Project3 from '../../public/images/projects/project-3.png' ;

const FeaturedProject = ({type,title,summary,image,link,github}) => {
    return (
        <article className="w-full flex items-center 
        justify-between rounded-3xl border border-solid rounded-br-2xl
         border-dark bg-light shadow-2xl  relative dark:bg-dark dark:border-light
         p-12 
         lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
          <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
           bg-black shadow-[0_8px_30px_rgba(0,0,0,0.8)] rounded-br-3xl
           xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

        <Link href={link} target="_blank"
            className="w-1/2 cursor-pointer overflow-hidden rounded-lg
            lg:w-full ">
        <Image src={image} alt={title} className="w-full h-auto " />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6
        lg:w-full lg:pl-0 lg:pt-6">
            <span className="text-primary font-semibold text-xl dark:text-primaryDark
            xs:text-base">
                {type}
            </span>
            <Link href={link} target="_blank" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-3xl font-bold hover:underline underline-offset-2
             dark:text-light sm:text-sm">
                {title}
            </h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light
            sm:text-sm '>
                {summary}
            </p>
            <div className='mt-2 flex items-center'>
                <Link href={github} target="_blank" className='w-10 md:w-6'>
                    <GithubIcon />
                </Link>
                <Link href={link} target="_blank" className="ml-4 
                rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                dark:bg-light dark:text-dark
                sm:px-4 sm:text-sm">
                    Visit Project
                </Link>
            </div>
            </div>
        </article>
    )
}
const projects = () => {
    return (    
        <>
        <Head>
            <title>Projects Page</title>
            <meta name="description" content="project section" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText className="text-center mb-16
                lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" text="Imagination Trumps Knowledge!" />
                <div className='grid grid-cols-12 gap-24 ml-10 mr-10 gap-y-32 xl:gap-x-16 lg:gap-x-8
                md:gap-y-24 sm:gap-x-0'>
                    <div className="col-span-12">
                        
                    </div>
                    <div className="col-span-6 sm:col-span-12 ">
                        <FeaturedProject
                            type="Robotics project"
                            title="PyQt Turtlesim Interface"
                            summary="This project leverages the robust capabilities of PyQt5 and ROS2 Jazzy Jalisco to create an intuitive graphical user interface (GUI) for controlling the Turtlesim bot. By integrating PyQt5, the project provides a user-friendly interface for seamless interaction with the simulation environment. ROS2 Jazzy Jalisco ensures efficient communication and command execution to the Turtlesim. The successful implementation of this GUI demonstrates proficiency in front-end development with PyQt5 and back-end 
                            robotic control with ROS2, specifically for simulation and visualization tasks."
                            image={Project1}
                            link="https://github.com/dibreyjonatan/Ros2_jazzy_jalisco_turtlesim_interface.git"
                            github="/github/project1"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <FeaturedProject
                            type="Hardware Verification process"
                            title="Hardware Verification with Cocotb"
                            summary="This project focuses on establishing a robust test bench environment for verifying Register-Transfer Level (RTL) code, specifically designs written in Verilog or VHDL. The methodology leverages Python for test automation and the Cocotb co-simulation framework for seamless interaction with the RTL design. A Makefile-driven approach is employed to manage the build process, test execution, and simulation flows. This setup ensures comprehensive and efficient verification of the RTL code 
                            by enabling complex test scenarios and automated regression testing."
                            image={Project2}
                            link="https://github.com/dibreyjonatan/Hardware-Verification-with-Cocotb-and-python.git"
                            github="/github/project2"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <FeaturedProject
                            type="IOT project"
                            title="Home Assistance Graphical User Interface Implemented using MQTT communication"
                            summary="TThis project demonstrates a robust IoT control system, leveraging a Raspberry Pi as the central hub. Commands are issued via a user-friendly PyQt graphical user interface (GUI) and transmitted efficiently through an MQTT protocol, utilizing an Eclipse broker for reliable message queuing. This setup showcases a comprehensive understanding of embedded systems, network communication protocols,
                             and GUI development for real-time data exchange and control."
                            image={Project3}
                            link="https://www.linkedin.com/posts/dibrey-jonatan-kamda-tezebo-a383b4262_iot-mqtt-embeddedsystems-activity-7273626415718137856-WCp3?utm_source=share&utm_medium=member_android&rcm=ACoAAEB8n8wBR_-L6XjQ52syjdG6SenCKS1kWrc"
                            github="/github/project3"
                        />
                    </div>
                </div>
            </Layout>
        </main>
        </>
    )
}

export default projects;       