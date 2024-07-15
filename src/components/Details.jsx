'use client'
import React from 'react'
import { info } from '@/utils/info'
import { Button } from '../app/MTailwind'



export const Details = () => {


    return (
        <div>
            {info.map((detail) => {
                return (
                    <div key={detail.id}>

                    <div className='mt-[10px] mb-[20px] flex justify-between content-center first-line:items-center'>

                        <div className='flex gap-4 justify-center content-center items-center max-w-[200px]'>
                            <img src={detail.img} height={20} width={20} />
                            <h2 className='text-[8px]'> {detail.description}</h2>
                        </div>


                        <div className='flex gap-[40px] justify-between content-center items-center max-w-[600px]'>

                            <div className="flex gap-4  items-center  place-items-center                            ">

                                <img src={detail.countImg} alt="" height={30} width={30} />
                                <h1 className='text-[6px] text-gray-400 '>{detail.country}</h1>
                            </div>


                            <h2 className=' text-[6px] text-gray-400'>{detail.sessioin}</h2>


                            <Button className='text-[7px]'>Delete</Button>
                        </div  >
                    </div>
                        <hr className="my-[6px] h-[4px]" />
                    </div>


                )
            })}


        </div>


    )
}