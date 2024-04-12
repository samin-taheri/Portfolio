"use client";
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Skill } from '@/typings';
import { fetchSkills } from '@/utils/fetchSkills';
import SkillCard from './SkillCard';

type Props = {}

function Skills({ }: Props) {
    const [skills, setSkills] = useState<Skill[]>([]);
    useEffect(() => {
        fetchSkills().then((data) => {
            setSkills(data as Skill[]);
        });
    }, []);

    return (
        <motion.div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            <h3 className='absolute top-24 md:top-20 xl:top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500  text-sm'>Hover over a skill or current proficiency</h3>
            <div className='grid grid-cols-5 gap-5 pt-20 md:pt-32'>
                {skills?.slice(0, skills.length / 2).map((skill, i) => (
                    <SkillCard key={i} skill={skill} />
                ))}
                {skills?.slice(skills.length / 2, skills.length).map((skill, i) => (
                    <SkillCard key={i} skill={skill} directionLeft />
                ))}
            </div>
        </motion.div>
    )
}

export default Skills