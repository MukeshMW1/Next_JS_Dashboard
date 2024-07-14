import { Input, Button } from '../app/MTailwind';
import React from 'react';


export const Basics = () => {

    return (
        <div className=" text-white mt-[40px] mr-[40px]">
            <h1 className='mb-[20px]'>Basics</h1>
            <hr className='h-[10px]' />

            <div className="flex justify-between items-center content-center mb-[20px]">
                <div className="mt-[20px] text-[15px]">
                    <h2 className='text-[14px]'>Password</h2>
                    <p className='text-[11px]'>Set a password to protect your account</p>
                </div>
                <div className="flex gap-4 mt-[20px] ">
                    <Input className='text-[15px] ' type='password'
                        defaultValue='password' />
                    <p className='text-green-400 w-[220px] m-auto '><span>✓</span> very secure</p>
                </div>
                <Button>Edit</Button>
            </div>
            <hr className='h-[10px]' />
        </div>


    )

}