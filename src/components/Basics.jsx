import { Input, Button } from '../app/MTailwind';
import React from 'react';


export const Basics = () => {

    return (
        <div className=" text-white mt-[12px] mr-[40px]">
            <h2 className='mb-[10px] text-[10px]'>Basics</h2>
            <hr className='h-[6px]' />

            <div className="flex justify-between items-center content-center mb-[10px]">
                <div className="mt-[10px] text-[6px]">
                    <h2 className='text-[10px]'>Password</h2>
                    <p className='text-[6px]'>Set a password to protect your account</p>
                </div>
                <div className="flex gap-4 mt-[10px] items-center ">
                    <Input className='text-[6px] ' type='password'
                        defaultValue='password' />
                    <p className='text-green-400 w-[220px] m-auto text-[6px] '><span>✓</span> very secure</p>
                </div>
                <Button className='text-[7px]'>Edit</Button>
            </div>
            <hr className='h-[4px] mt-[6px]' />
        </div>


    )

}