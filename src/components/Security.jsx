'use client'
import React from 'react';
import { Circularbar } from '@/components/Circularbar';
import { Button } from '../app/MTailwind';

export const Security = () => {

    const percentage = 66;

    return (
        <div className=" p-3 lg:pl-5 mt-[10px] text-white flex justify-between content-center  items-center  bg-white bg-opacity-10   backdrop-blur-sm shadow-md rounded-lg mr-[40px] overflow-hidden">
            <div className="flex gap-8">

                <Circularbar percentage={percentage}/>

                <div>
                    <h2 className='text-[10px]'>Your account security is { percentage }%</h2>
                    <p className='text-[8px]'>Please review your account security settings and update your password.</p>
                </div>
            </div>

            <div className="flex gap-6">
                <Button className="text-[8px] h-[15px] w-[30px]">Dismiss</Button>
                <Button className="bg-blue-600 text-[8px] h-[15px] w-[30px]">Review Security</Button>
            </div>


        </div>

    )
}