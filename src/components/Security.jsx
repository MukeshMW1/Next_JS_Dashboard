'use client'
import React from 'react';
import { Circularbar } from '@/components/Circularbar';
import { Button } from '../app/MTailwind';

export const Security = () => {

    const percentage = 66;

    return (
        <div className=" p-4 lg:pl-7 mt-[20px] text-white flex justify-between content-center  items-center  bg-white bg-opacity-10   backdrop-blur-sm shadow-md rounded-lg mr-[40px] overflow-hidden">
            <div className="flex gap-8">

                <Circularbar percentage={percentage}/>

                <div>
                    <h1 className='text-[15px]'>Your account security is { percentage }%</h1>
                    <p className='text-[10px]'>Please review your account security settings and update your password.</p>
                </div>
            </div>

            <div className="flex gap-6">
                <Button >Dismiss</Button>
                <Button className="bg-blue-600">Review Security</Button>
            </div>


        </div>

    )
}