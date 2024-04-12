'use client';
import { Social } from '@/typings';
import { fetchSocials } from '@/utils/fetchSocials';
import { motion } from 'framer-motion'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {
}

export default function Header({ }: Props) {
    const [socials, setSocials] = useState<Social[]>([]);

    useEffect(() => {
        fetchSocials().then(setSocials).catch(error => console.error("Failed to fetch socials:", error));
    }, []);

    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div initial={{ x: -500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='flex-row flex items-center'>
                {/* Social Icons */}
                {socials.map((social, i) => (
                    <SocialIcon key={social._id} url={social.url} fgColor='gray' bgColor='transparent' />
                ))}
            </motion.div>
            <Link href={"#contact"}>
                <motion.div initial={{ x: 500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='flex flex-row items-center text-gray-300 cursor-pointer'>
                    {/* <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="gray" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400 pl-3'>Get In Touch!</p>
                </motion.div>
            </Link>
        </header>
    )
}