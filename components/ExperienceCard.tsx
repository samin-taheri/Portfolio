"use client";
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[400px] xl:w-[400px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity:40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img className='w-24 h-24 rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center'
                src="/samin.jpeg" alt="" initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} />
            <div className='px-0 md:px-0'>
                <h4 className='text-2xl font-light'>Frontend Developer</h4>
                <p className='font-bold text-xl mt-1'>PAPAFAM</p>
                <div className='flex space-x-2 my-2'>
                    <img className='h-10 w-10 rounded-full'
                        src="/samin.jpeg" alt="bg-29" />
                    <img className='h-10 w-10 rounded-full'
                        src="/samin.jpeg" alt="bg-29" />
                    <img className='h-10 w-10 rounded-full'
                        src="/samin.jpeg" alt="bg-29" />
                </div>
                <p className='uppercase py-5 text-gray-300'>Started work ... - Ended work ...</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                </ul>
            </div>
        </article>
    )
}