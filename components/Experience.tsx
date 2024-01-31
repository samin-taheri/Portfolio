"use client";
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import React from 'react'

type Props = {}

export default function Experience({ }: Props) {
    return (
        <motion.div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center' initial={{ opacity: 0 }} transition={{ duration: 1.5 }} whileInView={{ opacity: 1 }} >
            <h3 className='absolute top-24 md:top-20 xl:top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-24 md:mt-16 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8336c8]/80'>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </motion.div>
    )
}