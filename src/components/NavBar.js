import React from 'react';
import Link from 'next/link'
import Logo from './Logo';
import {useRouter} from 'next/router';
import { TwitterIcon, GithubIcon,LinkedInIcon,PinterestIcon,DribbbleIcon, SunIcon,MoonIcon } from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';
const CustomLink = ({ href, title, className = "" }) => {
  const router= useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className='
          h-[1px] inline-block  bg-dark
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full": "w-0"}
        
        dark:bg-light'
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {

  const [mode,setMode]=useThemeSwitcher()

  return (
   <header className="w-full px-32 py-8 font-medium flex items-center justify-between
   dark:text-light">
    <nav>
      <CustomLink href="/" title="Home" className='mr-4' />
      <CustomLink href="/about" title="About" className='mx-4' />
      <CustomLink href="/projects" title="Projects" className='mx-4' />
     {/* <CustomLink href="/articles" title="Articles" className='ml-4' />*/}
    </nav>
   
    {/*//in this place you put your social icons 
    //first you need to convert .Svg files to react components using this website https://react-svgr.com/playground/
    //You will have to add them in icons.js file in the components folder
    //then you import them here and use them in the nav bar*/}

    <nav className="flex items-center justify-center flex-wrap">
      <motion.a href="https://twitter.com/" target={"_blank"}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-6 mx-3 flex items-center justify-center">
        <TwitterIcon />
      </motion.a>
      <motion.a href="https://www.linkedin.com/" target={"_blank"}
       whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-6 mx-3 flex items-center justify-center">
        <LinkedInIcon />
      </motion.a>
      <motion.a href="https://www.pinterest.com/" target={"_blank"}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-6 mx-3 flex items-center justify-center bg-light rounded-full">
        <PinterestIcon />
      </motion.a>
      <motion.a href="https://dribbble.com/" target={"_blank"}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-6 mx-3 flex items-center justify-center">
        <DribbbleIcon />
      </motion.a>
      <motion.a href="https://github.com/" target={"_blank"}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-6 ml-3 flex items-center justify-center">
        <GithubIcon />
      </motion.a>
     <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
      className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
      >
      {
        mode === "dark" ? 
        <SunIcon className='fill-dark '  />
        :<MoonIcon className='fill-dark '  />
      }
     </button>
    </nav>
    <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
       <Logo/>
    </div>
   </header>
  );
};

export default NavBar;
