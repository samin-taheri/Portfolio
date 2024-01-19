"use client";
import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            transition={{ duration: 1.5 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <motion.img viewport={{ once: true }} transition={{ duration: 1.2 }} initial={{ x: -200 }} whileInView={{ x: 0, opacity: 1 }} src="/samin.jpeg" alt="bg-29" className="-mb-72 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[300px] xl:h-[300px]" />
            <div className='space-y-10 px-0 md:px-10 mt-44 md:mt-0'>
                <h4 className='text-3xl font-semibold -mb-6 md:mb-6'>
                    Here is a {""}
                    <span className='underline decoration-[#ccc]/50'>little</span>{" "}
                    background
                </h4>
                <p className='text-base'>Hi I'm Samin, 🚀. I am a front-end developer who has majored in computer science engineering with strong roots in CSS, HTML, JavaScript/TypeScript, and modern design tools and frameworks. I am a React, Next.js, and React Native developer. I have strong interpersonal and team-building abilities. I always create user-friendly and mobile-friendly responsive designs with the importance and growth of the mobile-oriented market in mind. My development skills are diverse, and I can design and develop web pages as well as handle mobile applications. I am currently improving myself through my contributions as a front-end developer.</p>
            </div>
        </motion.div>
    )
}