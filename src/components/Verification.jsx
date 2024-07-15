import React from 'react';
import { Toggle } from './Toggle'
import { Button } from '../app/MTailwind'

export const Verification = () => {
    return (

        <div className="mr-[40px] overflow-hidden">
            <div className='mt-[10px] text-white flex justify-between content-center  items-center'>

                <div className="">
                    <h2 className='text-[10px]'>Two step verification</h2>
                    <p className='w-[220px] text-[6px] text-gray-400'>We recommend requiring a verification code in addition to your password  </p>
                </div>

                <div className='flex gap-6 items-center'>
                    <Toggle />
                    <p className='text-[6px]'>Two step verification</p>
                </div>

                <Button className='text-[7px]'>Edit</Button>




            </div>
            <hr className='mt-[8px] h-[4px]' />

        </div>
    )


}