import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, containerVariant, itemVariant } from '@/lib/variant'
import { FiDownload } from "react-icons/fi";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandWebflow } from "react-icons/tb";

const tech = [
    {
        name:'Javascript',
        icon: <RiJavascriptFill size={25}/>
    },
    {
        name:'Typescript',
        icon: <BiLogoTypescript size={25}/>
    },
     {
        name:'React Js',
        icon: <FaReact size={25}/>
    },
    {
        name:'Next Js',
        icon: <SiNextdotjs size={25}/>
    },
    {
        name:'Restfu Api',
        icon: <TbApi size={25}/>
    },
    {
        name:'Tailwind Css',
        icon: <SiTailwindcss size={25}/>
    },
    {
        name:'Git',
        icon: <FaGitAlt size={25}/>
    },
    {
        name:'Html',
        icon: <FaHtml5 size={25}/>
    },
    {
        name:'CSS',
        icon: <FaCss3Alt size={25}/>
    },
    {
        name:'Webflow',
        icon: <TbBrandWebflow size={25}/>
    },
]

export default function About() {
  return (
    <div id='about' className=' grid grid-cols-1 md:grid-cols-2 gap-10 h-full py-10 scroll-m-16'>
        <div className=' flex flex-col items-start gap-4'>
            <motion.div 
            variants={fadeIn('right', .2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.2}}
            className=' flex flex-row items-center gap-2'>
                <div className=' w-16 h-5 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-rose-500'></div>
                <h1 className=' text-mdClamp font-medium text-zinc-700 dark:text-zinc-200'>hello i'm Darel Honrejas</h1>
            </motion.div>
            <motion.p 
            variants={fadeIn('right', .4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.2}}
            className=' text-smClamp text-zinc-700 dark:text-zinc-300'>A detail-oriented Front End Developer passionate about crafting seamless digital experiences. With expertise on latest technologies, I thrive in dynamic environments, leveraging creativity and effective communication to deliver projects on time and within scope.
            As a strong team player, I believe in collaboration and fostering inclusive environments. I prioritize time management and writing clean, sustainable code to create enduring solutions. Let's work together to build exceptional digital experiences!</motion.p>
            <motion.a href="" 
                variants={fadeIn('right', .6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=' text-smClamp flex items-center gap-2 px-8 py-2 mt-4 rounded-full text-zinc-600 bg-zinc-200 dark:bg-zinc-900'>Resume <FiDownload size={20}/></motion.a>
        </div>

        <div className=' flex flex-col gap-8 items-center'>
            <motion.h1 
             variants={fadeIn('right', .2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.2}}
            className=' bg-gradient-to-r from-blue-600 via-purple-500 to-rose-500 text-transparent bg-clip-text'>Technologies</motion.h1>
            <motion.div 
             variants={containerVariant}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3 }}
            className=' grid grid-cols-2 lg:grid-cols-3 gap-5'>
                { tech.map(( techs, index) => (
                    <motion.div 
                    variants={itemVariant}
                    key={index} 
                    className=' flex items-center justify-center gap-2 px-6 py-2 rounded-lg text-zinc-700 dark:text-zinc-200 bg-zinc-200 dark:bg-zinc-900' >
                        {techs.icon}
                        <p className=' text-xs'>{techs.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </div>
  )
}
