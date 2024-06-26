"use client";
import { urlFor } from '@/sanity';
import { Experiences } from '@/typings';
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    experience: Experiences,
}

export default function ExperienceCard({ experience }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[400px] xl:w-[400px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity:40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            {experience?.companyImage && <motion.img className='w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center'
                src={urlFor(experience?.companyImage).url()} alt="" initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} />}
            <div className='px-0 md:px-0'>
                <h4 className='text-2xl font-light'>{experience?.jobTitle}</h4>
                <p className='font-bold text-xl mt-1'>{experience?.company}</p>
                <div className='flex space-x-2 my-2'>
                    {experience?.technologies.map((tech) => (
                        tech.image && (
                            <img className='h-8 w-8 rounded-full object-cover' key={tech._id} src={urlFor(tech.image).url()} alt="bg-29" />
                        )
                    ))}
                </div>
                <p className='uppercase py-5 text-gray-300'>{experience.dateStarted} - {""}
                    {experience.isCurrentlyWorkingHere
                        ? "Present"
                        : experience?.dateEnded}</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}