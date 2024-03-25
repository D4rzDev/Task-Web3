"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { IoMdMenu } from "react-icons/io";
import { ThemeSwitcher } from '@/components/Theme/ThemeSwitcher';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variant';

const social = [
  {
    icon: <FaLinkedin size={25}/>,
    url: ''
  },
  {
    icon: <FaGithubSquare size={25}/>,
    url: ''
  },
  {
    icon: <IoMail size={25}/>,
    url: ''
  },
]

export default function Navbar() {
   const [isOpen, setIsOpen] = useState( true)
  const handleNavClick = () => {
    setIsOpen(!isOpen)
  };
  return (
    <nav className=' sticky flex items-center justify-center max-w-[1280px] top-0 z-20 h-12 px-4 md:px-8 py-8 bg-inherit w-full'>
        <div className=' flex items-center justify-between w-full'>
            <a href="/">
                <Image src='/d.ev.svg' width={50} height={50} alt='logo'/>
            </a>
            <ul className=' hidden md:flex items-center justify-center gap-6'>
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <ThemeSwitcher/>
            </ul>
            <div className=' flex items-center gap-4 md:hidden'>
              <ThemeSwitcher/>
              <div className=' md:hidden'>
                <Sheet>
                  <SheetTrigger>
                    <IoMdMenu size={25}/>
                    </SheetTrigger>
                  <SheetContent>
                    <div className=' flex flex-col items-center justify-center gap-6 mt-10'>
                      <motion.div
                        variants={fadeIn('up', .1)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once:false, amount: 0.2}}  
                      >
                          <ThemeSwitcher/>
                      </motion.div>
                          <motion.a href="#projects"
                            variants={fadeIn('up', .2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false, amount: 0.2}}
                          >Projects</motion.a>
                          <motion.a href="#about"
                             variants={fadeIn('up', .3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false, amount: 0.2}}
                          >About</motion.a>
                          <motion.a href="#contact"
                             variants={fadeIn('up', .4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false, amount: 0.2}}
                          >Contact</motion.a>
                          <div className=' flex items-center gap-6  mt-10'>
                          { social.map(( socials) => (
                            <motion.a href="" 
                            variants={fadeIn('up', .5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false, amount: 0.2}}
                            className='  text-zinc-700 dark:text-zinc-200'>
                              {socials.icon}
                              </motion.a>
                          ))}
                        </div>
                        <motion.p 
                        variants={fadeIn('up', .6)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once:false, amount: 0.2}}
                        className=' text-xs text-center'>Copyright © Darel Honrejas. All rights reserved.</motion.p>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
        </div>
    </nav>
  )
}
