import React from 'react';
import { Toggle } from './Toggle'
import { Button } from '../app/MTailwind'

export const Verification = () => {
    return (

        <div className="mr-[40px] overflow-hidden">
            <div className='mt-[10px] text-white flex justify-between content-center  items-center'>

                <div className="">
                    <h2>Two step verification</h2>
                    <p className='w-[220px] text-[6px] text-gray-400'>We recommend requiring a verification code in addition to your password  </p>
                </div>

                <div className='flex gap-6'>
                    <Toggle />
                    <p>Two step verification</p>
                </div>

                <Button className='text-[8px]'>Edit</Button>




            </div>
            <hr className='mt-[20px] h-[6px]' />

        </div>
    )


}