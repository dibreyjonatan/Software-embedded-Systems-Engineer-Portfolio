import React from 'react'   
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
// import images as static paths or use them directly as strings in the Image component
import cryptoScreenerImage from '../../public/images/projects/crypto-screener-cover-image.jpg';
import agencyWebsiteImage from '../../public/images/projects/agency-website-cover-image.jpg';
import fashionStudioImage from '../../public/images/projects/fashion-studio-website.jpg';
const FeaturedProject = ({type,title,summary,image,link,github}) => {
    return (
        <article className="w-full flex items-center 
        justify-between rounded-3xl border border-solid rounded-br-2xl
         border-dark bg-light shadow-2xl  relative dark:bg-dark dark:border-light
         p-12 ">
          <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
           bg-black shadow-[0_8px_30px_rgba(0,0,0,0.8)] rounded-br-3xl" />

        <Link href={link} target="_blank"
            className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
        <Image src={image} alt={title} className="w-full h-auto " />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6">
            <span className="text-primary font-semibold text-xl dark:text-primaryDark">
                {type}
            </span>
            <Link href={link} target="_blank" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-3xl font-bold hover:underline underline-offset-2 dark:text-light">
                {title}
            </h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light'>
                {summary}
            </p>
            <div className='mt-2 flex items-center'>
                <Link href={github} target="_blank" className='w-10 '>
                    <GithubIcon />
                </Link>
                <Link href={link} target="_blank" className="ml-4 
                rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                dark:bg-light dark:text-dark">
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
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText className="text-center mb-16" text="Imagination Trumps Knowledge!" />
                <div className='grid grid-cols-12 gap-24 ml-10 mr-10'>
                    <div className="col-span-12">
                        
                    </div>
                    <div className="col-span-6">
                        <FeaturedProject
                            type="Featured"
                            title="Project 1"
                            summary="This is a summary of project 1."
                            image={cryptoScreenerImage}
                            link="/projects/project1"
                            github="/github/project1"
                        />
                    </div>
                    <div className="col-span-6">
                        <FeaturedProject
                            type="Featured"
                            title="Project 2"
                            summary="This is a summary of project 2."
                            image={agencyWebsiteImage}
                            link="/projects/project2"
                            github="/github/project2"
                        />
                    </div>
                    <div className="col-span-6">
                        <FeaturedProject
                            type="Featured"
                            title="Project 3"
                            summary="This is a summary of project 3."
                            image={fashionStudioImage}
                            link="/projects/project3"
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