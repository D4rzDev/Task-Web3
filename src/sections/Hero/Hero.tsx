import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variant'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoHandLeft } from "react-icons/io5";

const social = [
  {
    icon: <FaLinkedin size={25}/>,
    url: 'https://www.linkedin.com/in/darel-honrejas-15455b288/'
  },
  {
    icon: <FaGithubSquare size={25}/>,
    url: 'https://github.com/D4rzDev'
  },
  {
    icon: <IoMail size={25}/>,
    url: 'mailto:darelhonrejaswork@gmail.com'
  },
]
export default function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-[100dvh]'>
        <div className=' flex flex-col items-start justify-center gap-10'>
            <div className=' flex flex-col items-start gap-2 pr-10'>
                <motion.p
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=' text-smClamp text-zinc-700 dark:text-zinc-200 '
                >Hi, I'm Darel</motion.p>

                <motion.h1
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=' text-lgClamp font-semibold bg-gradient-to-r from-blue-600 via-purple-500 to-rose-500 text-transparent bg-clip-text'>Front End  Developer</motion.h1>
                
                <motion.p 
                variants={fadeIn('up', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=' text-smClamp text-zinc-700 dark:text-zinc-200 '>A passionate Front End Developer with a knack for turning ideas into captivating digital experiences. Armed with latest technologies, I'm on a mission to craft visually stunning and user-friendly websites that leave a lasting impression.</motion.p>
            </div>
            <div className=' flex items-center gap-4'>
                <motion.a href="" 
                variants={fadeIn('up', 0.8)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=' text-smClamp text-white bg-gradient-to-r from-blue-600 via-purple-500 to-rose-500 px-8 py-2 rounded-full'>Projects</motion.a>
                
                <motion.a href="" 
                variants={fadeIn('up', 1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=' text-smClamp px-8 py-2 rounded-full text-zinc-600 bg-zinc-200 dark:bg-zinc-900'>Contact</motion.a>
            </div>
            <div className=' flex items-center gap-4'>
              { social.map(( socials) => (
                <motion.a href={socials.url} 
                variants={fadeIn('up', 1.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className='  text-zinc-700 dark:text-zinc-200'>
                  {socials.icon}
                  </motion.a>
              ))}
            </div>
        </div>
        <motion.div 
        variants={fadeIn('up', .8)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.2}}
        className=' grid place-items-center'>
          <Image src='/hero.png' width={1000} height={1000} alt='img' className=' hidden md:flex h-heroImg w-auto'/>
        </motion.div>
    </div>
  )
}
