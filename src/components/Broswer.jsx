import React from 'react'
import { Details } from './Details'




export const Browser = () => {
    return (

        <div className='text-white mt-[10px] mr-[40px]'>
            <div>
                <h2>Browser and Devices</h2>
                <p className='text-[6px] text-gray-400'>These browsers and devices are currently signed in to your account.Remove any unauthorized devices</p>

                <hr className="mt-[10px] h-[6px]" />
            </div>
            <Details />
        </div>




    )
}