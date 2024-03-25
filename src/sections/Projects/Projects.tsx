import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variant'
import { IoMdLink } from "react-icons/io";
import { VscGithubAlt } from "react-icons/vsc";
import Image from 'next/image';

const projects = [
    {
        name:'Tasktify',
        description:'Todo web app with CRUD functionality built with NextJs, Typescript, RestApi,MongoDb, TailwindCss, Shadcn Ui, NodeJs and Express.',
        demo:'https://tasktify-eta.vercel.app/',
        github: 'https://github.com/D4rzDev/Tasktify',
        img:'/tasktify.png'
    },
    {
        name:'Inplay',
        description:'A simple website to watch videos online inspired by youtube. The website can fetch videos based on category, open specific videos, channels, comments, and search videos by keyword. The website is built with YoutubeApi, NextJs, Typescript, TailwindCss, and Shadcn Ui. ',
        demo:'https://inplay-livid.vercel.app',
        github: 'https://github.com/D4rzDev/inplay',
        img:'/inplay.png'
    },
    {
        name:'Ecommerce',
        description:' Ecommerce website with add to cart & checkout function built with NextJs, Typescript, Sanity, Stripe, Prisma, Tailwind and Shadcn Ui. ',
        demo:'https://ecommerce-next-y11z.vercel.app',
        github: 'https://github.com/D4rzDev/Ecommerce-next',
        img:'/ecommerce.png'
    },
    {
        name:'Dashboard',
        description:' A simple dasboard built with NextJs, Typescript, Tailwind Css and Recharts. ',
        demo:'https://dashboard1-lilac.vercel.app',
        github: 'https://github.com/D4rzDev/Dashboard1',
        img:'/dashboard.png'
    },

]

export default function Projects() {
  return (
    <div id='projects' className=' flex flex-col gap-10 items-start scroll-m-16'>
        <div className=' flex flex-col gap-4'>
            <motion.div 
            variants={fadeIn('right', .2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.2}}
            className=' flex flex-row items-center gap-2'>
                <div className=' w-16 h-5 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-rose-500'></div>
                <h1 className=' text-mdClamp font-medium text-zinc-700 dark:text-zinc-200'>projects</h1>
            </motion.div>
            <motion.p 
            variants={fadeIn('right', .4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.2}}
            className=' text-smClamp text-zinc-700 dark:text-zinc-300'>Check out some of my projects</motion.p>
           
        </div>
        <div className=' flex flex-col gap-5'>
            { projects.map(( project) => (
                <motion.div 
                 variants={fadeIn('right', .6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className=' grid grid-cols-1 md:grid-cols-2 gap-10 p-10 border-2 rounded-xl'>
                    <div className=' flex items-center justify-center'>
                        <div className=' grid place-items-center w-full p-2 bg-zinc-200 dark:bg-zinc-900 rounded-xl'>
                            <Image src={project.img} width={1000} height={1000} alt='img' className=' h-imgClamp w-auto '/>
                        </div>
                    </div>
                    <div className=' flex flex-col items-start '>
                        <h1 className=' text-2xl font-semibold bg-gradient-to-r from-blue-600 via-purple-500 to-rose-500 text-transparent bg-clip-text'>{project.name}</h1>
                        <p className=' text-smClamp text-zinc-700 dark:text-zinc-300'>{project.description}</p>

                       <div className=' flex items-center mt-6 gap-4'>
                            <a href={project.demo} target='blank' className=' flex items-center gap-2 text-xs text-white bg-gradient-to-r from-blue-600 via-purple-500 to-rose-500 px-8 py-2 rounded-full'><IoMdLink size={20}/>Demo</a>
                            
                            <a href={project.github} target='blank' className=' flex items-center gap-2 text-xs px-8 py-2 rounded-full text-zinc-600 bg-zinc-200 dark:bg-zinc-900'><VscGithubAlt size={20}/>Github</a>
                        </div>
                    </div>
                </motion.div>
            ))}

        </div>
        
    </div>
  )
}
