import React from 'react'
import { Details } from './Details'




export const Browser = () => {
    return (

        <div className='text-white mt-[40px] mr-[40px]'>
            <div>
                <h1>Browser and Devices</h1>
                <p className='text-[11px] text-gray-400'>These browsers and devices are currently signed in to your account.Remove any unauthorized devices</p>

                <hr className="mt-[20px] h-[10px]" />
            </div>
            <Details />
        </div>




    )
}