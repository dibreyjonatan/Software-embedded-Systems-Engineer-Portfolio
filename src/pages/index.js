import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image'
import ProfilePic from "../../public/images/profile/jonatan.jpg";
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import Hireme from '@/components/HireMe';
import lightbulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Embedded Systems Engineer</title>
        <meta name="description" content="Portfolio of Dibrey Jonatan, Embedded Systems Engineer" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center justify-center text-dark w-full min-h-screen dark:text-light bg-light dark:bg-dark">
        <Layout className="pt-0 md:p-8 sm:pt-4">
          <div className="flex flex-col-reverse lg:flex-col md:flex-col items-center justify-center w-full gap-8 md:gap-6">
            <div className="w-full lg:w-3/4 flex flex-col items-center justify-center text-center">
              <AnimatedText
                text="Crafting intelligent embedded systems, from concept to code under real-world constraints"
                className="!text-6xl xl:!text-5xl lg:!text-4xl md:!text-3xl sm:!text-2xl !leading-tight"
              />
              <p className="my-6 text-lg font-medium md:text-base sm:text-sm text-center max-w-2xl mx-auto">
                I specialize in developing efficient and reliable software for embedded systems, ensuring optimal performance and adherence to real-time requirements.<br />
                With a solid foundation in embedded systems engineering, I excel in designing and implementing software solutions that meet the unique challenges of resource-constrained environments.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                <Link
                  href="/cv.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light transition-colors duration-200 md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:kamdadibreyjonatan@gmail.com"
                  target="_blank"
                  className="text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="w-1/3 lg:w-1/2 md:w-2/3 sm:w-full flex items-center justify-center mb-6 md:mb-4">
              <Image
                src={ProfilePic}
                alt="Profile"
                width={320}
                height={320}
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </Layout>
        <Hireme />
        <div className="absolute right-8 bottom-8 w-20 sm:w-16 hidden md:block">
          <Image src={lightbulb} alt="Jonatan Kamdadi" className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}