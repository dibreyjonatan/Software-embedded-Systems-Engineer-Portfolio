import React from 'react'
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import TransitionEffect from '@/components/TransitionEffect';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';

import Project1 from '../../public/images/projects/projet-1.PNG';
import Project2 from '../../public/images/projects/project-2.png';
import Project3 from '../../public/images/projects/project-3.png';

const FeaturedProject = ({ type, title, summary, image, link, github }) => {
    return (
        <article className="w-full flex flex-col lg:flex-row items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl relative dark:bg-dark dark:border-light p-6 md:p-8 lg:p-12 mb-10 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:border-primary dark:hover:border-primaryDark">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-black shadow-[0_8px_30px_rgba(0,0,0,0.8)] rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
            <Link href={link} target="_blank" className="w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg mb-4 lg:mb-0">
                <Image src={image} alt={title} className="w-full h-auto object-cover rounded-xl" />
            </Link>
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-between lg:pl-6">
                <span className="text-primary font-semibold text-lg md:text-xl dark:text-primaryDark mb-2">
                    {type}
                </span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-2xl md:text-3xl font-bold dark:text-light">
                        {title}
                    </h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light text-base md:text-lg'>
                    {summary}
                </p>
                <div className='mt-4 flex items-center'>
                    <Link href={github} target="_blank" className='w-8 md:w-10'>
                        <GithubIcon />
                    </Link>
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-4 md:px-6 text-base md:text-lg font-semibold dark:bg-light dark:text-dark">
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
                <Layout className='pt-8 md:pt-16 px-2 md:px-8'>
                    <AnimatedText className="text-center mb-10 md:mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl !leading-tight" text="Imagination Trumps Knowledge!" />
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16'>
                        <FeaturedProject
                            type="Robotics project"
                            title="PyQt Turtlesim Interface"
                            summary="Ce projet utilise PyQt5 et ROS2 Jazzy Jalisco pour créer une interface graphique intuitive permettant de contrôler le robot Turtlesim. L'intégration de PyQt5 offre une expérience utilisateur fluide, tandis que ROS2 assure la communication efficace avec le robot simulé."
                            image={Project1}
                            link="https://github.com/dibreyjonatan/Ros2_jazzy_jalisco_turtlesim_interface.git"
                            github="/github/project1"
                        />
                        <FeaturedProject
                            type="Hardware Verification process"
                            title="Hardware Verification with Cocotb"
                            summary="Mise en place d'un environnement de test robuste pour la vérification de code RTL (Verilog/VHDL) avec Python et Cocotb. L'approche Makefile facilite la gestion des builds et des tests, permettant des scénarios complexes et des tests automatisés."
                            image={Project2}
                            link="https://github.com/dibreyjonatan/Hardware-Verification-with-Cocotb-and-python.git"
                            github="/github/project2"
                        />
                        <FeaturedProject
                            type="IOT project"
                            title="Home Assistance GUI with MQTT"
                            summary="Système de contrôle IoT basé sur Raspberry Pi, avec interface graphique PyQt et communication MQTT via Eclipse broker. Ce projet démontre la maîtrise des systèmes embarqués, des protocoles réseau et du développement d'interfaces pour le contrôle en temps réel."
                            image={Project3}
                            link="https://www.linkedin.com/posts/dibrey-jonatan-kamda-tezebo-a383b4262_iot-mqtt-embeddedsystems-activity-7273626415718137856-WCp3?utm_source=share&utm_medium=member_android&rcm=ACoAAEB8n8wBR_-L6XjQ52syjdG6SenCKS1kWrc"
                            github="/github/project3"
                        />
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects;