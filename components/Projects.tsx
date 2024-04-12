"use client";
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/typings';
import { fetchProjects } from '@/utils/fetchProjects';
import { urlFor } from '@/sanity';

type Props = {}

function Projects({ }: Props) {
    const [projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
        fetchProjects().then((data) => {
            setProjects(data as Project[]);
        });
    }, []);

    return (
        <motion.div className='h-screen flex overflow-hidden relative flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0' initial={{ opacity: 0 }} transition={{ duration: 1.5 }} whileInView={{ opacity: 1 }} >
            <h3 className='absolute top-24 md:top-20 xl:top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
            <div className='relatrive w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8336c8]/80'>
                {/* Project */}
                {projects?.map((project, i) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        {project?.image && <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src={urlFor(project.image).url()} alt="" className='w-70 h-40 md:w-100 md:h-60' />}
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#8336c8]/50'>Case Study {i + 1} of {projects.length}:</span>{project?.title}</h4>
                            <div className='flex items-center space-x-4 justify-center'>
                                {project?.technologies.map((tech) => (
                                    tech.image && (
                                        <img className='h-8 w-8 rounded-full object-cover' key={tech._id} src={urlFor(tech.image).url()} alt="bg-29" />
                                    )
                                ))}
                            </div>
                            <p className='text-lg text-center md:text-left'>{project?.summary}</p>
                        </div>
                    </div>
                ))}

            </div>
            <div className='w-full absolute top-[30%] bg-[#8336c8]/10 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    )
}

export default Projects