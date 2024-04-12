'use client';
import React, { useEffect, useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { fetchPageInfo } from '@/utils/getPageInfo';
import { urlFor } from '@/sanity';

type Props = {};

export default function Hero({ }: Props) {

    const [pageInfo, setPageInfo] = useState<PageInfo>();
    useEffect(() => {
        fetchPageInfo().then((data) => {
            setPageInfo(data as PageInfo);
        });
    }, []);

    const [text, count] = useTypewriter({
        words: [`Hi, My Name is ${pageInfo?.name}`, "<ILoveToCode/>"],
        loop: true,
        delaySpeed: 2000, // Adjust the delay speed to make the typing animation smoother
    });

    return (
        <div className='h-screen flex flex-col items-center justify-center align-middle text-center overflow-hidden relative'>
            <BackgroundCircles />
            {pageInfo?.heroImage && <img src={urlFor(pageInfo?.heroImage).url()} alt="bg-29" className="rounded-full h-32 w-32 mx-auto object-cover mb-5" />}
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
                <h1 className='text-4xl lg: 6xl font-semibold  scroll-px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#8336c8' />
                </h1>
                <div className='pt-5'>
                    <Link href={'#about'}><button className='heroButton'>About</button></Link>
                    <Link href={'#experience'}><button className='heroButton'>Experience</button></Link>
                    <Link href={'#skills'}><button className='heroButton'>Skills</button></Link>
                    <Link href={'#projects'}><button className='heroButton'>Projects</button></Link>
                </div>
            </div>
        </div>
    );
}
