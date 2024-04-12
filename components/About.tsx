"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { PageInfo } from '@/typings';
import { fetchPageInfo } from '@/utils/getPageInfo';
import { urlFor } from '@/sanity';

type Props = {}

export default function About({ }: Props) {
    const [pageInfo, setPageInfo] = useState<PageInfo>();
    useEffect(() => {
        fetchPageInfo().then((data) => {
            setPageInfo(data as PageInfo);
        });
    }, []);

    return (
        <motion.div
            transition={{ duration: 1.5 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            {pageInfo?.profilePic && <motion.img viewport={{ once: true }} transition={{ duration: 1.2 }} initial={{ x: -200 }} whileInView={{ x: 0, opacity: 1 }} src={urlFor(pageInfo?.profilePic).url()} alt="bg-29" className="-mb-72 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[300px] xl:h-[300px]" />}
            <div className='space-y-10 px-0 md:px-10 mt-44 md:mt-0'>
                <h4 className='text-3xl font-semibold -mb-6 md:mb-6'>
                    Here is a {""}
                    <span className='underline decoration-[#ccc]/50'>little</span>{" "}
                    background
                </h4>
                <p className='text-base'>{pageInfo?.backgroundInformation}</p>
            </div>
        </motion.div>
    )
}