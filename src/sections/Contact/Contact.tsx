import { fadeIn } from '@/lib/variant'
import { motion } from 'framer-motion'
import React from 'react'
import { IoMail } from "react-icons/io5"
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

export default function Contact() {
  return (
    <div id='contact' className=' flex flex-col gap-8 scroll-m-16'>
        <div className=' flex flex-col items-start gap-4'>
            <motion.div 
            variants={fadeIn('right', .2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.2}}
            className=' flex flex-row items-center gap-2'>
                <div className=' w-16 h-5 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-rose-500'></div>
                <h1 className=' text-mdClamp font-medium text-zinc-700 dark:text-zinc-200'>say hello</h1>
            </motion.div>
            <motion.p 
            variants={fadeIn('right', .4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.2}}
            className=' text-smClamp text-zinc-700 dark:text-zinc-300'>Let's work together</motion.p>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-20'>
            <div className=' flex flex-col items-start gap-4'>
                <motion.p 
                variants={fadeIn('right', .6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=' text-smClamp text-zinc-700 dark:text-zinc-300'>I'm available for freelance & full time positions.Contact me and lets talk.</motion.p>
                <motion.a href='mailto:darelhonrejaswork@gmail.com' 
                 variants={fadeIn('right', .8)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=' flex flex-row items-center gap-2 px-10 py-4 rounded-lg bg-zinc-200 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200'>
                    <IoMail size={30}/>
                    <p>Send a message</p>
                    <FaLongArrowAltRight size={30} className=' ml-5'/>
                </motion.a>

                <motion.a href='https://www.linkedin.com/in/darel-honrejas-15455b288/' 
                 variants={fadeIn('right', 1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=' flex flex-row items-center gap-2 px-10 py-4 rounded-lg bg-zinc-200 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200'>
                    <FaLinkedin size={30}/>
                    <p>Send a message</p>
                    <FaLongArrowAltRight size={30} className=' ml-5'/>
                </motion.a>
            </div>
            <motion.div 
             variants={fadeIn('up', .4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.2}}
            className=' grid place-items-center'>
                <Image src='/message.png' width={300} height={300} alt='img' className=' hidden md:flex'/>
            </motion.div>
        </div>
    </div>
  )
}
