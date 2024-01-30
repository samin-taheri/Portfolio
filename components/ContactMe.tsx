"use client";
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
}
type Props = {}

function ContactMe({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);
    return (
        <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-width-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 md:top-20 xl:top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact me</h3>
            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center pt-28 md:pt-16'>I have got kust what you need.{" "}
                    <span className='decoration-[#8336c8]/50 underline'>let's talk.</span></h4>
                <div className='space-y-3 flex flex-col'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#8336c8]/50 h-7 w-7 animate-pulse' />
                        <p className='text-xl'>samintaheri1922000@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-2 justify-center'>
                        <MapPinIcon className='text-[#8336c8]/50 h-7 w-7 animate-pulse' />
                        <p className='text-xl'>123 Developer Lane</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#8336c8]/50 h-7 w-7 animate-pulse' />
                        <p className='text-xl'>+12345678675 </p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' type="text" className='contactInput' />
                        <input {...register('email')} placeholder='Email' type="email" className='contactInput' />
                    </div>
                    <input {...register('subject')} placeholder='Subject' type="text" className='contactInput' />
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button className='bg-[#8336c8] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe